import { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Main = styled.main`
  flex: 1;
`;

const Hero = styled.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  flex: 1 1 60%;
  min-width: 300px;
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

const InfoSection = styled.section`
  flex: 1 1 30%;
  min-width: 300px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #3a0ca3;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #f72585;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f72585;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #e5177b;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(247, 37, 133, 0.3);
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(76, 201, 240, 0.1);
  border: 1px solid rgba(76, 201, 240, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  color: #4cc9f0;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`;

const SuccessText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #f72585;
`;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  color: #3a0ca3;
  margin-bottom: 0.3rem;
`;

const InfoLink = styled.a`
  color: #4361ee;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #f72585;
    text-decoration: underline;
  }
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const SocialCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

const SocialTitle = styled.h3`
  font-size: 1.1rem;
  color: #3a0ca3;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SocialLink = styled.a`
  padding: 0.6rem 1.2rem;
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4361ee;
    color: white;
  }
`;

const MapSection = styled.section`
  width: 100%;
  padding: 0 2rem;
  margin: 4rem 0;
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

export const RealEstateContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      message: '',
      propertyInterest: '' 
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <PageContainer>
      <Main>
        {/* Hero Section */}
        <Hero>
          <HeroContent>
            <HeroTitle>Contact Our Real Estate Team</HeroTitle>
            <HeroText>
              Whether you're buying, selling, or just exploring options, our experts are here to help.
            </HeroText>
          </HeroContent>
        </Hero>

        {/* Contact Content */}
        <ContactContainer>
          {/* Contact Form */}
          <FormSection>
            <SectionTitle>Schedule a Consultation</SectionTitle>
            
            {submitted ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Thank You!</SuccessTitle>
                <SuccessText>
                  Your message has been sent successfully. One of our agents will contact you within 24 hours.
                </SuccessText>
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="propertyInterest">Property Interest</Label>
                  <Input
                    type="text"
                    id="propertyInterest"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    placeholder="e.g., 3-bedroom home in Downtown"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <SubmitButton type="submit">
                  Send Message
                </SubmitButton>
              </Form>
            )}
          </FormSection>

          {/* Contact Info */}
          <InfoSection>
            <SectionTitle>Our Offices</SectionTitle>
            
            <InfoCard>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <div>
                  <InfoTitle>Main Office</InfoTitle>
                  <InfoText>
                    123 Real Estate Blvd<br />
                    San Francisco, CA 94107<br />
                    Open Mon-Fri: 9am-6pm
                  </InfoText>
                </div>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📱</InfoIcon>
                <div>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoLink href="tel:+15551234567">
                    +1 (555) 123-4567
                  </InfoLink>
                </div>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📧</InfoIcon>
                <div>
                  <InfoTitle>Email</InfoTitle>
                  <InfoLink href="mailto:info@dreamhomes.com">
                    info@dreamhomes.com
                  </InfoLink>
                </div>
              </InfoItem>
            </InfoCard>
            
            <InfoCard>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <div>
                  <InfoTitle>Downtown Office</InfoTitle>
                  <InfoText>
                    456 Urban Avenue<br />
                    San Francisco, CA 94105<br />
                    Open Mon-Fri: 10am-7pm
                  </InfoText>
                </div>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📱</InfoIcon>
                <div>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoLink href="tel:+15559876543">
                    +1 (555) 987-6543
                  </InfoLink>
                </div>
              </InfoItem>
            </InfoCard>
            
            <SocialCard>
              <SocialTitle>Follow Us</SocialTitle>
              <SocialLinks>
                <SocialLink href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </SocialLink>
                <SocialLink href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter
                </SocialLink>
              </SocialLinks>
            </SocialCard>
          </InfoSection>
        </ContactContainer>

        {/* Map Section */}
        <MapSection>
          <Map 
            title="Office Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538315496854!2d-122.4194155846826!3d37.77492997975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          />
        </MapSection>
      </Main>
    </PageContainer>
  );
};