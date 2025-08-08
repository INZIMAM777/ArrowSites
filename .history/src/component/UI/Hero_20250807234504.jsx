import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("buy");
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      let query = `/Cards?search=${encodeURIComponent(searchTerm)}&type=${activeFilter}`;
      if (selectedPropertyType) {
        query += `&propertyType=${encodeURIComponent(selectedPropertyType.toLowerCase())}`;
      }
      navigate(query);
    }
  };

  // Determine if search bar should be shown
  const showSearchBar = ['buy', 'rent'].includes(activeFilter);

  // Styles
  const styles = {
    // ... (keep all your existing styles)
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
          
          {showSearchBar && (
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
          )}
        </div>
        
        {showSearchBar && (
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
        )}
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