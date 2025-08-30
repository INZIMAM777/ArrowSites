import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styled, { keyframes, css } from 'styled-components';

// Modern animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components with modern design
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const Main = styled.main`
  flex: 1;
`;

const Hero = styled.section`
  position: relative;
  padding: 10rem 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), 
              url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3a0ca3 0%, #4361ee 50%, #4cc9f0 100%);
    opacity: 0.3;
    mix-blend-mode: overlay;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
  letter-spacing: -0.5px;
  background: linear-gradient(to right, #fff, #f72585, #4cc9f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: ${gradientShift} 5s ease infinite;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(NavLink)`
  display: inline-block;
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, #4361ee, transparent);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  min-width: 220px;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  animation-fill-mode: both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #4361ee, #f72585);
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3a0ca3, #f72585);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 8rem auto;
  padding: 0 2rem;
  flex-wrap: wrap;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 5rem auto;
    
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const SectionContent = styled.div`
  flex: 1 1 50%;
  min-width: 300px;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 5px;
    background: linear-gradient(to right, #4361ee, #f72585);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1.8rem;
  font-weight: 400;
`;

const SectionImage = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
  height: 450px;
  background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(247, 37, 133, 0.1));
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    height: 350px;
    margin-top: 3rem;
  }
`;

const TestimonialsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #f8f9fa 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(247, 37, 133, 0.1));
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(247, 37, 133, 0.1), rgba(67, 97, 238, 0.1));
    z-index: 0;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  position: relative;
  z-index: 1;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #4361ee, #f72585);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 45px rgba(0,0,0,0.12);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #4a4a4a;
  line-height: 1.7;
  margin-bottom: 1.8rem;
  position: relative;
  font-size: 1.05rem;

  &::before {
    content: '"';
    font-size: 4rem;
    color: rgba(67, 97, 238, 0.1);
    position: absolute;
    top: -1.5rem;
    left: -1rem;
    font-family: Georgia, serif;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4361ee;
  margin-right: 1.2rem;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  border: 3px solid white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const TestimonialAuthorInfo = styled.div``;

const TestimonialAuthorName = styled.h4`
  color: #3a0ca3;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const TestimonialAuthorRole = styled.p`
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
`;

const NeighborhoodsSection = styled.section`
  max-width: 1200px;
  margin: 8rem auto;
  padding: 0 2rem;
`;

const NeighborhoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const NeighborhoodCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  position: relative;
  background: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 45px rgba(0,0,0,0.12);
    
    ${NeighborhoodImage} {
      transform: scale(1.05);
    }
  }
`;

const NeighborhoodImage = styled.div`
  height: 220px;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
`;

const NeighborhoodInfo = styled.div`
  padding: 1.8rem;
  background-color: white;
`;

const NeighborhoodName = styled.h3`
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.3rem;
`;

const NeighborhoodProperties = styled.p`
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
`;

const CtaSection = styled.section`
  text-align: center;
  padding: 8rem 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3a0ca3 0%, transparent 50%, #f72585 100%);
    opacity: 0.3;
    mix-blend-mode: overlay;
  }
`;

const CtaTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CtaText = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  opacity: 0.9;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CtaButton = styled(NavLink)`
  display: inline-block;
  background: white;
  color: #3a0ca3;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3a0ca3, #f72585);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

// Sample data
const testimonials = [
  {
    text: "Dream Homes helped us find our perfect family house in just two weeks. Their attention to our needs was exceptional.",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "As an investor, I appreciate their market knowledge and negotiation skills. They've helped me build a profitable portfolio.",
    author: "Michael Chen",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The team went above and beyond to sell our property above asking price. Highly recommend their services!",
    author: "Emily Rodriguez",
    role: "Seller",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const neighborhoods = [
  {
    name: "Downtown District",
    properties: "125+ properties",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Riverside",
    properties: "80+ properties",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Green Hills",
    properties: "45+ properties",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Oceanview",
    properties: "60+ properties",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export const About = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  return (
    <PageContainer>
      <Main>
        {/* Hero Section */}
        <Hero>
          <HeroContent>
            <HeroTitle>Your Trusted Real Estate Partners</HeroTitle>
            <HeroText>
              With over 20 years of experience, we've helped thousands of families 
              find their dream homes and investors build profitable portfolios.
            </HeroText>
            <HeroButton to="/contact">Get in Touch</HeroButton>
          </HeroContent>
        </Hero>

        {/* Stats Section */}
        <StatsSection>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2,500+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1.2B</StatNumber>
            <StatLabel>Properties Sold</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatItem>
        </StatsSection>

        {/* Our Story Section */}
        <Section>
          <SectionContent>
            <SectionTitle>Our Story</SectionTitle>
            <SectionText>
              Founded in 2002, Dream Homes Realty began as a small family business with 
              a passion for connecting people with properties they love. What started as 
              a local agency has grown into one of the region's most trusted real estate 
              firms.
            </SectionText>
            <SectionText>
              Our success comes from our client-first approach, deep market knowledge, 
              and commitment to ethical practices. We believe buying or selling a home 
              should be an exciting journey, not a stressful ordeal.
            </SectionText>
          </SectionContent>
          <SectionImage />
        </Section>

        {/* Testimonials Section */}
        <TestimonialsSection>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <TestimonialAuthorImage image={testimonial.image} />
                  <TestimonialAuthorInfo>
                    <TestimonialAuthorName>{testimonial.author}</TestimonialAuthorName>
                    <TestimonialAuthorRole>{testimonial.role}</TestimonialAuthorRole>
                  </TestimonialAuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialsSection>

        {/* Neighborhoods Section */}
        <NeighborhoodsSection>
          <SectionTitle>Featured Neighborhoods</SectionTitle>
          <NeighborhoodGrid>
            {neighborhoods.map((neighborhood, index) => (
              <NeighborhoodCard key={index}>
                <NeighborhoodImage image={neighborhood.image} />
                <NeighborhoodInfo>
                  <NeighborhoodName>{neighborhood.name}</NeighborhoodName>
                  <NeighborhoodProperties>{neighborhood.properties}</NeighborhoodProperties>
                </NeighborhoodInfo>
              </NeighborhoodCard>
            ))}
          </NeighborhoodGrid>
        </NeighborhoodsSection>

        {/* CTA Section */}
        <CtaSection>
          <CtaTitle>Ready to Find Your Dream Home?</CtaTitle>
          <CtaText>
            Our team of expert agents is ready to guide you through every step of 
            the home buying or selling process. Contact us today to get started.
          </CtaText>
          <CtaButton to="/contact">Schedule a Consultation</CtaButton>
        </CtaSection>
      </Main>
    </PageContainer>
  );
};