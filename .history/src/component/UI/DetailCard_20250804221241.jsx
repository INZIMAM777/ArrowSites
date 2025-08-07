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

// Main container styles
const PropertyDetailPage = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem 1rem;
`;

const PropertyDetailContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 0;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.5rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #2980b9;
  }
`;

// Header section styles
const PropertyHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const PropertyTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const PropertyLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 1rem;
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  color: #e74c3c;
`;

// Gallery section styles
const PropertyGallery = styled.div`
  margin-bottom: 2rem;
`;

const MainImage = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  display: block;
`;

// Highlights section styles
const PropertyHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const RupeeIcon = styled(FaRupeeSign)`
  font-size: 1.2rem;
`;

const PricePeriod = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #7f8c8d;
  margin-left: 4px;
`;

const TransactionBadge = styled.div`
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  background: ${props => props.type === 'sale' ? '#e8f5e9' : '#e3f2fd'};
  color: ${props => props.type === 'sale' ? '#2e7d32' : '#1565c0'};
`;

const PropertyFeatures = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
`;

const FeatureIcon = styled.div`
  color: #3498db;
  font-size: 1.1rem;
`;

// Details section styles
const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #3498db;
    border-radius: 3px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailLabel = styled.span`
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
`;

const DetailValue = styled.span`
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
`;

// Amenities section styles
const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

const AmenityItem = styled.div`
  padding: 10px 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #444;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    color: #27ae60;
    font-weight: bold;
  }
`;

// Contact section styles
const ContactSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const ScheduleButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: white;
  color: #3498db;
  border: 2px solid #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #f0f8ff;
    transform: translateY(-2px);
  }
`;

// Schedule confirmation styles
const ScheduleConfirmation = styled.div`
  padding: 1rem;
  background-color: #e8f5e9;
  border-radius: 6px;
  color: #2e7d32;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Error state styles
const PropertyDetailError = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ErrorContainer = styled.div`
  max-width: 600px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fde8e8;
  border-radius: 6px;
`;

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
export const DetailCard = () => {
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

  c

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
                src={property.image}
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
