// Profile.jsx
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

export const Profile = () => {
  const { user, removeSign, updateProfileInfo } = useFirebase();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Theme
  const colorTheme = {
    dark: {
      background: "#0f172a",
      card: "#1e293b",
      textPrimary: "#f8fafc",
      textSecondary: "#cbd5e1",
      accent: "#60a5fa",
      border: "#334155",
    },
    light: {
      background: "#f8fafc",
      card: "#ffffff",
      textPrimary: "#1e293b",
      textSecondary: "#475569",
      accent: "#3b82f6",
      border: "#e2e8f0",
    },
  };

  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Gradient setup (same style logic as About + PropertyListings)
  const gradientPrimary = isDarkMode
    ? "#3b82f6" // solid blue in dark
    : "linear-gradient(135deg, #7c3aed, #6d28d9)"; // purple gradient in light
  const gradientHover = isDarkMode ? "#2563eb" : "#6d28d9";

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfileInfo({ displayName, photoURL });
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
      setMessage("❌ Failed to update profile.");
    }
  };

  const handleLogout = async () => {
    await removeSign();
    navigate("/Login");
  };

  if (!user) {
    return (
      <div
        style={{
          background: theme.background,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.textPrimary,
        }}
      >
        <h2>Please login to view your profile.</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        background: theme.background,
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: theme.card,
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2
          style={{
            color: theme.textPrimary,
            marginBottom: "1.5rem",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          My Profile
        </h2>

        {/* Profile Image */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "0.75rem",
              }}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: theme.accent,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                margin: "0 auto 0.75rem",
              }}
            >
              {user.email.charAt(0).toUpperCase()}
            </div>
          )}
          <p style={{ color: theme.textSecondary, fontSize: "0.9rem" }}>
            {user.email}
          </p>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleUpdateProfile}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                color: theme.textSecondary,
              }}
            >
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: `1px solid ${theme.border}`,
                background: theme.background,
                color: theme.textPrimary,
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = theme.accent)}
              onBlur={(e) => (e.target.style.borderColor = theme.border)}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.25rem",
                color: theme.textSecondary,
              }}
            >
              Profile Image URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Paste image link"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: `1px solid ${theme.border}`,
                background: theme.background,
                color: theme.textPrimary,
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = theme.accent)}
              onBlur={(e) => (e.target.style.borderColor = theme.border)}
            />
          </div>

          {message && (
            <p style={{ marginBottom: "1rem", color: theme.accent }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "8px",
              background: gradientPrimary,
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "1rem",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = gradientHover;
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = gradientPrimary;
              e.target.style.transform = "none";
              e.target.style.boxShadow = "none";
            }}
          >
            Update Profile
          </button>
        </form>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "none",
            borderRadius: "8px",
            background: theme.border,
            color: theme.textPrimary,
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = theme.textSecondary;
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = theme.border;
            e.target.style.transform = "none";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
