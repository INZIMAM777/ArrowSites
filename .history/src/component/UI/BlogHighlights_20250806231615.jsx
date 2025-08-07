import React from 'react';
import { FaCalendar, FaUser } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "First-Time Home Buyer's Guide: Everything You Need to Know",
    excerpt: "A comprehensive guide to help first-time buyers navigate the complex process of purchasing a home.",
    date: "2023-06-10",
    author: "Investopedia",
    category: "Buying",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.investopedia.com/mortgage-guide-for-first-time-homebuyers-5180627"
  },
  {
    id: 2,
    title: "5 Home Staging Tips to Sell Your Property Faster",
    excerpt: "Professional staging techniques that can help your home stand out in a competitive market.",
    date: "2023-05-28",
    author: "Better Homes & Gardens",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.bhg.com/home-improvement/moving/selling/home-staging-tips/"
  },
  {
    id: 3,
    title: "Neighborhood Spotlight: Downtown Living at Its Best",
    excerpt: "Explore the amenities, schools, and lifestyle of our city's vibrant downtown district.",
    date: "2023-05-15",
    author: "Forbes",
    category: "Neighborhoods",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.forbes.com/sites/forbesrealestatecouncil/2023/03/14/top-10-downtowns-to-invest-in/?sh=1efb930d2a63"
  }
];


export const BlogHighlights = ({ title, limit }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="blog-highlights">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="blog-grid">
          {displayedPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="category-tag">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="meta-item">
                    <FaCalendar className="meta-icon" />
                    {formatDate(post.date)}
                  </span>
                  <span className="meta-item">
                    <FaUser className="meta-icon" />
                    {post.author}
                  </span>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => window.open(post.url, "_blank")}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
