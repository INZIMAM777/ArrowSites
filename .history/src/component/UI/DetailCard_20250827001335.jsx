import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../utils/firebase";

export const DetailCard = () => {
  const propertyId = useLoaderData(); // e.g. "PR-1"
  const firestore = getFirestore(app);
  const [property, setProperty] = useState(null);

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

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <style>{`
        .detail-container {
          max-width: 900px;
          margin: 30px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .detail-image {
          width: 100%;
          height: 350px;
          border-radius: 15px;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .detail-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }
        .detail-price {
          font-size: 20px;
          font-weight: bold;
          color: #2e7d32;
        }
        .detail-address {
          margin-top: 8px;
          color: #555;
          font-size: 15px;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 25px;
        }
        .detail-card {
          background: #f8f8f8;
          padding: 12px 15px;
          border-radius: 10px;
          font-size: 14px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        }
        .detail-card strong {
          display: block;
          color: #333;
          margin-bottom: 4px;
        }
        .detail-amenities {
          margin-top: 25px;
        }
        .detail-amenities h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .amenity-tag {
          display: inline-block;
          background: #e3f2fd;
          color: #1565c0;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          margin: 4px;
        }
        .detail-date {
          margin-top: 25px;
          font-size: 13px;
          color: #777;
        }
      `}</style>

      <div className="detail-container">
        {/* Image */}
        <img
          src={property.image}
          alt={property.title}
          className="detail-image"
        />

        {/* Title + Price */}
        <div className="detail-header">
          <h1 className="detail-title">{property.title}</h1>
          <p className="detail-price">
            ₹{property.price} {property.price_units}
          </p>
        </div>

        {/* Address */}
        <p className="detail-address">{property.address}</p>

        {/* Key Info */}
        <div className="detail-grid">
          <div className="detail-card"><strong>Type:</strong> {property.type}</div>
          <div className="detail-card"><strong>Transaction:</strong> {property.transaction_type}</div>
          <div className="detail-card"><strong>Area:</strong> {property.area_sqft} sqft</div>
          <div className="detail-card"><strong>Bedrooms:</strong> {property.bedrooms}</div>
          <div className="detail-card"><strong>Bathrooms:</strong> {property.bathrooms}</div>
          <div className="detail-card"><strong>Year Built:</strong> {property.year_built}</div>
          <div className="detail-card"><strong>Furnishing:</strong> {property.furnishing}</div>
          <div className="detail-card"><strong>Builder:</strong> {property.builder}</div>
        </div>

        {/* Amenities */}
        <div className="detail-amenities">
          <h2>Amenities</h2>
          {property.amenities.map((a, i) => (
            <span key={i} className="amenity-tag">{a}</span>
          ))}
        </div>

        {/* Created At */}
        <p className="detail-date">
          Listed on{" "}
          {property.createdAt?.seconds
            ? new Date(property.createdAt.seconds * 1000).toLocaleDateString()
            : "N/A"}
        </p>
      </div>
    </>
  );
};
