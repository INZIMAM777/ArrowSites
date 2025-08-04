import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaArrowLeft, FaRupeeSign, FaWhatsapp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFirebase } from '../../context/FirebaseContext';

// 🔹 Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
  }
`;

// 🔹 Styled components
// [Keep all your existing styled components here unchanged]
// For brevity, I've omitted re-pasting all the styled-components you've already written — you can keep them as is in your file.

// 🔹 Schedule Generator
const generateRandomSchedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const randomTime = times[Math.floor(Math.random() * times.length)];
  const today = new Date();
  let daysToAdd = (days.indexOf(randomDay) + 7 - today.getDay()) % 7;
  if (daysToAdd === 0) daysToAdd = 7;
  const scheduledDate = new Date(today);
  scheduledDate.setDate(today.getDate() + daysToAdd);
  const formattedDate = scheduledDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return {
    day: randomDay,
    time: randomTime,
    fullDate: formattedDate,
    timestamp: `${formattedDate} at ${randomTime}`
  };
};

// 🔹 WhatsApp Sender
const sendWhatsAppMessage = (property, schedule) => {
  const phoneNumber = '+919043531165';
  const message = `Hello, I'm interested in your property "${property.title}" (${property.address}). I would like to schedule a visit on ${schedule.timestamp}. Please confirm if this time works for you.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// 🔹 Main Component
export const Detail = () => {
  const dataId = useLoaderData();
  const firebase = useFirebase();

  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    firebase.getLists()
      .then(snapshot => {
        const properties = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        const matched = properties.find(p => p.id === dataId);
        if (!matched) {
          setError(`No property found with ID: ${dataId}`);
        } else {
          setProperty(matched);
        }
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch property data.");
      });
  }, [dataId, firebase]);

  const formatPrice = (price, units) => {
    if (units === "crore") return `${price} Crore`;
    if (units === "lakh/month") return `${price} Lakh/month`;
    if (units === "month") return `${price.toLocaleString("en-IN")}/month`;
    return price;
  };

  const handleScheduleVisit = () => {
    const newSchedule = generateRandomSchedule();
    setSchedule(newSchedule);
    setShowConfirmation(true);
    sendWhatsAppMessage(property, newSchedule);
  };

  if (error) {
    return (
      <PropertyDetailError>
        <ErrorContainer>
          <ErrorMessage>Error: {error}</ErrorMessage>
          <BackLink to="/Cards">
            <FaArrowLeft /> Back to Listings
          </BackLink>
        </ErrorContainer>
      </PropertyDetailError>
    );
  }

  if (!property) {
    return (
      <PropertyDetailError>
        <ErrorContainer>
          <ErrorMessage>Loading property details...</ErrorMessage>
        </ErrorContainer>
      </PropertyDetailError>
    );
  }

  return (
    <>
      <GlobalStyle />
      <PropertyDetailPage>
        <PropertyDetailContainer>
          <BackLink to="/Cards">
            <FaArrowLeft /> Back to Listings
          </BackLink>

          <PropertyHeader>
            <PropertyTitle>{property.title}</PropertyTitle>
            <PropertyLocation>
              <FaMapMarkerAlt />
              <span>{property.address}, {property.city}, {property.state}, {property.country}</span>
            </PropertyLocation>
          </PropertyHeader>

          <PropertyGallery>
            <MainImage>
              <GalleryImage
                src={property.image || "https://placehold.co/800x500?text=No+Image"}
                alt={property.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x500?text=No+Image";
                }}
              />
            </MainImage>
          </PropertyGallery>

          <PropertyHighlights>
            <PriceSection>
              <PriceTag>
                <RupeeIcon />
                <span>{formatPrice(property.price, property.price_units)}</span>
                {property.transaction_type === "Rent" && <PricePeriod>/month</PricePeriod>}
              </PriceTag>
              <TransactionBadge type={property.transaction_type.toLowerCase()}>
                {property.transaction_type}
              </TransactionBadge>
            </PriceSection>

            <PropertyFeatures>
              {property.bedrooms && (
                <Feature>
                  <FeatureIcon as={FaBed} />
                  <span>{property.bedrooms} Beds</span>
                </Feature>
              )}
              {property.bathrooms && (
                <Feature>
                  <FeatureIcon as={FaBath} />
                  <span>{property.bathrooms} Baths</span>
                </Feature>
              )}
              {property.area_sqft && (
                <Feature>
                  <FeatureIcon as={FaRulerCombined} />
                  <span>{property.area_sqft.toLocaleString('en-IN')} sq.ft.</span>
                </Feature>
              )}
            </PropertyFeatures>
          </PropertyHighlights>

          <PropertyDetails>
            <div>
              <SectionTitle>Property Details</SectionTitle>
              <DetailsGrid>
                <DetailItem>
                  <DetailLabel>Type</DetailLabel>
                  <DetailValue>{property.type}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Furnishing</DetailLabel>
                  <DetailValue>{property.furnishing || 'N/A'}</DetailValue>
                </DetailItem>
                {property.year_built && (
                  <DetailItem>
                    <DetailLabel>Year Built</DetailLabel>
                    <DetailValue>{property.year_built}</DetailValue>
                  </DetailItem>
                )}
                {property.builder && (
                  <DetailItem>
                    <DetailLabel>Builder</DetailLabel>
                    <DetailValue>{property.builder}</DetailValue>
                  </DetailItem>
                )}
              </DetailsGrid>
            </div>

            {property.amenities?.length > 0 && (
              <div>
                <SectionTitle>Amenities</SectionTitle>
                <AmenitiesGrid>
                  {property.amenities.map((amenity, i) => (
                    <AmenityItem key={i}>{amenity}</AmenityItem>
                  ))}
                </AmenitiesGrid>
              </div>
            )}

            <ContactSection>
              <SectionTitle>Interested in this property?</SectionTitle>
              <ContactButton onClick={() => sendWhatsAppMessage(property, { timestamp: "soon" })}>
                <FaWhatsapp /> Contact Agent
              </ContactButton>
              <ScheduleButton onClick={handleScheduleVisit}>
                <FaCalendarAlt /> Schedule Visit
              </ScheduleButton>
              {showConfirmation && schedule && (
                <ScheduleConfirmation>
                  <FaCalendarAlt />
                  <span>Visit scheduled for {schedule.timestamp}. WhatsApp message sent to owner.</span>
                </ScheduleConfirmation>
              )}
            </ContactSection>
          </PropertyDetails>
        </PropertyDetailContainer>
      </PropertyDetailPage>
    </>
  );
};
