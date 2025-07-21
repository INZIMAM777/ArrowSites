import { NavLink } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>About ArrowSites</h1>
            <p style={styles.heroText}>Crafting exceptional digital experiences with creativity and innovation</p>
          </div>
          <div style={styles.heroDecoration}></div>
        </section>

        {/* Mission Section */}
        <section style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.sectionText}>
              At ArrowSites, we're dedicated to building modern, accessible, and 
              performant web applications that help businesses thrive in the digital 
              landscape. We combine cutting-edge technology with thoughtful design 
              to create solutions that make an impact.
            </p>
          </div>
          <div style={styles.sectionImage}></div>
        </section>

        {/* Team Section */}
        <section style={styles.teamSection}>
          <h2 style={styles.sectionTitle}>Meet The Team</h2>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={styles.teamImage}></div>
                <h3 style={styles.teamName}>{member.name}</h3>
                <p style={styles.teamRole}>{member.role}</p>
                <p style={styles.teamBio}>{member.bio}</p>
                <div style={styles.socialLinks}>
                  {member.social.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      style={styles.socialLink}
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section style={styles.valuesSection}>
          <h2 style={styles.sectionTitle}>Our Core Values</h2>
          <div style={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} style={styles.valueCard}>
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to start your project?</h2>
          <p style={styles.ctaText}>We'd love to hear about your ideas and help bring them to life.</p>
          <NavLink to="/contact" style={styles.ctaButton}>Get in Touch</NavLink>
        </section>
      </main>

      <Footer />
    </div>
  );
};

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

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa"
  },
  main: {
    flex: 1
  },
  hero: {
    position: "relative",
    padding: "6rem 2rem",
    background: "linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%)",
    color: "white",
    overflow: "hidden",
    textAlign: "center"
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    fontWeight: "700"
  },
  heroText: {
    fontSize: "1.5rem",
    opacity: "0.9",
    marginBottom: "2rem"
  },
  heroDecoration: {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)",
    zIndex: 1
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "4rem auto",
    padding: "0 2rem",
    flexWrap: "wrap"
  },
  sectionContent: {
    flex: "1 1 50%",
    minWidth: "300px",
    padding: "2rem"
  },
  sectionTitle: {
    fontSize: "2.5rem",
    color: "#3a0ca3",
    marginBottom: "1.5rem",
    position: "relative",
    paddingBottom: "0.5rem"
  },
  sectionTitleAfter: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "80px",
    height: "4px",
    backgroundColor: "#f72585"
  },
  sectionText: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "1.5rem"
  },
  sectionImage: {
    flex: "1 1 40%",
    minWidth: "300px",
    height: "400px",
    background: "linear-gradient(45deg, #f72585, #7209b7)",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  teamSection: {
    maxWidth: "1200px",
    margin: "6rem auto",
    padding: "0 2rem",
    textAlign: "center"
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "3rem"
  },
  teamCard: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease"
  },
  teamImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(45deg, #4361ee, #3a0ca3)",
    margin: "0 auto 1.5rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },
  teamName: {
    fontSize: "1.5rem",
    color: "#3a0ca3",
    marginBottom: "0.5rem"
  },
  teamRole: {
    color: "#f72585",
    fontWeight: "600",
    marginBottom: "1rem"
  },
  teamBio: {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "1.5rem"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  socialLink: {
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(67, 97, 238, 0.1)",
    color: "#4361ee",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#4361ee",
      color: "white"
    }
  },
  valuesSection: {
    maxWidth: "1200px",
    margin: "6rem auto",
    padding: "0 2rem",
    textAlign: "center"
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem"
  },
  valueCard: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
    }
  },
  valueIcon: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem"
  },
  valueTitle: {
    fontSize: "1.3rem",
    color: "#3a0ca3",
    marginBottom: "1rem"
  },
  valueDescription: {
    color: "#666",
    lineHeight: "1.6"
  },
  ctaSection: {
    textAlign: "center",
    padding: "6rem 2rem",
    background: "linear-gradient(45deg, #f72585, #7209b7)",
    color: "white"
  },
  ctaTitle: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem"
  },
  ctaText: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto 2.5rem",
    opacity: "0.9"
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "white",
    color: "#f72585",
    border: "none",
    padding: "1rem 2.5rem",
    fontSize: "1.2rem",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    textDecoration: "none",
    fontWeight: "600",
    ":hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
    }
  }
};