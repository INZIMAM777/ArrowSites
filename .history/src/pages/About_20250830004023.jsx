import { NavLink } from "react-router-dom";
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
              url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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

const HeroButton = styled(NavLink)`
  display: inline-block;
  background-color: #4361ee;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #3a0ca3;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`;

const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: white;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  min-width: 200px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContent = styled.div`
  flex: 1 1 50%;
  min-width: 300px;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #3a0ca3;
  margin-bottom: 1.5rem;
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
`;

const SectionImage = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    height: 300px;
    margin-top: 2rem;
  }
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f0f2f5;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: rgba(67, 97, 238, 0.1);
    position: absolute;
    top: -1rem;
    left: -1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4361ee;
  margin-right: 1rem;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
`;

const TestimonialAuthorInfo = styled.div``;

const TestimonialAuthorName = styled.h4`
  color: #3a0ca3;
  margin-bottom: 0.2rem;
`;

const TestimonialAuthorRole = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const NeighborhoodsSection = styled.section`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 2rem;
`;

const NeighborhoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const NeighborhoodCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const NeighborhoodImage = styled.div`
  height: 200px;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
`;

const NeighborhoodInfo = styled.div`
  padding: 1.5rem;
  background-color: white;
`;

const NeighborhoodName = styled.h3`
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`;

const NeighborhoodProperties = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const CtaSection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CtaButton = styled(NavLink)`
  display: inline-block;
  background-color: white;
  color: #3a0ca3;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
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
            <StatNumber>500 Cr</StatNumber>
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