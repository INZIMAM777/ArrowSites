import { useLoaderData } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";
import { useEffect, useState } from "react";
import { PCard } from "../component/UI/PCard";

export const DetailCard = () => {
    const propertyId = useLoaderData();
    const firebase = useFirebase();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [similarProperties, setSimilarProperties] = useState([]);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                setLoading(true);
                // Get all properties
                const allProperties = await firebase.getLists();
                
                // Find the property with matching ID
                const foundProperty = allProperties.find(prop => prop.id === propertyId);
                
                if (foundProperty) {
                    setProperty(foundProperty);
                    
                    // Find similar properties (same type or transaction type)
                    const similar = allProperties.filter(prop => 
                        prop.id !== propertyId && 
                        (prop.type === foundProperty.type || 
                         prop.transaction_type === foundProperty.transaction_type)
                    ).slice(0, 3); // Limit to 3 properties
                    
                    setSimilarProperties(similar);
                } else {
                    console.error("Property not found");
                }
            } catch (error) {
                console.error("Error fetching property details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyDetails();
    }, [propertyId, firebase]);

    if (loading) {
        return (
            <div className="detail-card-loading">
                <div>Loading property details...</div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="detail-card-error">
                <h2>Property Not Found</h2>
                <p>The property you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <>
            <style>
                {`
                .detail-card-loading,
                .detail-card-error {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 50vh;
                    flex-direction: column;
                }

                .detail-card-error h2 {
                    color: #e74c3c;
                    margin-bottom: 1rem;
                }

                .detail-card-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }

                .detail-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 3rem;
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                .detail-card-image-section {
                    position: relative;
                }

                .detail-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    min-height: 400px;
                }

                .detail-card-content {
                    padding: 2rem;
                }

                .detail-card-title {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: #2c3e50;
                }

                .detail-card-address {
                    color: #7f8c8d;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                }

                .detail-card-price {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }

                .price-main {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: #27ae60;
                }

                .price-unit {
                    color: #7f8c8d;
                    font-size: 1rem;
                }

                .transaction-type {
                    background: #3498db;
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    margin-left: 1rem;
                }

                .detail-card-specs {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .spec-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem;
                    background: #f8f9fa;
                    border-radius: 8px;
                }

                .spec-label {
                    color: #7f8c8d;
                    font-weight: 500;
                }

                .spec-value {
                    font-weight: bold;
                    color: #2c3e50;
                }

                .detail-card-builder {
                    margin-bottom: 2rem;
                }

                .detail-card-builder h3 {
                    margin-bottom: 0.5rem;
                    color: #2c3e50;
                }

                .detail-card-builder p {
                    color: #34495e;
                    font-size: 1.1rem;
                }

                .detail-card-amenities h3 {
                    margin-bottom: 1rem;
                    color: #2c3e50;
                }

                .amenities-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .amenity-tag {
                    background: #e8f4fc;
                    color: #3498db;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }

                .detail-card-actions {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                }

                .contact-btn,
                .schedule-btn {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 6px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .contact-btn {
                    background: #3498db;
                    color: white;
                }

                .contact-btn:hover {
                    background: #2980b9;
                }

                .schedule-btn {
                    background: #27ae60;
                    color: white;
                }

                .schedule-btn:hover {
                    background: #219a52;
                }

                .similar-properties {
                    margin-top: 3rem;
                }

                .similar-properties h2 {
                    margin-bottom: 1.5rem;
                    color: #2c3e50;
                }

                .similar-properties-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                /* Responsive design */
                @media (max-width: 900px) {
                    .detail-card {
                        grid-template-columns: 1fr;
                    }
                    
                    .detail-card-image {
                        min-height: 300px;
                    }
                    
                    .detail-card-specs {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .detail-card-actions {
                        flex-direction: column;
                    }
                    
                    .detail-card-title {
                        font-size: 1.5rem;
                    }
                    
                    .price-main {
                        font-size: 1.5rem;
                    }
                }
                `}
            </style>

            <div className="detail-card-container">
                <div className="detail-card">
                    <div className="detail-card-image-section">
                        <img 
                            src={property.image} 
                            alt={property.title} 
                            className="detail-card-image"
                        />
                    </div>
                    
                    <div className="detail-card-content">
                        <h1 className="detail-card-title">{property.title}</h1>
                        <p className="detail-card-address">{property.address}</p>
                        
                        <div className="detail-card-price">
                            <span className="price-main">₹{property.price}</span>
                            <span className="price-unit">{property.price_units}</span>
                            <span className="transaction-type">{property.transaction_type}</span>
                        </div>
                        
                        <div className="detail-card-specs">
                            <div className="spec-item">
                                <span className="spec-label">Bedrooms</span>
                                <span className="spec-value">{property.bedrooms}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Bathrooms</span>
                                <span className="spec-value">{property.bathrooms}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Area</span>
                                <span className="spec-value">{property.area_sqft} sq.ft.</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Type</span>
                                <span className="spec-value">{property.type}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Furnishing</span>
                                <span className="spec-value">{property.furnishing}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Year Built</span>
                                <span className="spec-value">{property.year_built}</span>
                            </div>
                        </div>
                        
                        <div className="detail-card-builder">
                            <h3>Builder/Developer</h3>
                            <p>{property.builder}</p>
                        </div>
                        
                        <div className="detail-card-amenities">
                            <h3>Amenities</h3>
                            <div className="amenities-list">
                                {property.amenities.map((amenity, index) => (
                                    <span key={index} className="amenity-tag">{amenity}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="detail-card-actions">
                            <button className="contact-btn">Contact Owner</button>
                            <button className="schedule-btn">Schedule Visit</button>
                        </div>
                    </div>
                </div>
                
                {similarProperties.length > 0 && (
                    <div className="similar-properties">
                        <h2>Similar Properties</h2>
                        <div className="similar-properties-list">
                            {similarProperties.map(property => (
                                <PCard key={property.id} property={property} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};