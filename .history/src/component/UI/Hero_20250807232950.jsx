import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("buy");
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchTerm)}&type=${activeFilter}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // Styles
  const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      minHeight: '650px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
      zIndex: 1,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      width: '90%',
      maxWidth: '1400px',
      padding: '2rem',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: '1.5rem',
      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
      maxWidth: '800px',
      margin: '0 auto 3rem',
      fontWeight: 300,
      opacity: 0.9,
    },
    searchContainer: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: '12px',
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '1.5rem',
      backdropFilter: 'blur(5px)',
    },
    filterTabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      gap: '0.5rem',
    },
    filterTab: {
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.3s ease',
    },
    activeFilter: {
      background: '#4f46e5',
      color: 'white',
    },
    searchBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    searchInputWrapper: {
      position: 'relative',
      flexGrow: 1,
    },
    searchInput: {
      width: '100%',
      padding: '1.25rem 1.25rem 1.25rem 3rem',
      fontSize: '1.1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    searchIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6b7280',
    },
    searchButton: {
      backgroundColor: '#4f46e5',
      color: 'white',
      padding: '1.25rem 2rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    propertyTypes: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    propertyType: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    statsBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,0.7)',
      padding: '1.5rem 0',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    statItem: {
      textAlign: 'center',
      padding: '0 1rem',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '0.25rem',
      background: 'linear-gradient(90deg, #4f46e5, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    // Responsive styles
    '@media (min-width: 768px)': {
      searchBox: {
        flexDirection: 'row',
      },
      searchButton: {
        width: 'auto',
      },
    },
  };

  return (
    <section style={styles.heroSection}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}></div>
      
      <div style={styles.heroOverlay}></div>
      
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Find Your Perfect Property</h1>
        <p style={styles.heroSubtitle}>
          Discover luxury homes, modern apartments, and investment properties across the world
        </p>
        
        <div style={styles.searchContainer}>
          <div style={styles.filterTabs}>
            {['buy', 'rent', 'commercial'].map((filter) => (
              <button
                key={filter}
                style={{
                  ...styles.filterTab,
                  ...(activeFilter === filter ? styles.activeFilter : {}),
                  textTransform: 'capitalize',
                }}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div style={styles.searchBox}>
            <div style={styles.searchInputWrapper}>
              <svg
                style={styles.searchIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search by location, property type, or keywords..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            
            <button style={styles.searchButton} onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              Search Properties
            </button>
          </div>
        </div>
        
        <div style={styles.propertyTypes}>
          {[
            { icon: '🏠', label: 'Houses' },
            { icon: '🏢', label: 'Apartments' },
            { icon: '🏡', label: 'Villas' },
            { icon: '🏛️', label: 'Townhomes' },
            { icon: '🏭', label: 'Commercial' },
          ].map((type) => (
<div 
  key={type.label} 
  style={{
    ...styles.propertyType,
    ...(selectedPropertyType === type.label ? { backgroundColor: 'rgba(255,255,255,0.4)' } : {})
  }}
  onClick={() => setSelectedPropertyType(type.label)}
>
  <span>{type.icon}</span>
  <span>{type.label}</span>
</div>
          ))}
        </div>
      </div>
      
      <div style={styles.statsBar}>
        <div style={styles.statsContainer}>
          {[
            { number: '25,000+', label: 'Properties Listed' },
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '120+', label: 'Locations Worldwide' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};