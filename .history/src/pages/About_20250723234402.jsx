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
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%);
  color: white;
  overflow: hidden;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDecoration = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%);
  z-index: 1;
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
  background: linear-gradient(45deg, #f72585, #7209b7);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    height: 300px;
    margin-top: 2rem;
  }
`;

const TeamSection = styled.section`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 2rem;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
`;

const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4361ee, #3a0ca3);
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: #f72585;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4361ee;
    color: white;
  }
`;

const ValuesSection = styled.section`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 2rem;
  text-align: center;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: #3a0ca3;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CtaSection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(45deg, #f72585, #7209b7);
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
  color: #f72585;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
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
const teamMembers = [
  {
    name: "Inzimam Tariq",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with a passion for creating beautiful, functional web applications.",
    social: [
      { platform: "GitHub", url: "https://github.com/INZIMAM777" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" }
    ]
  },
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    bio: "Creative designer focused on user-centered design and beautiful interfaces.",
    social: [
      { platform: "Dribbble", url: "https://dribbble.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" }
    ]
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    bio: "Keeps projects on track and ensures seamless communication between teams.",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" }
    ]
  }
];

const coreValues = [
  {
    icon: "💡",
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve problems creatively."
  },
  {
    icon: "🎯",
    title: "Excellence",
    description: "We strive for the highest quality in everything we build, paying attention to every detail."
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "We believe the best results come from teamwork and open communication."
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "We're committed to continuous learning and improvement, both individually and as a team."
  }
];

export const About = () => {
  return (
    <PageContainer>
      <Main>
        {/* Hero Section */}
        <Hero>
          <HeroContent>
            <HeroTitle>About ArrowSites</HeroTitle>
            <HeroText>Crafting exceptional digital experiences with creativity and innovation</HeroText>
          </HeroContent>
          <HeroDecoration />
        </Hero>

        {/* Mission Section */}
        <Section>
          <SectionContent>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              At ArrowSites, we're dedicated to building modern, accessible, and 
              performant web applications that help businesses thrive in the digital 
              landscape. We combine cutting-edge technology with thoughtful design 
              to create solutions that make an impact.
            </SectionText>
          </SectionContent>
          <SectionImage />
        </Section>

        {/* Team Section */}
        <TeamSection>
          <SectionTitle>Meet The Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamImage />
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
                <SocialLinks>
                  {member.social.map((social, i) => (
                    <SocialLink 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      {social.platform}
                    </SocialLink>
                  ))}
                </SocialLinks>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        {/* Values Section */}
        <ValuesSection>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid>
            {coreValues.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        {/* CTA Section */}
        <CtaSection>
          <CtaTitle>Ready to start your project?</CtaTitle>
          <CtaText>We'd love to hear about your ideas and help bring them to life.</CtaText>
          <CtaButton to="/contact">Get in Touch</CtaButton>
        </CtaSection>
      </Main>
    </PageContainer>
  );
};~``