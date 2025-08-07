import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaArrowLeft, FaRupeeSign, FaWhatsapp, FaStar, FaShareAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { useFirebase } from '../../context/FirebaseContext';

// 🔹 Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f5f7fa;
    color: #2d3748;
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Main container styles
const PropertyDetailPage = styled.div`
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 2rem 1rem;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const PropertyDetailContainer = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.75rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #3498db, #2ecc71);
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.75rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: rgba(52, 152, 219, 0.1);

  &:hover {
    color: #2980b9;
    background-color: rgba(52, 152, 219, 0.2);
    transform: translateX(-4px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }
`;

// Header section styles
const PropertyHeader = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #edf2f7;
  position: relative;
`;

const PropertyTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const PropertyTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a202c;
  margin: 0;
  line-height: 1.2;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const PropertyActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #718096;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #3498db;
    background-color: rgba(52, 152, 219, 0.1);
  }

  &.favorited {
    color: #e53e3e;
  }
`;

const PropertyLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #718096;
  font-size: 1.05rem;
  margin-top: 0.5rem;
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  color: #e74c3c;
  flex-shrink: 0;
`;

// Gallery section styles
const PropertyGallery = styled.section`
  margin-bottom: 2.5rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${MainImage}:hover & {
    transform: scale(1.03);
  }
`;

const ImageBadge = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

// Highlights section styles
const PropertyHighlights = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  margin-bottom: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 1.75rem;
  font-weight: 800;
  color: #2d3748;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const RupeeIcon = styled(FaRupeeSign)`
  font-size: 1.3rem;
  color: #4a5568;
`;

const PricePeriod = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #718096;
  margin-left: 4px;
`;

const TransactionBadge = styled.div`
  padding: 8px 16px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => props.type === 'sale' ? 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'};
  color: ${props => props.type === 'sale' ? '#2e7d32' : '#1565c0'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.type === 'sale' ? '#c8e6c9' : '#bbdefb'};
`;

const PropertyFeatures = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a5568;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 8px 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 12px;
  }
`;

const FeatureIcon = styled.div`
  color: #3498db;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

// Details section styles
const PropertyDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.25rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 4px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    border-radius: 2px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  background-color: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1f5f9;
    transform: translateY(-3px);
  }
`;

const DetailLabel = styled.span`
  font-size: 0.95rem;
  color: #718096;
  font-weight: 500;
`;

const DetailValue = styled.span`
  font-size: 1.1rem;
  color: #2d3748;
  font-weight: 600;
`;

// Amenities section styles
const AmenitiesGrid = styled.div`
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

const AmenityItem = styled.div`
  padding: 12px 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  color: #4a5568;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;

  &::before {
    content: '✓';
    color: #2ecc71;
    font-weight: bold;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    border-color: #e2e8f0;
  }
`;

// Contact section styles
const ContactSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.05rem;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #128C7E 0%, #075E54 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ScheduleButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.05rem;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #2980b9 0%, #1a5276 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Schedule confirmation styles
const ScheduleConfirmation = styled.div`
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 8px;
  color: #2e7d32;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  border: 1px solid #c8e6c9;
  animation: ${fadeIn} 0.5s ease-out;

  svg {
    flex-shrink: 0;
    font-size: 1.2rem;
  }
`;

// Error state styles
const PropertyDetailError = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f5f7fa;
`;

const ErrorContainer = styled.div`
  max-width: 600px;
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-size: 1.2rem;
  margin-bottom: 1.75rem;
  padding: 1.25rem;
  background-color: #fff5f5;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
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
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setIsLoading(true);
        const snapshot = await firebase.getLists();
        const properties = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        const matched = properties.find(p => p.id === dataId);
        
        if (!matched) {
          setError(`No property found with ID: ${dataId}`);
        } else {
          setProperty(matched);
          // Check if property is favorited (you would implement this logic)
          setIsFavorite(false); // Default to false, implement your own logic
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch property data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
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
    setTimeout(() => sendWhatsAppMessage(property, newSchedule), 500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this ${property.type} in ${property.city}`,
        url: window.location.href,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would typically also update the favorite status in your database
    if (!isFavorite) {
      // Animation effect when favoriting
      setTimeout(() => {
        setIsFavorite(true);
      }, 100);
    }
  };

  if (isLoading) {
    return (
      <PropertyDetailError>
        <ErrorContainer>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Loading property details...</div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#edf2f7', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ 
              width: '70%', 
              height: '100%', 
              background: 'linear-gradient(to right, #3498db, #2ecc71)',
              animation: `${pulse} 1.5s infinite ease-in-out`
            }}></div>
          </div>
        </ErrorContainer>
      </PropertyDetailError>
    );
  }

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
    return null; // Loading state already handled
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
            <PropertyTitleRow>
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyActions>
                <ActionButton onClick={toggleFavorite} className={isFavorite ? 'favorited' : ''}>
                  {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </ActionButton>
                <ActionButton onClick={handleShare}>
                  <FaShareAlt />
                </ActionButton>
              </PropertyActions>
            </PropertyTitleRow>
            <PropertyLocation>
              <LocationIcon />
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
              <ImageBadge>
                <FaStar style={{ color: '#FFD700' }} />
                Featured Property
              </ImageBadge>
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
              {property.year_built && (
                <Feature>
                  <FeatureIcon as={FaCalendarAlt} />
                  <span>Built in {property.year_built}</span>
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
                {property.floor && (
                  <DetailItem>
                    <DetailLabel>Floor</DetailLabel>
                    <DetailValue>{property.floor}</DetailValue>
                  </DetailItem>
                )}
                {property.total_floors && (
                  <DetailItem>
                    <DetailLabel>Total Floors</DetailLabel>
                    <DetailValue>{property.total_floors}</DetailValue>
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

            {property.description && (
              <div>
                <SectionTitle>Description</SectionTitle>
                <p style={{ 
                  color: '#4a5568', 
                  lineHeight: '1.7',
                  fontSize: '1.05rem',
                  backgroundColor: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #3498db'
                }}>
                  {property.description}
                </p>
              </div>
            )}

            <ContactSection>
              <SectionTitle>Interested in this property?</SectionTitle>
              <ButtonGroup>
                <ContactButton onClick={() => sendWhatsAppMessage(property, { timestamp: "soon" })}>
                  <FaWhatsapp /> Contact Agent
                </ContactButton>
                <ScheduleButton onClick={handleScheduleVisit}>
                  <FaCalendarAlt /> Schedule Visit
                </ScheduleButton>
              </ButtonGroup>
              {showConfirmation && schedule && (
                <ScheduleConfirmation>
                  <FaCalendarAlt />
                  <span>Visit scheduled for <strong>{schedule.timestamp}</strong>. WhatsApp message sent to owner.</span>
                </ScheduleConfirmation>
              )}
            </ContactSection>
          </PropertyDetails>
        </PropertyDetailContainer>
      </PropertyDetailPage>
    </>
  );
};