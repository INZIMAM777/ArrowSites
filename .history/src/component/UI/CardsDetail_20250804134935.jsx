import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaArrowLeft, FaRupeeSign, FaWhatsapp } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';

// Your styled-components (same as before)...

export const CardsDetail = () => {
  const { id } = useParams(); // get property ID from route
  const firebase = useFirebase();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const doc = await firebase.getPropertyById(id);
        if (doc.exists()) {
          setProperty({ id: doc.id, ...doc.data() });
        } else {
          setError("Property not found.");
        }
      } catch (err) {
        setError("Failed to fetch property details.");
        console.error(err);
      }
    };

    fetchProperty();
  }, [id, firebase]);

  const formatPrice = (price, units) => {
    if (units === "crore") return `${price} Crore`;
    if (units === "lakh/month") return `${price} Lakh/month`;
    if (units === "month") return `${Number(price).toLocaleString("en-IN")}/month`;
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
          <ErrorMessage>{error}</ErrorMessage>
          <BackLink to="/Cards">
            <FaArrowLeft /> Back to Listings
          </BackLink>
        </ErrorContainer>
      </PropertyDetailError>
    );
  }

  if (!property) {
    return <p style={{ textAlign: "center", padding: "2rem" }}>Loading...</p>;
  }

  // === RETURN JSX of your full UI with updated `property` variable ===
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
              <LocationIcon />
              <span>{property.address}</span>
            </PropertyLocation>
          </PropertyHeader>

          <PropertyGallery>
            <MainImage>
              <GalleryImage
                src={property.image || "https://placehold.co/800x500?text=No+Image"}
                alt={property.title}
              />
            </MainImage>
          </PropertyGallery>

          <PropertyHighlights>
            <PriceSection>
              <PriceTag>
                <RupeeIcon />
                {formatPrice(property.price, property.price_units)}
                {property.transaction_type === "Rent" && <PricePeriod>/month</PricePeriod>}
              </PriceTag>
              <TransactionBadge type={property.transaction_type?.toLowerCase()}>
                {property.transaction_type}
              </TransactionBadge>
            </PriceSection>

            <PropertyFeatures>
              {property.bedrooms && <Feature><FeatureIcon as={FaBed} />{property.bedrooms} Beds</Feature>}
              {property.bathrooms && <Feature><FeatureIcon as={FaBath} />{property.bathrooms} Baths</Feature>}
              {property.area_sqft && <Feature><FeatureIcon as={FaRulerCombined} />{property.area_sqft} sq.ft</Feature>}
            </PropertyFeatures>
          </PropertyHighlights>

          <PropertyDetails>
            <div>
              <SectionTitle>Property Details</SectionTitle>
              <DetailsGrid>
                <DetailItem><DetailLabel>Type</DetailLabel><DetailValue>{property.type}</DetailValue></DetailItem>
                <DetailItem><DetailLabel>Furnishing</DetailLabel><DetailValue>{property.furnishing || 'N/A'}</DetailValue></DetailItem>
                {property.year_built && <DetailItem><DetailLabel>Year Built</DetailLabel><DetailValue>{property.year_built}</DetailValue></DetailItem>}
                {property.builder && <DetailItem><DetailLabel>Builder</DetailLabel><DetailValue>{property.builder}</DetailValue></DetailItem>}
              </DetailsGrid>
            </div>

            {property.amenities?.length > 0 && (
              <div>
                <SectionTitle>Amenities</SectionTitle>
                <AmenitiesGrid>
                  {property.amenities.map((amenity, i) => <AmenityItem key={i}>{amenity}</AmenityItem>)}
                </AmenitiesGrid>
              </div>
            )}

            <ContactSection>
              <SectionTitle>Interested in this property?</SectionTitle>
              <ContactButton>
                <FaWhatsapp /> Contact Agent
              </ContactButton>
              <ScheduleButton onClick={handleScheduleVisit}>
                <FaCalendarAlt /> Schedule Visit
              </ScheduleButton>
              {showConfirmation && schedule && (
                <ScheduleConfirmation>
                  <FaCalendarAlt />
                  <span>Visit scheduled for {schedule.timestamp}. WhatsApp message sent.</span>
                </ScheduleConfirmation>
              )}
            </ContactSection>
          </PropertyDetails>
        </PropertyDetailContainer>
      </PropertyDetailPage>
    </>
  );
};
