import { useNavigate } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter"; // Import your advanced filter
import { useCallback } from "react";

export const Hero = () => {
  const navigate = useNavigate();

  // Handle search (navigates with only search term)
  const handleSearch = useCallback((term) => {
    const params = new URLSearchParams();
    if (term) params.set("search", term);
    navigate(`/Cards?${params.toString()}`);
  }, [navigate]);

  // Handle filter changes (navigates with filter params)
  const handleFilter = useCallback((filters) => {
    const params = new URLSearchParams();

    // Add filter fields if they have values
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    navigate(`/Cards?${params.toString()}`);
  }, [navigate]);

  const styles = {
    heroSection: {
      position: "relative",
      height: "100vh",
      minHeight: "650px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
      zIndex: 1,
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      width: "90%",
      maxWidth: "1400px",
      padding: "2rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 5rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: "1.5rem",
      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
      maxWidth: "800px",
      margin: "0 auto 3rem",
      fontWeight: 300,
      opacity: 0.9,
    },
    statsBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0,0,0,0.7)",
      padding: "1.5rem 0",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "1200px",
      margin: "0 auto",
      flexWrap: "wrap",
      gap: "1rem",
    },
    statItem: {
      textAlign: "center",
      padding: "0 1rem",
    },
    statNumber: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.25rem",
      background: "linear-gradient(90deg, #4f46e5, #a855f7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return (
    <section style={styles.heroSection}>
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></div>

      <div style={styles.heroOverlay}></div>

      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Find Your Perfect Property</h1>
        <p style={styles.heroSubtitle}>
          Discover luxury homes, modern apartments, and investment properties across the world
        </p>

        {/* Advanced Search & Filters */}
        <SearchAndFilter
          onSearch={handleSearch}
          onFilter={handleFilter}
          showFilters={true} // Keep advanced filters visible
        />
      </div>

      {/* Stats Bar */}
      <div style={styles.statsBar}>
        <div style={styles.statsContainer}>
          {[
            { number: "25,000+", label: "Properties Listed" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "120+", label: "Locations Worldwide" },
            { number: "15+", label: "Years Experience" },
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
