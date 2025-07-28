import React from 'react';
import { FaPhone, FaEnvelope, FaStar } from 'react-icons/fa';
import './AgentShowcase.css';

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    experience: "12 years",
    propertiesSold: 245,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "(555) 123-4567",
    email: "sarah@realestate.com"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Luxury Home Specialist",
    experience: "8 years",
    propertiesSold: 178,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "(555) 987-6543",
    email: "michael@realestate.com"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "First-Time Home Buyer Expert",
    experience: "6 years",
    propertiesSold: 132,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "(555) 456-7890",
    email: "emily@realestate.com"
  }
];

export const AgentShowcase = () => {
  return (
    <section className="agent-showcase">
      <div className="container">
        <h2 className="section-title">Our Top Agents</h2>
        <p className="section-subtitle">Work with the best in the business</p>
        <div className="agents-grid">
          {agents.map(agent => (
            <div key={agent.id} className="agent-card">
              <div className="agent-image">
                <img src={agent.image} alt={agent.name} />
              </div>
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p className="agent-title">{agent.title}</p>
                <div className="agent-stats">
                  <div className="stat-item">
                    <span className="stat-label">Experience:</span>
                    <span className="stat-value">{agent.experience}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Properties Sold:</span>
                    <span className="stat-value">{agent.propertiesSold}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Rating:</span>
                    <span className="stat-value">
                      {agent.rating} <FaStar className="star-icon" />
                    </span>
                  </div>
                </div>
                <div className="agent-contact">
                  <a href={`tel:${agent.phone}`} className="contact-link">
                    <FaPhone /> {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="contact-link">
                    <FaEnvelope /> {agent.email}
                  </a>
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};