import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';

export const PropertyListings = ({ title, limit, featured }) => {
  const { getLists, isLoggedIn } = useFirebase();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getLists();
        const propertiesData = [];
        querySnapshot.forEach((doc) => {
          propertiesData.push({ id: doc.id, ...doc.data() });
        });
        setProperties(propertiesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties: ", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getLists]);

  if (loading) {
    return <div className="container">Loading properties...</div>;
  }

  const displayedProperties = featured 
    ? properties.filter(prop => prop.featured).slice(0, limit)
    : properties.slice(0, limit);

  return (
    <section className="property-listings">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="properties-grid">
          {displayedProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                {isLoggedIn && (
                  <button className="favorite-btn">
                    <FaHeart />
                  </button>
                )}
                <div className="price-tag">${property.price.toLocaleString()}</div>
              </div>
              <div className="property-details">
                <h3>{property.title}</h3>
                <div className="property-address">
                  <FaMapMarkerAlt /> {property.address}
                </div>
                <div className="property-features">
                  <span><FaBed /> {property.beds}</span>
                  <span><FaBath /> {property.baths}</span>
                  <span><FaRulerCombined /> {property.sqft} sqft</span>
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