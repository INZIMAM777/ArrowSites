import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../utils/firebase";

export const DetailCard = () => {
  
  const { id: propertyId } = useLoaderData();

  const firestore = getFirestore(app);
  const [property, setProperty] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Color theme based on dark/light mode
  const colorTheme = isDarkMode ? {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
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
    }
  } : {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#e2e8f0",
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
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // const collectData = collection(firestore, "properties");
const docRef = doc(firestore, "properties", propertyId);
const snap = await getDoc(docRef);
if (snap.exists()) {
  setProperty({ id: snap.id, ...snap.data() });
}


      // const snap = await getDocs(q);
  //     let result = [];
  //     snap.forEach((doc) => {
  //       result.push({ id: doc.id, ...doc.data() });
  //     });
      
  //     if (result.length > 0) setProperty(result[0]);
    };
    fetchData();
  }, [propertyId, firestore]);

  // If property has multiple images, use them, otherwise create an array with the single image
  const propertyImages = property?.images 
    ? Array.isArray(property.images) ? property.images : [property.images]
    : property?.image 
      ? [property.image] 
      : [];

  if (!property) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading property details...</p>
    </div>
  );

  return (
    <>
      <style>{`
        :root {
          --primary: ${colorTheme.button.primary};
          --primary-hover: ${colorTheme.button.primaryHover};
          --primary-light: ${isDarkMode ? "#1e3a8a" : "#dbeafe"};
          --secondary: ${colorTheme.text.secondary};
          --accent: ${isDarkMode ? "#1e293b" : "#f1f5f9"};
          --text: ${colorTheme.text.primary};
          --text-light: ${colorTheme.text.secondary};
          --border: ${colorTheme.border.primary};
          --background: ${colorTheme.background.primary};
          --background-secondary: ${colorTheme.background.secondary};
          --background-tertiary: ${colorTheme.background.tertiary};
          --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --radius: 16px;
          --transition: all 0.3s ease;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: var(--text);
          line-height: 1.6;
          background-color: var(--background-secondary);
          transition: background-color 0.3s ease;
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          gap: 1rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--primary-light);
          border-top: 4px solid var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .detail-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .detail-card {
          background: var(--background);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          border: 1px solid var(--border);
        }

        .detail-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Image Gallery Styles */
        .image-gallery {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .main-image-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          overflow: hidden;
          background: var(--accent);
        }

        .detail-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: ${imageLoaded ? '1' : '0'};
          transition: opacity 0.5s ease;
        }

        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: var(--text-light);
          opacity: ${imageLoaded ? '0' : '1'};
          transition: opacity 0.3s ease;
        }

        .thumbnail-container {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          background: var(--background-secondary);
          border-top: 1px solid var(--border);
        }

        .thumbnail {
          width: 80px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.7;
          transition: var(--transition);
          border: 2px solid transparent;
        }

        .thumbnail:hover, .thumbnail.active {
          opacity: 1;
          transform: scale(1.05);
          border-color: var(--primary);
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: var(--transition);
        }

        .gallery-nav:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .gallery-nav.prev {
          left: 1rem;
        }

        .gallery-nav.next {
          right: 1rem;
        }

        .content-container {
          padding: 2rem;
        }

        .detail-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .detail-title {
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--text);
        }

        .detail-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .detail-address {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .detail-grid-item {
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
          background: var(--background-secondary);
          border-radius: var(--radius);
          transition: var(--transition);
          border: 1px solid var(--border);
        }

        .detail-grid-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow);
          border-color: var(--primary);
        }

        .detail-grid-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .detail-grid-value {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
        }

        .detail-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2.5rem 0 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--border);
          color: var(--text);
          position: relative;
        }

        .detail-section-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 60px;
          height: 2px;
          background: var(--primary);
        }

        .amenities-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .amenity-tag {
          padding: 0.5rem 1rem;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: var(--transition);
          border: 1px solid transparent;
        }

        .amenity-tag:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .detail-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .action-button {
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }

        .primary-button {
          background: var(--primary);
          color: white;
        }

        .primary-button:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .secondary-button {
          background: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }

        .secondary-button:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
        }

        /* Responsive adjustments */
        @media (min-width: 768px) {
          .detail-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          
          .detail-title {
            font-size: 2.25rem;
          }
          
          .content-container {
            padding: 2.5rem;
          }

          .action-buttons {
            justify-content: flex-end;
          }
        }

        @media (max-width: 640px) {
          .detail-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .detail-title {
            font-size: 1.5rem;
          }
          
          .detail-price {
            font-size: 1.25rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .action-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Animation for content */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-container > * {
          animation: fadeIn 0.5s ease forwards;
        }

        .detail-grid-item:nth-child(1) { animation-delay: 0.1s; }
        .detail-grid-item:nth-child(2) { animation-delay: 0.2s; }
        .detail-grid-item:nth-child(3) { animation-delay: 0.3s; }
        .detail-grid-item:nth-child(4) { animation-delay: 0.4s; }
        .detail-grid-item:nth-child(5) { animation-delay: 0.5s; }
        .detail-grid-item:nth-child(6) { animation-delay: 0.6s; }
        .detail-grid-item:nth-child(7) { animation-delay: 0.7s; }
        .detail-grid-item:nth-child(8) { animation-delay: 0.8s; }

        /* Description section */
        .description {
          line-height: 1.8;
          color: var(--text);
          margin: 1.5rem 0;
          padding: 1.5rem;
          background: var(--background-secondary);
          border-radius: var(--radius);
          border-left: 4px solid var(--primary);
        }

        /* Contact section */
        .contact-section {
          background: var(--background-secondary);
          border-radius: var(--radius);
          padding: 2rem;
          margin-top: 2.5rem;
          border: 1px solid var(--border);
        }

        .contact-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text);
        }

        .icon {
          width: 20px;
          height: 20px;
          color: var(--primary);
        }
      `}</style>

      <div className="detail-container">
        <div className="detail-card">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image-container">
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L8 12L11.5 15.5L14.5 12.5L16 14L20 10M4 16V20H20V4H4V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <img
                src={propertyImages[activeImage]}
                alt={property.title}
                className="detail-image"
                onLoad={() => setImageLoaded(true)}
              />
              
              {propertyImages.length > 1 && (
                <>
                  <button 
                    className="gallery-nav prev"
                    onClick={() => setActiveImage((activeImage - 1 + propertyImages.length) % propertyImages.length)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="gallery-nav next"
                    onClick={() => setActiveImage((activeImage + 1) % propertyImages.length)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            {propertyImages.length > 1 && (
              <div className="thumbnail-container">
                {propertyImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="content-container">
            {/* Title + Price */}
            <div className="detail-header">
              <div>
                <h1 className="detail-title">{property.title}</h1>
                <div className="detail-address">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {property.address}
                </div>
              </div>
              <p className="detail-price">
                ₹{property.price} {property.price_units}
              </p>
            </div>

            {/* Description */}
            {property.description && (
              <>
                <h2 className="detail-section-title">Description</h2>
                <div className="description">
                  {property.description}
                </div>
              </>
            )}

            {/* Key Info */}
            <h2 className="detail-section-title">Property Details</h2>
            <div className="detail-grid">
              <div className="detail-grid-item">
                <span className="detail-grid-label">Type</span>
                <span className="detail-grid-value">{property.type}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Transaction</span>
                <span className="detail-grid-value">{property.transaction_type}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Area</span>
                <span className="detail-grid-value">{property.area_sqft} sqft</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Bedrooms</span>
                <span className="detail-grid-value">{property.bedrooms}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Bathrooms</span>
                <span className="detail-grid-value">{property.bathrooms}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Year Built</span>
                <span className="detail-grid-value">{property.year_built}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Furnishing</span>
                <span className="detail-grid-value">{property.furnishing}</span>
              </div>
              <div className="detail-grid-item">
                <span className="detail-grid-label">Builder</span>
                <span className="detail-grid-value">{property.builder || "Not specified"}</span>
              </div>
            </div>

            {/* Amenities */}
            <h2 className="detail-section-title">Amenities</h2>
            <div className="amenities-grid">
              {property.amenities && property.amenities.length > 0 ? (
                property.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">{amenity}</span>
                ))
              ) : (
                <p>No amenities listed</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-section">
              <h3 className="contact-title">Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.41 20.93 20.84 20.73C19.94 20.42 19.03 20.1 18.13 19.73C17.59 19.51 17.21 19.01 17.21 18.43C17.21 18.28 17.24 18.14 17.3 18H17.31C15.42 16.93 14.08 15.13 13.58 13H15.5C15.78 13 16.05 12.87 16.22 12.67C16.5 12.36 16.5 11.89 16.22 11.58L13.17 8.08C12.9 7.78 12.47 7.78 12.2 8.08L9.15 11.58C8.87 11.89 8.87 12.36 9.15 12.67C9.32 12.87 9.59 13 9.87 13H11.75C11.35 15.58 9.5 17.73 7.07 18.63C7.12 18.74 7.16 18.86 7.16 18.99C7.16 19.57 6.78 20.07 6.24 20.29C4.56 20.96 2.84 21.5 1.09 21.91C0.46 22.05 0 21.51 0 20.92V17.92C0 17.33 0.48 16.85 1.07 16.85C4.76 16.85 7.93 14.94 9.45 12.12C10.97 9.3 10.97 6.12 9.45 3.3C7.93 0.48 4.76 -1.43 1.07 -1.43C0.48 -1.43 0 -1.91 0 -2.5V-5.5C0 -6.09 0.46 -6.63 1.09 -6.49C2.84 -6.08 4.56 -5.54 6.24 -4.87C6.78 -4.65 7.16 -4.15 7.16 -3.57C7.16 -3.44 7.12 -3.32 7.07 -3.21C9.5 -2.31 11.35 -0.16 11.75 2.42H9.87C9.59 2.42 9.32 2.55 9.15 2.75C8.87 3.06 8.87 3.53 9.15 3.84L12.2 7.34C12.47 7.64 12.9 7.64 13.17 7.34L16.22 3.84C16.5 3.53 16.5 3.06 16.22 2.75C16.05 2.55 15.78 2.42 15.5 2.42H13.62C14.12 0.29 15.46 -1.51 17.35 -2.58H17.34C17.28 -2.72 17.25 -2.86 17.25 -3.01C17.25 -3.59 17.63 -4.09 18.17 -4.31C19.85 -4.98 21.57 -5.52 23.32 -5.93C23.95 -6.07 24.41 -5.53 24.41 -4.94V-1.94C24.41 -1.35 23.93 -0.87 23.34 -0.87C20.65 -0.87 18.14 0.44 16.66 2.66C15.18 4.88 15.18 7.64 16.66 9.86C18.14 12.08 20.65 13.39 23.34 13.39C23.93 13.39 24.41 13.87 24.41 14.46V17.46C24.41 18.05 23.95 18.59 23.32 18.45C21.57 18.04 19.85 17.5 18.17 16.83C17.63 16.61 17.25 16.11 17.25 15.53C17.25 15.4 17.29 15.28 17.34 15.17H17.33C15.44 14.1 14.1 12.3 13.6 10.17H15.48C15.76 10.17 16.03 10.04 16.2 9.84C16.48 9.53 16.48 9.06 16.2 8.75L13.15 5.25C12.88 4.95 12.45 4.95 12.18 5.25L9.13 8.75C8.85 9.06 8.85 9.53 9.13 9.84C9.3 10.04 9.57 10.17 9.85 10.17H11.73C12.13 12.75 13.98 14.9 16.41 15.8C16.36 15.91 16.32 16.03 16.32 16.16C16.32 16.74 16.7 17.24 17.24 17.46C18.14 17.81 19.05 18.13 19.95 18.44C20.52 18.64 21.11 18.15 21.11 17.55V16.92Z" fill="currentColor"/>
                  </svg>
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="contact-item">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>property@example.com</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="action-button primary-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.52 21.41 20.93 20.84 20.73C19.94 20.42 19.03 20.1 18.13 19.73C17.59 19.51 17.21 19.01 17.21 18.43C17.21 18.28 17.24 18.14 17.3 18H17.31C15.42 16.93 14.08 15.13 13.58 13H15.5C15.78 13 16.05 12.87 16.22 12.67C16.5 12.36 16.5 11.89 16.22 11.58L13.17 8.08C12.9 7.78 12.47 7.78 12.2 8.08L9.15 11.58C8.87 11.89 8.87 12.36 9.15 12.67C9.32 12.87 9.59 13 9.87 13H11.75C11.35 15.58 9.5 17.73 7.07 18.63C7.12 18.74 7.16 18.86 7.16 18.99C7.16 19.57 6.78 20.07 6.24 20.29C4.56 20.96 2.84 21.5 1.09 21.91C0.46 22.05 0 21.51 0 20.92V17.92C0 17.33 0.48 16.85 1.07 16.85C4.76 16.85 7.93 14.94 9.45 12.12C10.97 9.3 10.97 6.12 9.45 3.3C7.93 0.48 4.76 -1.43 1.07 -1.43C0.48 -1.43 0 -1.91 0 -2.5V-5.5C0 -6.09 0.46 -6.63 1.09 -6.49C2.84 -6.08 4.56 -5.54 6.24 -4.87C6.78 -4.65 7.16 -4.15 7.16 -3.57C7.16 -3.44 7.12 -3.32 7.07 -3.21C9.5 -2.31 11.35 -0.16 11.75 2.42H9.87C9.59 2.42 9.32 2.55 9.15 2.75C8.87 3.06 8.87 3.53 9.15 3.84L12.2 7.34C12.47 7.64 12.9 7.64 13.17 7.34L16.22 3.84C16.5 3.53 16.5 3.06 16.22 2.75C16.05 2.55 15.78 2.42 15.5 2.42H13.62C14.12 0.29 15.46 -1.51 17.35 -2.58H17.34C17.28 -2.72 17.25 -2.86 17.25 -3.01C17.25 -3.59 17.63 -4.09 18.17 -4.31C19.85 -4.98 21.57 -5.52 23.32 -5.93C23.95 -6.07 24.41 -5.53 24.41 -4.94V-1.94C24.41 -1.35 23.93 -0.87 23.34 -0.87C20.65 -0.87 18.14 0.44 16.66 2.66C15.18 4.88 15.18 7.64 16.66 9.86C18.14 12.08 20.65 13.39 23.34 13.39C23.93 13.39 24.41 13.87 24.41 14.46V17.46C24.41 18.05 23.95 18.59 23.32 18.45C21.57 18.04 19.85 17.5 18.17 16.83C17.63 16.61 17.25 16.11 17.25 15.53C17.25 15.4 17.29 15.28 17.34 15.17H17.33C15.44 14.1 14.1 12.3 13.6 10.17H15.48C15.76 10.17 16.03 10.04 16.2 9.84C16.48 9.53 16.48 9.06 16.2 8.75L13.15 5.25C12.88 4.95 12.45 4.95 12.18 5.25L9.13 8.75C8.85 9.06 8.85 9.53 9.13 9.84C9.3 10.04 9.57 10.17 9.85 10.17H11.73C12.13 12.75 13.98 14.9 16.41 15.8C16.36 15.91 16.32 16.03 16.32 16.16C16.32 16.74 16.7 17.24 17.24 17.46C18.14 17.81 19.05 18.13 19.95 18.44C20.52 18.64 21.11 18.15 21.11 17.55V16.92Z" fill="currentColor"/>
                </svg>
                Contact Agent
              </button>
              <button className="action-button secondary-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Save Property
              </button>
            </div>

            {/* Created At */}
            <div className="detail-date">
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
      </div>
    </>
  );
};