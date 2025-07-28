import React from 'react';
import { FaSchool, FaUtensils, FaTree, FaSubway } from 'react-icons/fa';
import './NeighborhoodHighlights.css';

const neighborhoods = [
  {
    id: 1,
    name: "Downtown District",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: {
      schools: "8.5/10",
      restaurants: 120,
      parks: 15,
      transit: "Excellent"
    },
    avgPrice: "$650,000",
    featured: true
  },
  {
    id: 2,
    name: "Riverside",
    image: "https://images.unsplash.com/photo-1437572848259-df63caa1a552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: {
      schools: "9.2/10",
      restaurants: 85,
      parks: 22,
      transit: "Good"
    },
    avgPrice: "$720,000",
    featured: true
  },
  {
    id: 3,
    name: "Green Valley",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: {
      schools: "9.8/10",
      restaurants: 45,
      parks: 30,
      transit: "Fair"
    },
    avgPrice: "$850,000",
    featured: true
  }
];

export const NeighborhoodHighlights = () => {
  return (
    <section className="neighborhood-highlights">
      <div className="container">
        <h2 className="section-title">Featured Neighborhoods</h2>
        <div className="neighborhoods-grid">
          {neighborhoods.map(neighborhood => (
            <div key={neighborhood.id} className="neighborhood-card">
              <div className="neighborhood-image">
                <img src={neighborhood.image} alt={neighborhood.name} />
                <div className="neighborhood-name">{neighborhood.name}</div>
              </div>
              <div className="neighborhood-stats">
                <div className="stat-item">
                  <FaSchool className="stat-icon" />
                  <span>Schools: {neighborhood.stats.schools}</span>
                </div>
                <div className="stat-item">
                  <FaUtensils className="stat-icon" />
                  <span>Restaurants: {neighborhood.stats.restaurants}</span>
                </div>
                <div className="stat-item">
                  <FaTree className="stat-icon" />
                  <span>Parks: {neighborhood.stats.parks}</span>
                </div>
                <div className="stat-item">
                  <FaSubway className="stat-icon" />
                  <span>Transit: {neighborhood.stats.transit}</span>
                </div>
              </div>
              <div className="neighborhood-footer">
                <span className="avg-price">Avg Price: {neighborhood.avgPrice}</span>
                <button className="explore-btn">Explore Area</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};