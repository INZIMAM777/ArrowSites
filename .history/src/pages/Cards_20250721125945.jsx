// import { useLoaderData } from "react-router-dom";

export const Cards = () => {
//   const { city, state, properties } = useLoaderData();
  
  return (
    <div className="cards-page">
      <h1>Properties in {city}, {state}</h1>
      
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <h2>{property.title}</h2>
            <div className="price">
              {property.price} {property.price_units}
            </div>
            <div className="details">
              <span>{property.bedrooms} Beds</span>
              <span>{property.bathrooms} Baths</span>
              <span>{property.area_sqft} sq.ft.</span>
            </div>
            {property.images?.length > 0 && (
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="property-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};