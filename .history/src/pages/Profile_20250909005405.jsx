import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = ({ isDarkMode }) => {
  const { user, removeSign, updateProfileInfo, isAdmin } = useFirebase();
  const [activeTab, setActiveTab] = useState("profile");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);
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
      success: "#10b981",
      error: "#ef4444",
      warning: "#f59e0b"
    },
    light: {
      background: "#f8fafc",
      card: "#ffffff",
      textPrimary: "#1e293b",
      textSecondary: "#475569",
      accent: "#3b82f6",
      border: "#e2e8f0",
      success: "#10b981",
      error: "#ef4444",
      warning: "#f59e0b"
    }
  };
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setPhone(user.phoneNumber || "");
      setBio(user.bio || "");
      setLocation(user.location || "");
    }
  }, [user]);

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfileInfo({ displayName, photoURL, phone, bio, location });
      setIsEditing(false);
      showMessage("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
      showMessage("❌ Failed to update profile.", "error");
    }
  };

  const handleLogout = async () => {
    await removeSign();
    navigate("/Login");
  };

  const handleCancelEdit = () => {
    setDisplayName(user.displayName || "");
    setPhotoURL(user.photoURL || "");
    setPhone(user.phoneNumber || "");
    setBio(user.bio || "");
    setLocation(user.location || "");
    setIsEditing(false);
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
          color: theme.textPrimary
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
        padding: "2rem 1rem",
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "2rem"
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            background: theme.card,
            borderRadius: "16px",
            padding: "2rem",
            height: "fit-content",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            {photoURL ? (
              <img
                src={photoURL}
                alt="Profile"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: `4px solid ${theme.accent}40`
                }}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${theme.accent}, #8b5cf6)`,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: "0 auto 1rem",
                  border: `4px solid ${theme.accent}40`
                }}
              >
                {user.email.charAt(0).toUpperCase()}
              </div>
            )}
            <h2 style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0" }}>
              {displayName || user.email.split('@')[0]}
            </h2>
            <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0" }}>
              {user.email}
            </p>
            {isAdmin && (
              <span
                style={{
                  display: "inline-block",
                  background: theme.accent,
                  color: "#fff",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}
              >
                Admin
              </span>
            )}
          </div>

          <div style={{ borderTop: `1px solid ${theme.border}`, padding: "1.5rem 0" }}>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ color: theme.textSecondary, fontSize: "0.9rem", margin: "0 0 0.25rem 0" }}>
                Member since
              </p>
              <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>
                {user.metadata.creationTime 
                  ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })
                  : "Unknown"}
              </p>
            </div>
            <div>
              <p style={{ color: theme.textSecondary, fontSize: "0.9rem", margin: "0 0 0.25rem 0" }}>
                Last login
              </p>
              <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>
                {user.metadata.lastSignInTime 
                  ? new Date(user.metadata.lastSignInTime).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })
                  : "Unknown"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "10px",
              background: theme.error,
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "1.5rem",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.9"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div
          style={{
            background: theme.card,
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: `1px solid ${theme.border}`, marginBottom: "2rem" }}>
            <button
              onClick={() => setActiveTab("profile")}
              style={{
                padding: "0.75rem 1.5rem",
                background: "none",
                border: "none",
                borderBottom: `3px solid ${activeTab === "profile" ? theme.accent : "transparent"}`,
                color: activeTab === "profile" ? theme.accent : theme.textSecondary,
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              style={{
                padding: "0.75rem 1.5rem",
                background: "none",
                border: "none",
                borderBottom: `3px solid ${activeTab === "settings" ? theme.accent : "transparent"}`,
                color: activeTab === "settings" ? theme.accent : theme.textSecondary,
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              style={{
                padding: "0.75rem 1.5rem",
                background: "none",
                border: "none",
                borderBottom: `3px solid ${activeTab === "activity" ? theme.accent : "transparent"}`,
                color: activeTab === "activity" ? theme.accent : theme.textSecondary,
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Activity
            </button>
          </div>

          {/* Message Alert */}
          {message.text && (
            <div
              style={{
                padding: "1rem",
                borderRadius: "10px",
                marginBottom: "1.5rem",
                background: message.type === "error" ? `${theme.error}20` : `${theme.success}20`,
                border: `1px solid ${message.type === "error" ? theme.error : theme.success}30`,
                color: message.type === "error" ? theme.error : theme.success,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>
                {message.type === "error" ? "❌" : "✅"}
              </span>
              {message.text}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ color: theme.textPrimary, margin: 0 }}>Profile Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    style={{
                      padding: "0.5rem 1.25rem",
                      border: `1px solid ${theme.border}`,
                      borderRadius: "8px",
                      background: "transparent",
                      color: theme.textPrimary,
                      fontWeight: "500",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => e.target.background = theme.border}
                    onMouseOut={(e) => e.target.background = "transparent"}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleCancelEdit}
                    style={{
                      padding: "0.5rem 1.25rem",
                      border: `1px solid ${theme.border}`,
                      borderRadius: "8px",
                      background: "transparent",
                      color: theme.textPrimary,
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => e.target.background = theme.border}
                    onMouseOut={(e) => e.target.background = "transparent"}
                  >
                    Cancel
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleUpdateProfile}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", color: theme.textSecondary, fontWeight: "500" }}>
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
                          borderRadius: "10px",
                          border: `1px solid ${theme.border}`,
                          background: theme.background,
                          color: theme.textPrimary,
                          fontSize: "1rem"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", color: theme.textSecondary, fontWeight: "500" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "10px",
                          border: `1px solid ${theme.border}`,
                          background: theme.background,
                          color: theme.textPrimary,
                          fontSize: "1rem"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: block, marginBottom: "0.5rem", color: theme.textSecondary, fontWeight: "500" }}>
                        Profile Image URL
                      </label>
                      <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="Paste image URL"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "10px",
                          border: `1px solid ${theme.border}`,
                          background: theme.background,
                          color: theme.textPrimary,
                          fontSize: "1rem"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", color: theme.textSecondary, fontWeight: "500" }}>
                        Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your location"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "10px",
                          border: `1px solid ${theme.border}`,
                          background: theme.background,
                          color: theme.textPrimary,
                          fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", color: theme.textSecondary, fontWeight: "500" }}>
                      Bio
                    </label>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself"
                      rows="4"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "10px",
                        border: `1px solid ${theme.border}`,
                        background: theme.background,
                        color: theme.textPrimary,
                        fontSize: "1rem",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "0.75rem 2rem",
                      border: "none",
                      borderRadius: "10px",
                      background: theme.accent,
                      color: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => e.target.background = "#2563eb"}
                    onMouseOut={(e) => e.target.background = theme.accent}
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <div style={{ display: "grid", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>Display Name</p>
                      <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>{displayName || "Not set"}</p>
                    </div>
                    <div>
                      <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>Phone Number</p>
                      <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>{phone || "Not provided"}</p>
                    </div>
                    <div>
                      <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>Email</p>
                      <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>{user.email}</p>
                    </div>
                    <div>
                      <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>Location</p>
                      <p style={{ color: theme.textPrimary, margin: 0, fontWeight: "500" }}>{location || "Not provided"}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ color: theme.textSecondary, margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>Bio</p>
                    <p style={{ color: theme.textPrimary, margin: 0, lineHeight: "1.6" }}>
                      {bio || "No bio provided yet. Add a bio to tell others about yourself."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h2 style={{ color: theme.textPrimary, margin: "0 0 2rem 0" }}>Account Settings</h2>
              
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: theme.textPrimary, margin: "0 0 1rem 0", fontSize: "1.1rem" }}>Notification Preferences</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0", fontWeight: "500" }}>Email Notifications</p>
                      <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.9rem" }}>Receive updates about your account</p>
                    </div>
                    <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
                      <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                      <span style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: theme.accent,
                        transition: "0.4s",
                        borderRadius: "24px"
                      }}></span>
                    </label>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0", fontWeight: "500" }}>Marketing Emails</p>
                      <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.9rem" }}>Receive offers and promotions</p>
                    </div>
                    <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
                      <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                      <span style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#ccc",
                        transition: "0.4s",
                        borderRadius: "24px"
                      }}></span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: theme.textPrimary, margin: "0 0 1rem 0", fontSize: "1.1rem" }}>Privacy & Security</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <button style={{
                    padding: "0.75rem 1rem",
                    border: `1px solid ${theme.border}`,
                    borderRadius: "10px",
                    background: "transparent",
                    color: theme.textPrimary,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }} onMouseOver={(e) => e.target.background = theme.border} onMouseOut={(e) => e.target.background = "transparent"}>
                    Change Password
                  </button>
                  <button style={{
                    padding: "0.75rem 1rem",
                    border: `1px solid ${theme.border}`,
                    borderRadius: "10px",
                    background: "transparent",
                    color: theme.textPrimary,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }} onMouseOver={(e) => e.target.background = theme.border} onMouseOut={(e) => e.target.background = "transparent"}>
                    Two-Factor Authentication
                  </button>
                  <button style={{
                    padding: "0.75rem 1rem",
                    border: `1px solid ${theme.border}`,
                    borderRadius: "10px",
                    background: "transparent",
                    color: theme.textPrimary,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }} onMouseOver={(e) => e.target.background = theme.border} onMouseOut={(e) => e.target.background = "transparent"}>
                    Download Your Data
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === "activity" && (
            <div>
              <h2 style={{ color: theme.textPrimary, margin: "0 0 2rem 0" }}>Recent Activity</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `${theme.accent}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.accent} strokeWidth="2">
                      <path d="M12 6v6l4 2"></path>
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0", fontWeight: "500" }}>You updated your profile</p>
                    <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.9rem" }}>2 hours ago</p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `${theme.success}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.success} strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0", fontWeight: "500" }}>You logged in successfully</p>
                    <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.9rem" }}>1 day ago</p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `${theme.warning}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.warning} strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: theme.textPrimary, margin: "0 0 0.25rem 0", fontWeight: "500" }}>Password change required</p>
                    <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.9rem" }}>3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};