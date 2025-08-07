import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaArrowLeft, FaRupeeSign, FaWhatsapp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFirebase } from '../../context/FirebaseContext';

// 🔹 Global styles
import  { css } from 'styled-components';

import { FaRupeeSign } from 'react-icons/fa';

// Global styles with improved reset and smooth scrolling
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #3a86ff;
    --primary-dark: #2667cc;
    --secondary: #8338ec;
    --success: #06d6a0;
    --danger: #ef476f;
    --warning: #ffd166;
    --light: #f8f9fa;
    --dark: #212529;
    --gray: #6c757d;
    --light-gray: #e9ecef;
    --border-radius: 12px;
    --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

// Reusable mixins
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cardStyles = css`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;

const sectionSpacing = css`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

// Main container with gradient background and improved spacing
export const PropertyDetailPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 2rem 0;
`;

export const PropertyDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${cardStyles};
  ${sectionSpacing};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
  }
`;

// Navigation with subtle animation
export const BackLink = styled(Link)`
  ${flexCenter};
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  font-weight: 600;
  transition: var(--transition);
  width: fit-content;
  padding: 0.5rem 0;

  &:hover {
    color: var(--primary-dark);
    transform: translateX(-4px);
  }

  svg {
    transition: var(--transition);
  }

  &:hover svg {
    transform: translateX(-3px);
  }
`;

// Header section with improved typography
export const PropertyHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--light-gray);
`;

export const PropertyTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 0.75rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const PropertyLocation = styled.div`
  ${flexCenter};
  gap: 0.5rem;
  color: var(--gray);
  font-size: 1rem;
  margin-top: 1rem;
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
  color: var(--danger);
  font-size: 1.1rem;
`;

// Gallery with hover zoom effect
export const PropertyGallery = styled.div`
  margin-bottom: 2.5rem;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const MainImage = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${MainImage}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;

// Highlights section with gradient accent
export const PropertyHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: white;
  border-radius: var(--border-radius);
  margin-bottom: 2.5rem;
  border: 1px solid var(--light-gray);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
  }
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PriceTag = styled.div`
  ${flexCenter};
  gap: 0.5rem;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--dark);
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const RupeeIcon = styled(FaRupeeSign)`
  font-size: 1.3rem;
  color: var(--success);
`;

export const PricePeriod = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray);
  margin-left: 0.25rem;
`;

export const TransactionBadge = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => 
    props.type === 'sale' 
      ? 'linear-gradient(to right, #e8f5e9, #c8e6c9)' 
      : 'linear-gradient(to right, #e3f2fd, #bbdefb)'};
  color: ${props => props.type === 'sale' ? '#2e7d32' : '#1565c0'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PropertyFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Feature = styled.div`
  ${flexCenter};
  gap: 0.75rem;
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
`;

export const FeatureIcon = styled.div`
  ${flexCenter};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(58, 134, 255, 0.1);
  color: var(--primary);
  font-size: 1.1rem;
`;

// Details section with animated hover effects
export const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    border-radius: 2px;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.25rem;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--light-gray);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
  }
`;

export const DetailLabel = styled.span`
  font-size: 0.85rem;
  color: var(--gray);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DetailValue = styled.span`
  font-size: 1.1rem;
  color: var(--dark);
  font-weight: 600;
`;

// Amenities with animated checkmarks
export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

export const AmenityItem = styled.div`
  padding: 0.75rem 1rem;
  background-color: white;
  border-radius: 6px;
  color: var(--dark);
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--light-gray);
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: '✓';
    color: var(--success);
    font-weight: bold;
    transition: var(--transition);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);

    &::before {
      transform: scale(1.2);
    }
  }
`;

// Contact section with gradient buttons
export const ContactSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const buttonStyles = css`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ContactButton = styled.button`
  ${buttonStyles};
  background: linear-gradient(to right, var(--primary), var(--secondary));
  color: white;

  &:hover {
    background: linear-gradient(to right, var(--primary-dark), #6a2cec);
  }
`;

export const ScheduleButton = styled.button`
  ${buttonStyles};
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);

  &:hover {
    background: rgba(58, 134, 255, 0.05);
  }
`;

// Schedule confirmation with fade-in animation
export const ScheduleConfirmation = styled.div`
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, rgba(6, 214, 160, 0.1), rgba(6, 214, 160, 0.2));
  border-radius: 8px;
  color: #0a5a46;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  border-left: 4px solid var(--success);
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Error state with animation
export const PropertyDetailError = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

export const ErrorContainer = styled.div`
  max-width: 600px;
  ${cardStyles};
  padding: 3rem 2rem;
  text-align: center;
  transform: translateY(0);
  animation: bounceIn 0.6s ease;

  @keyframes bounceIn {
    0% { transform: translateY(-50px); opacity: 0; }
    60% { transform: translateY(10px); opacity: 1; }
    100% { transform: translateY(0); }
  }
`;

export const ErrorMessage = styled.div`
  color: var(--danger);
  font-size: 1.1rem;
  margin: 1.5rem 0;
  padding: 1.25rem;
  background-color: rgba(239, 71, 111, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--danger);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
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

  const formatPrice = (price, units) => {
    if (units === "crore") return `${price} Crore`;
    if (units === "lakh/month") return `${price} Lakh/month`;
    if (units === "month") return `${price.toLocaleString("en-IN")}/month`;
    return price;
  };
  
  console.log(property)
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
