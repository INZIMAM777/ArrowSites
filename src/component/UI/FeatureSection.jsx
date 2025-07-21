// FeatureSection.jsx
import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Feature One",
      description: "Description of the first amazing feature",
      icon: "🚀"
    },
    {
      title: "Feature Two",
      description: "Description of the second great feature",
      icon: "✨"
    },
    {
      title: "Feature Three",
      description: "Description of the third excellent feature",
      icon: "🔒"
    }
  ];

  return (
    <section className="features">
      <h2>Our Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;