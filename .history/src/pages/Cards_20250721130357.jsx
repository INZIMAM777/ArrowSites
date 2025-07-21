// import { useLoaderData } from "react-router-dom";
import data from  '../api/proper.json'; 
export const Cards = () => {
//   const { city, state, properties } = useLoaderData();
  
  return (
    <div className="cards-page">
      <h1>Properties in </h1>
      
      <div className="data-grid">
        {data.map((data) => (
          <div key={data.id} className="data-card">
            <h2>{data.title}</h2>
            <div className="price">
              {data.price} {data.price_units}
            </div>
            <div className="details">
              <span>{data.bedrooms} Beds</span>
              <span>{data.bathrooms} Baths</span>
              <span>{data.area_sqft} sq.ft.</span>
            </div>
            {data.images?.length > 0 && (
              <img 
                src={data.images[0]} 
                alt={data.title}
                className="data-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};