import React, { useState } from 'react';
import './SearchFilters.css';

export const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  return (
    <section className="search-filters">
      <div className="filters-container">
        <div className="filter-group">
          <label>Location</label>
          <input type="text" placeholder="City, Neighborhood, or ZIP" />
        </div>
        
        <div className="filter-group">
          <label>Price Range</label>
          <div className="price-range">
            <input 
              type="range" 
              min="0" 
              max="1000000" 
              step="50000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
            />
            <input 
              type="range" 
              min="0" 
              max="1000000" 
              step="50000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
            />
            <div className="price-values">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="filter-group">
          <label>Bedrooms</label>
          <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Property Type</label>
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="land">Land</option>
          </select>
        </div>
        
        <button className="search-button">Search Properties</button>
      </div>
    </section>
  );
};