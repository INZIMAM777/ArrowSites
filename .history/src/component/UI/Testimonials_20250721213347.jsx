// Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This product changed my life!",
      author: "Jane Doe",
      role: "Happy Customer"
    },
    {
      quote: "I've never seen anything like this before.",
      author: "John Smith",
      role: "Satisfied User"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="author-info">
              <p className="author-name">{testimonial.author}</p>
              <p className="author-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;