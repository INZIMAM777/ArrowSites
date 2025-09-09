import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../utils/firebase";
import { useOutletContext } from "react-router-dom";

// Color palettes for light and dark modes (same as Hero component)
const colorTheme = {
  dark: {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
      overlay: "rgba(0, 0, 0, 0.7)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      accent: "#60a5fa",
    },
    border: {
      primary: "#334155",
      accent: "#60a5fa",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#1e293b",
      secondaryHover: "#334155",
    }
  },
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#e2e8f0",
      overlay: "rgba(255, 255, 255, 0.7)",
    },
    text: {
      primary: "#1e293b",
      secondary: "#475569",
      accent: "#3b82f6",
    },
    border: {
      primary: "#e2e8f0",
      accent: "#3b82f6",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#f1f5f9",
      secondaryHover: "#e2e8f0",
    }
  }
};

export const DetailCard = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  
  const propertyId = useLoaderData();
  const firestore = getFirestore(app);
  const [property, setProperty] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const collectData = collection(firestore, "properties");
      const q = query(collectData, where("id", "==", propertyId));
      const snap = await getDocs(q);
      let result = [];
      snap.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      
      if (result.length > 0) setProperty(result[0]);
    };
    fetchData();
  }, [propertyId, firestore]);

  if (!property) return (
    <div style={styles.loadingContainer}>
      <div style={styles.loadingSpinner}></div>
      <p style={styles.loadingText}>Loading property details...</p>
    </div>
  );

  // Component styles using the theme
  const styles = {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "50vh",
      gap: "1rem",
      backgroundColor: theme.background.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    loadingSpinner: {
      width: "50px",
      height: "50px",
      border: `4px solid ${theme.background.secondary}`,
      borderTop: `4px solid ${theme.text.accent}`,
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    loadingText: {
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
    detailContainer: {
      maxWidth: "1200px",
      margin: "2rem auto",
      padding: "0 1rem",
      backgroundColor: theme.background.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    detailCard: {
      background: theme.background.secondary,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "0",
      paddingBottom: "56.25%",
      overflow: "hidden",
      backgroundColor: theme.background.tertiary,
    },
    detailImage: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: imageLoaded ? "1" : "0",
      transition: "opacity 0.5s ease",
    },
    imagePlaceholder: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background.tertiary,
      color: theme.text.secondary,
      opacity: imageLoaded ? "0" : "1",
      transition: "opacity 0.3s ease",
    },
    contentContainer: {
      padding: "2rem",
    },
    detailHeader: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },
    detailTitle: {
      fontSize: "1.875rem",
      fontWeight: "700",
      lineHeight: "1.2",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    detailPrice: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: theme.text.accent,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    detailAddress: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: theme.text.secondary,
      fontSize: "1rem",
      marginTop: "0.5rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    detailGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "1rem",
      margin: "2rem 0",
    },
    detailGridItem: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      background: theme.background.primary,
      borderRadius: "12px",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    detailGridLabel: {
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: theme.text.secondary,
      marginBottom: "0.25rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    detailGridValue: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    detailSectionTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      margin: "2rem 0 1rem",
      paddingBottom: "0.5rem",
      borderBottom: `2px solid ${theme.border.primary}`,
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    amenitiesGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      marginTop: "1rem",
    },
    amenityTag: {
      padding: "0.5rem 1rem",
      background: theme.background.tertiary,
      color: theme.text.accent,
      borderRadius: "100px",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
      fontFamily: "'Montserrat', sans-serif",
    },
    detailDate: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginTop: "2rem",
      paddingTop: "1.5rem",
      borderTop: `1px solid ${theme.border.primary}`,
      color: theme.text.secondary,
      fontSize: "0.875rem",
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <div style={styles.detailContainer}>
      <div style={styles.detailCard}>
        {/* Image with loading state */}
        <div style={styles.imageContainer}>
          <div style={styles.imagePlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L8 12L11.5 15.5L14.5 12.5L16 14L20 10M4 16V20H20V4H4V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <img
            src={property.image}
            alt={property.title}
            style={styles.detailImage}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div style={styles.contentContainer}>
          {/* Title + Price */}
          <div style={styles.detailHeader}>
            <div>
              <h1 style={styles.detailTitle}>{property.title}</h1>
              <div style={styles.detailAddress}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {property.address}
              </div>
            </div>
            <p style={styles.detailPrice}>
              ₹{property.price} {property.price_units}
            </p>
          </div>

          {/* Key Info */}
          <div style={styles.detailGrid}>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Type</span>
              <span style={styles.detailGridValue}>{property.type}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Transaction</span>
              <span style={styles.detailGridValue}>{property.transaction_type}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Area</span>
              <span style={styles.detailGridValue}>{property.area_sqft} sqft</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Bedrooms</span>
              <span style={styles.detailGridValue}>{property.bedrooms}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Bathrooms</span>
              <span style={styles.detailGridValue}>{property.bathrooms}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Year Built</span>
              <span style={styles.detailGridValue}>{property.year_built}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Furnishing</span>
              <span style={styles.detailGridValue}>{property.furnishing}</span>
            </div>
            <div style={styles.detailGridItem}>
              <span style={styles.detailGridLabel}>Builder</span>
              <span style={styles.detailGridValue}>{property.builder}</span>
            </div>
          </div>

          {/* Amenities */}
          <h2 style={styles.detailSectionTitle}>Amenities</h2>
          <div style={styles.amenitiesGrid}>
            {property.amenities && property.amenities.map((amenity, index) => (
              <span 
                key={index} 
                style={styles.amenityTag}
                onMouseOver={(e) => {
                  e.target.style.background = theme.text.accent;
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = theme.background.tertiary;
                  e.target.style.color = theme.text.accent;
                  e.target.style.transform = "none";
                }}
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Created At */}
          <div style={styles.detailDate}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Listed on{" "}
            {property.createdAt?.seconds
              ? new Date(property.createdAt.seconds * 1000).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              : "N/A"}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};