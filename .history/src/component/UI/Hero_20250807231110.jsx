import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/Cards?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Styles object
  const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: 'white',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
    heroBgImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 0,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1200px',
      padding: '0 2rem',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: '1.5rem',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
      maxWidth: '700px',
      margin: '0 auto 2.5rem',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
      opacity: 0.9,
    },
    searchContainer: {
      backgroundColor: 'white',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    searchInput: {
      flexGrow: 1,
      padding: '1rem',
      fontSize: '1.125rem',
      border: 'none',
      outline: 'none',
      borderRadius: '0.375rem',
    },
    searchButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      fontWeight: 'bold',
      padding: '1rem 2rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    popularSearches: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.75rem',
      marginTop: '1.5rem',
    },
    popularTag: {
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    statsBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      padding: '1rem 0',
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    statItem: {
      padding: '0.5rem 1rem',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem',
    },
    statLabel: {
      fontSize: '0.875rem',
      opacity: 0.9,
    },
    // Media queries
    '@media (min-width: 768px)': {
      searchContainer: {
        flexDirection: 'row',
      },
      searchInput: {
        borderRadius: '0.375rem 0 0 0.375rem',
      },
      searchButton: {
        borderRadius: '0 0.375rem 0.375rem 0',
      },
      searchButtonHover: {
        backgroundColor: '#1d4ed8',
        transform: 'translateY(-1px)',
      },
      popularTagHover: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      },
    },
  };

  return (
    <section style={styles.heroSection}>
      {/* Background image with overlay */}
      <div style={styles.heroOverlay}></div>
      <div 
        style={{
          ...styles.heroBgImage,
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
        }}
      ></div>
      
      {/* Hero content */}
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Find Your Dream Home</h1>
        <p style={styles.heroSubtitle}>
          Discover the perfect property that matches your lifestyle and budget
        </p>
        
        {/* Search bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by city, ZIP, or address"
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            style={styles.searchButton}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        
        {/* Popular searches */}
        <div style={styles.popularSearches}>
          <span style={{ alignSelf: 'center' }}>Popular:</span>
          {['New York', 'Los Angeles', 'Miami', 'Chicago'].map((city) => (
            <div 
              key={city}
              style={styles.popularTag}
              onClick={() => setSearchTerm(city)}
            >
              {city}
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats bar at bottom */}
      <div style={styles.statsBar}>
        <div style={styles.statsContainer}>
          {[
            { number: '10,000+', label: 'Properties Listed' },
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'Cities Covered' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};