import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../utils/firebase";

export const DetailCard = () => {
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
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading property details...</p>
    </div>
  );

  return (
    <>
      <style>{`
        :root {
          --primary: #2563eb;
          --primary-light: #dbeafe;
          --secondary: #64748b;
          --accent: #f1f5f9;
          --text: #1e293b;
          --text-light: #64748b;
          --border: #e2e8f0;
          --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --radius: 12px;
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
          background-color: #f8fafc;
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
          background: white;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .detail-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .image-container {
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
          padding: 1rem;
          background: var(--accent);
          border-radius: var(--radius);
          transition: var(--transition);
        }

        .detail-grid-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .detail-grid-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          margin-bottom: 0.25rem;
        }

        .detail-grid-value {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
        }

        .detail-section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--border);
        }

        .amenities-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .amenity-tag {
          padding: 0.5rem 1rem;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: var(--transition);
        }

        .amenity-tag:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-1px);
        }

        .detail-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          color: var(--text-light);
          font-size: 0.875rem;
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
      `}</style>

      <div className="detail-container">
        <div className="detail-card">
          {/* Image with loading state */}
          <div className="image-container">
            <div className="image-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16L8 12L11.5 15.5L14.5 12.5L16 14L20 10M4 16V20H20V4H4V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <img
              src={property.image}
              alt={property.title}
              className="detail-image"
              onLoad={() => setImageLoaded(true)}
            />
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

            {/* Key Info */}
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
                <span className="detail-grid-value">{property.builder}</span>
              </div>
            </div>

            {/* Amenities */}
            <h2 className="detail-section-title">Amenities</h2>
            <div className="amenities-grid">
              {property.amenities.map((amenity, index) => (
                <span key={index} className="amenity-tag">{amenity}</span>
              ))}
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