import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(() => {
    if (!searchTerm.trim()) return;
    const params = new URLSearchParams();
    params.set("search", searchTerm.trim());
    navigate(`/Cards?${params.toString()}`);
  }, [searchTerm, navigate]);

  const heroStyles = {
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
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
      zIndex: 1,
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      width: "90%",
      maxWidth: "1000px",
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
  };

  const searchStyles = {
    container: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "16px",
      maxWidth: "1000px",
      margin: "0 auto",
      transition: "all 0.3s ease",
    },
    searchForm: {
      display: "flex",
      gap: "8px",
      position: "relative",
    },
    searchInputContainer: {
      flex: "1",
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "#f9fafb",
    },
    button: {
      padding: "12px 20px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "#3b82f6",
      color: "#fff",
    },
  };

  return (
    <section style={heroStyles.heroSection}>
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

      <div style={heroStyles.heroOverlay}></div>

      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Find Your Perfect Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Discover luxury homes, modern apartments, and investment properties
          across the world
        </p>

        {/* Styled Search Box */}
        <div style={searchStyles.container}>
          <form
            style={searchStyles.searchForm}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div style={searchStyles.searchInputContainer}>
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchStyles.input}
              />
            </div>
            <button type="submit" style={searchStyles.button}>
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
