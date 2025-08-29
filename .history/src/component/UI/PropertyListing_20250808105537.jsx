import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink, useSearchParams } from 'react-router-dom';

export const PropertyListings = ({ title, limit, featured }) => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const { getLists, isLoggedIn } = useFirebase();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesSnapshot = await getLists();
        const propertyData = propertiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(propertyData);
        applyFiltersAndSearch(propertyData, searchTerm, filters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties: ", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getLists]);

  const normalizeString = (str) => {
    return str ? str.toString().toLowerCase().trim() : '';
  };

  const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
    let filtered = [...propertiesToFilter];
    
    // Apply search filter
    if (search) {
      const normalizedSearch = normalizeString(search);
      filtered = filtered.filter((property) => {
        const searchFields = [
          property.address,
          property.city,
          property.description,
          property.location,
          property.neighborhood,
          property.landmark
        ].filter(Boolean);

        return searchFields.some((field) => 
          normalizeString(field).includes(normalizedSearch))
      });
    }

    // Apply property type filter
    if (filterParams.propertyType) {
      filtered = filtered.filter(
        (property) => property.type === filterParams.propertyType
      );
    }

    // Apply price filters
    if (filterParams.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= Number(filterParams.minPrice)
      );
    }
    if (filterParams.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= Number(filterParams.maxPrice)
      );
    }

    // Apply bedroom filter
    if (filterParams.bedrooms) {
      filtered = filtered.filter(
        (property) => property.beds >= Number(filterParams.bedrooms)
      );
    }

    // Apply bathroom filter
    if (filterParams.bathrooms) {
      filtered = filtered.filter(
        (property) => property.baths >= Number(filterParams.bathrooms)
      );
    }

    // Apply featured filter if needed
    if (featured) {
      filtered = filtered.filter(prop => prop.featured);
    }

    // Apply limit if needed
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    setFilteredProperties(filtered);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    applyFiltersAndSearch(properties, searchTerm, filters);
  };

  const handleFilter = (filterParams) => {
    setFilters(filterParams);
    applyFiltersAndSearch(properties, searchTerm, filterParams);
  };

  if (loading) {
    return <div className="container">Loading properties...</div>;
  }

  return (
    <section className="property-listings">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        
        {/* Search and Filter Component - You might want to create this separately */}
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <select
            value={filters.propertyType}
            onChange={(e) => handleFilter({...filters, propertyType: e.target.value})}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
          {/* Add more filter inputs as needed */}
        </div>

        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
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
            ))
          ) : (
            <div className="no-results">
              <p>No properties match your search criteria.</p>
              <button onClick={() => {
                setSearchTerm('');
                setFilters({
                  propertyType: "",
                  minPrice: "",
                  maxPrice: "",
                  bedrooms: "",
                  bathrooms: "",
                });
                setFilteredProperties(properties);
              }}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        {!featured && (
          <NavLink className='navlink' to='/properties'>
            <button className="view-all-btn">View All Properties</button>
          </NavLink>
        )}
      </div>
    </section>
  );
};