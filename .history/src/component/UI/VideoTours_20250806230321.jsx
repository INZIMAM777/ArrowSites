import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const videoTours = [
  {
    id: 1,
    title: "Luxury Mansion Tour in Dubai",
    location: "Dubai, UAE",
    duration: "3:20",
    thumbnail: "https://img.youtube.com/vi/zumJJUL_ruM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zumJJUL_ruM?autoplay=1"
  },
  {
    id: 2,
    title: "Modern Home with Private Pool",
    location: "Los Angeles, CA",
    duration: "3:05",
    thumbnail: "https://img.youtube.com/vi/QmfVLaBan5I/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/QmfVLaBan5I?autoplay=1"
  },
  {
    id: 3,
    title: "Elegant European-Style Villa",
    location: "Tuscany, Italy",
    duration: "3:50",
    thumbnail: "https://img.youtube.com/vi/rzBvHcmA8iQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/rzBvHcmA8iQ?autoplay=1"
  }
];

export const VideoTours = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePlay = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="video-tours">
      <div className="container">
        <h2 className="section-title">Featured Video Tours</h2>
        <p className="section-subtitle">Experience properties from the comfort of your home</p>

        <div className="videos-grid">
          {videoTours.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail" onClick={() => handlePlay(video.videoUrl)}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button"><FaPlay /></div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="video-location">{video.location}</p>
                <button className="view-property-btn">View Property Details</button>
                <NavLink className='navlink' to='/Cards'>
                  <button className="view-all-btn">View Property Detail</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-modal-btn" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};
