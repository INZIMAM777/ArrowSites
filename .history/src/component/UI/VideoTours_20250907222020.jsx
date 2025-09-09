import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Color palettes for light and dark modes (same as Hero component)
const colorTheme = {
  dark: {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
      overlay: "rgba(0, 0, 0, 0.7)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      accent: "#60a5fa",
    },
    border: {
      primary: "#334155",
      accent: "#60a5fa",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#1e293b",
      secondaryHover: "#334155",
    }
  },
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#e2e8f0",
      overlay: "rgba(255, 255, 255, 0.7)",
    },
    text: {
      primary: "#1e293b",
      secondary: "#475569",
      accent: "#3b82f6",
    },
    border: {
      primary: "#e2e8f0",
      accent: "#3b82f6",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#f1f5f9",
      secondaryHover: "#e2e8f0",
    }
  }
};

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

export const VideoTours = ({ isDarkMode }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  const handlePlay = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Component styles using the theme
  const styles = {
    videoTours: {
      padding: "4rem 1.5rem",
      backgroundColor: theme.background.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
    },
    sectionTitle: {
      textAlign: "center",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 700,
      marginBottom: "1rem",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    sectionSubtitle: {
      textAlign: "center",
      fontSize: "1.1rem",
      marginBottom: "3rem",
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
    videosGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "2rem",
    },
    videoCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    videoThumbnail: {
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
    },
    videoThumbnailImg: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    playButton: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "60px",
      height: "60px",
      backgroundColor: "rgba(59, 130, 246, 0.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.2rem",
      transition: "all 0.3s ease",
    },
    videoDuration: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    videoInfo: {
      padding: "1.5rem",
    },
    videoTitle: {
      fontSize: "1.2rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    videoLocation: {
      fontSize: "0.95rem",
      color: theme.text.secondary,
      marginBottom: "1.2rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    viewPropertyBtn: {
      padding: "0.8rem 1.5rem",
      borderRadius: "8px",
      fontWeight: 500,
      fontSize: "0.95rem",
      cursor: "pointer",
      border: "none",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "#fff",
      transition: "all 0.3s ease",
      width: "100%",
    },
    videoModal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    videoContainer: {
      position: "relative",
      width: "90%",
      maxWidth: "900px",
      height: "80%",
      backgroundColor: theme.background.primary,
      borderRadius: "12px",
      overflow: "hidden",
    },
    closeModalBtn: {
      position: "absolute",
      top: "15px",
      right: "15px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  };

  return (
    <section style={styles.videoTours}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Featured Video Tours</h2>
        <p style={styles.sectionSubtitle}>Experience properties from the comfort of your home</p>

        <div style={styles.videosGrid}>
          {videoTours.map(video => (
            <div 
              key={video.id} 
              style={styles.videoCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = "none";
              }}
            >
              <div style={styles.videoThumbnail} onClick={() => handlePlay(video.videoUrl)}>
                <img src={video.thumbnail} alt={video.title} style={styles.videoThumbnailImg} />
                <div style={styles.playButton}>
                  <FaPlay />
                </div>
                <div style={styles.videoDuration}>{video.duration}</div>
              </div>
              <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>{video.title}</h3>
                <p style={styles.videoLocation}>{video.location}</p>
                <NavLink to='/Cards'>
                  <button 
                    style={styles.viewPropertyBtn}
                    onMouseOver={(e) => {
                      e.target.style.background = theme.button.primaryHover;
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
                      e.target.style.transform = "none";
                    }}
                  >
                    View Property Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div style={styles.videoModal} onClick={closeModal}>
          <div style={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button style={styles.closeModalBtn} onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};