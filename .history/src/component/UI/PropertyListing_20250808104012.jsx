import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';

export const PropertyListings = ({ title, limit, featured }) => {
  const [properties, setProperties] = useState([]);
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesSnapshot = await firebase.getLists();
        const propertyData = propertiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(propertyData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [firebase]);

  useEffect(() => {
    if (properties.length > 0) {
      const filtered = featured 
        ? properties.filter(prop => prop.featured).slice(0, limit)
        : properties.slice(0, limit);
      setDisplayedProperties(filtered);
    }
  }, [properties, limit, featured]);

  if (displayedProperties.length === 0) {
    return <div>Loading properties...</div>;
  }

  return (
    <section className="property-listings">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="properties-grid">
          {displayedProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.imageURL || "https://via.placeholder.com/400x300"} alt={property.title} />
                <button className="favorite-btn">
                  <FaHeart />
                </button>
                <div className="price-tag">${property.price?.toLocaleString()}</div>
              </div>
              <div className="property-details">
                <h3>{property.title || "Untitled Property"}</h3>
                <div className="property-address">
                  <FaMapMarkerAlt /> {property.address || "Address not specified"}
                </div>
                <div className="property-features">
                  <span><FaBed /> {property.bedrooms || "N/A"}</span>
                  <span><FaBath /> {property.bathrooms || "N/A"}</span>
                  <span><FaRulerCombined /> {property.area || "N/A"} sqft</span>
                </div>
                <NavLink to={`/property/${property.id}`} className="view-details-btn">
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <NavLink className='navlink' to='/properties'>
          <button className="view-all-btn">View All Properties</button>
        </NavLink>
      </div>
    </section>
  );
};