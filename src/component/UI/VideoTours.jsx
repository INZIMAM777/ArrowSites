import React from 'react';
import { FaPlay } from 'react-icons/fa';


const videoTours = [
  {
    id: 1,
    title: "Luxury Waterfront Estate Tour",
    location: "Miami, FL",
    duration: "3:45",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "New York, NY",
    duration: "2:30",
    thumbnail: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Family Home in Suburban Neighborhood",
    location: "Austin, TX",
    duration: "4:15",
    thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const VideoTours = () => {
  return (
    <section className="video-tours">
      <div className="container">
        <h2 className="section-title">Featured Video Tours</h2>
        <p className="section-subtitle">Experience properties from the comfort of your home</p>
        <div className="videos-grid">
          {videoTours.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button">
                  <FaPlay />
                </div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="video-location">{video.location}</p>
                <button className="view-property-btn">View Property Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};