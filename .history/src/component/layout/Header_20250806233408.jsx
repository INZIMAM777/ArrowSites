import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { debounce, throttle } from "lodash";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const menuRef = useRef();
  const hamburgerRef = useRef();
  const headerRef = useRef();
  const location = useLocation();
  const firebase = useFirebase();
  const navigate = useNavigate();

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Responsive and event handling
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) closeMenu();
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleScroll = throttle(() => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      if (scrolled) closeMenu();
    }, 100);

    const debouncedHandleResize = debounce(handleResize, 150);

    window.addEventListener("resize", debouncedHandleResize);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      debouncedHandleResize.cancel();
      handleScroll.cancel();
    };
  }, [closeMenu]);

  const getActiveStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#f72585" : "#3a0ca3",
    fontWeight: isActive ? "bold" : "600",
    padding: "0.5rem 1.25rem",
    borderRadius: "50px",
    background: isActive ? "rgba(247, 37, 133, 0.1)" : "transparent",
    transition: "all 0.3s ease",
    ":hover": {
      color: "#f72585",
      background: "rgba(247, 37, 133, 0.1)",
    },
  });

  const logOut = useCallback(() => {
    firebase.removeSign();
    navigate("/login");
    closeMenu();
  }, [firebase, navigate, closeMenu]);

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/Cards", label: "Properties" },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        ...styles.header,
        boxShadow: isScrolled 
          ? "0 4px 30px rgba(0, 0, 0, 0.1)" 
          : "0 2px 15px rgba(0, 0, 0, 0.05)",
        padding: isScrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.98)",
      }}
      role="banner"
    >
      <motion.div 
        style={styles.logo}
        variants={logoVariants}
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => setIsHoveringLogo(true)}
        onHoverEnd={() => setIsHoveringLogo(false)}
      >
        <NavLink
          to="/"
          style={styles.logoLink}
          onClick={closeMenu}
          aria-label="Home"
        >
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
          {isHoveringLogo && (
            <motion.span 
              style={styles.logoUnderline}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </NavLink>
      </motion.div>

      {/* Hamburger Menu Button - only shown on mobile */}
      {isMobile && (
        <motion.button
          ref={hamburgerRef}
          onClick={toggleMenu}
          style={styles.hamburgerButton}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? "#f72585" : "#3a0ca3",
            }}
            animate={{
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              top: isMenuOpen ? '9px' : '0'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <motion.span
            style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? "#f72585" : "#3a0ca3",
            }}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              top: '9px'
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.span
            style={{
              ...styles.hamburgerLine,
              backgroundColor: isMenuOpen ? "#f72585" : "#3a0ca3",
            }}
            animate={{
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              top: isMenuOpen ? '9px' : '18px'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </motion.button>
      )}

      {/* Desktop Navigation - hidden on mobile */}
      <nav
        style={{
          ...styles.nav,
          display: isMobile ? "none" : "flex",
        }}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            style={getActiveStyle}
          >
            {item.label}
          </NavLink>
        ))}

        <NavLink to="/AddPropr">
          <motion.button 
            style={styles.button}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Add property
          </motion.button>
        </NavLink>

        {!firebase.isLoggedIn ? (
          <NavLink to="/register">
            <motion.button 
              style={styles.secondaryButton}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Register
            </motion.button>
          </NavLink>
        ) : (
          <motion.button 
            style={styles.secondaryButton}
            onClick={logOut}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Log Out
          </motion.button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            ref={menuRef}
            style={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            id="mobile-menu"
            aria-modal="true"
            role="dialog"
            aria-label="Mobile menu"
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                style={getActiveStyle} 
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink to="/Add" onClick={closeMenu}>
              <motion.button 
                style={styles.button}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Add property
              </motion.button>
            </NavLink>

            {!firebase.isLoggedIn ? (
              <NavLink to="/register" onClick={closeMenu}>
                <motion.button 
                  style={styles.secondaryButton}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Register
                </motion.button>
              </NavLink>
            ) : (
              <motion.button 
                style={styles.secondaryButton}
                onClick={logOut}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Log Out
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    position: "relative",
    cursor: "pointer",
    zIndex: 1001,
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    padding: "0.5rem 0",
    ":focus": {
      outline: "2px dashed #f72585",
      outlineOffset: "4px",
      borderRadius: "4px",
    },
  },
  logoFirst: {
    color: "#4361ee",
    fontWeight: "800",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  },
  logoSecond: {
    color: "#f72585",
    fontWeight: "800",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  },
  logoUnderline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "3px",
    background: "linear-gradient(90deg, #4361ee, #f72585)",
    borderRadius: "3px",
    transformOrigin: "left center",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.75rem 1.75rem",
    backgroundColor: "#f72585",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: "0 4px 20px rgba(247, 37, 133, 0.3)",
    ":hover": {
      backgroundColor: "#e51775",
      boxShadow: "0 6px 25px rgba(247, 37, 133, 0.4)",
    },
    ":active": {
      transform: "translateY(0)",
    },
    ":focus": {
      outline: "2px dashed white",
      outlineOffset: "2px",
    },
  },
  secondaryButton: {
    padding: "0.75rem 1.75rem",
    backgroundColor: "transparent",
    color: "#3a0ca3",
    border: "2px solid #3a0ca3",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    ":hover": {
      backgroundColor: "rgba(58, 12, 163, 0.1)",
      borderColor: "#4a1cd3",
      color: "#4a1cd3",
    },
    ":focus": {
      outline: "2px dashed #3a0ca3",
      outlineOffset: "2px",
    },
  },
  hamburgerButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    position: "relative",
    width: "32px",
    height: "24px",
    zIndex: 1001,
    ":focus": {
      outline: "2px dashed #f72585",
      outlineOffset: "2px",
      borderRadius: "4px",
    },
  },
  hamburgerLine: {
    backgroundColor: "#3a0ca3",
    borderRadius: "3px",
    display: "block",
    height: "3px",
    left: "0",
    position: "absolute",
    transformOrigin: "center",
    width: "100%",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
    alignItems: "center",
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 999,
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(10px)",
  },
};