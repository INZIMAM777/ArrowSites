// import { useLoaderData } from "react-router-dom";
import data from  '../api/.json'; 
export const Cards = () => {
//   const { city, state, properties } = useLoaderData();
  
  return (
    <div className="cards-page">
      <h1>Properties in {city}, {state}</h1>
      
      <div className="-grid">
        {data.map(() => (
          <div key={.id} className="-card">
            <h2>{.title}</h2>
            <div className="price">
              {.price} {.price_units}
            </div>
            <div className="details">
              <span>{.bedrooms} Beds</span>
              <span>{.bathrooms} Baths</span>
              <span>{.area_sqft} sq.ft.</span>
            </div>
            {.images?.length > 0 && (
              <img 
                src={.images[0]} 
                alt={.title}
                className="-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};