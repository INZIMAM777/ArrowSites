import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: 750000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    address: "123 Palm Street, Miami",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Downtown Apartment",
    price: 450000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "456 City Ave, New York",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Suburban Family Home",
    price: 320000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "789 Oak Lane, Austin",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Waterfront Cottage",
    price: 550000,
    beds: 3,
    baths: 2,
    sqft: 1600,
    address: "101 Lakeview Dr, Seattle",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Urban Loft",
    price: 380000,
    beds: 1,
    baths: 1,
    sqft: 900,
    address: "202 Brick Lane, Chicago",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 6,
    title: "Country Estate",
    price: 1200000,
    beds: 5,
    baths: 4,
    sqft: 4000,
    address: "303 Green Acres, Nashville",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

export const PropertyListings = ({ title, limit, featured }) => {
  const displayedProperties = featured 
    ? properties.filter(prop => prop.featured).slice(0, limit)
    : properties.slice(0, limit);

  return (
    <style>
      .navlink{
        text-d
      }
    </style>
    <section className="property-listings">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="properties-grid">
          {displayedProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                <button className="favorite-btn">
                  <FaHeart />
                </button>
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
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
        <NavLink className={navlink} to='/Cards'>
          <button className="view-all-btn">View All Properties</button>
        </NavLink>
        
      </div>
    </section>
  );
};