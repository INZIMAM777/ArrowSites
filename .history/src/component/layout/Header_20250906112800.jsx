<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Housing - Modern Real Estate Platform</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            /* Color palette based on the analysis */
            --primary-blue: #0061ff;
            --primary-dark-blue: #004ac7;
            --text-dark: #2d3748;
            --text-light: #f8fafc;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --radius: 8px;
            --radius-lg: 12px;
            --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
            background-color: #f9fafb;
        }

        .header {
            background: #fff;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            height: 80px;
        }

        .logo a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.5rem;
            color: var(--primary-blue);
        }

        .logo-icon {
            margin-right: 0.5rem;
            font-size: 1.8rem;
        }

        .logo-text {
            color: var(--primary-blue);
        }

        .nav-links ul {
            display: flex;
            list-style: none;
            align-items: center;
            gap: 1.5rem;
            margin: 0;
            padding: 0;
        }

        .nav-links a,
        .nav-links span {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.95rem;
            transition: var(--transition);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            position: relative;
        }

        .nav-links span {
            user-select: none;
            outline: none;
        }

        .nav-links a:hover,
        .nav-links span:hover,
        .nav-links a:focus,
        .nav-links span:focus {
            color: var(--primary-blue);
            outline: none;
            background: none;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-blue);
            transition: var(--transition);
        }

        .nav-links a:hover::after,
        .nav-links a:focus::after,
        .nav-links a.active::after {
            width: 100%;
        }

        .nav-links a.active {
            color: var(--primary-blue);
            font-weight: 600;
        }

        /* Dropdown styles */
        .dropdown {
            position: relative;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 480px;
            background: #fff;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: var(--transition);
            z-index: 100;
            padding: 1.5rem;
            border: 1px solid var(--gray-200);
        }

        .dropdown.active .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(8px);
        }

        .dropdown-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .dropdown-section {
            display: flex;
            flex-direction: column;
        }

        .dropdown-section h4 {
            font-size: 0.85rem;
            color: var(--primary-blue);
            margin-bottom: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--gray-200);
        }

        .dropdown-section ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
        }

        .dropdown-section a,
        .dropdown-section .dropdown-link {
            padding: 0.5rem 0;
            font-size: 0.9rem;
            color: var(--text-dark);
            transition: var(--transition);
            border-radius: 4px;
            text-decoration: none;
            background: none;
            border: none;
            text-align: left;
            width: 100%;
            cursor: pointer;
        }

        .dropdown-section a:hover,
        .dropdown-section a:focus,
        .dropdown-section .dropdown-link:hover,
        .dropdown-section .dropdown-link:focus {
            color: var(--primary-blue);
            padding-left: 0.5rem;
            background: var(--gray-100);
        }

        /* Button styles */
        .btn {
            padding: 0.6rem 1.25rem;
            border-radius: var(--radius);
            font-weight: 600;
            font-size: 0.9rem;
            transition: var(--transition);
            cursor: pointer;
            border: none;
            outline: none;
        }

        .btn:focus {
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
        }

        .btn-primary {
            background: var(--primary-blue);
            color: white;
        }

        .btn-primary:hover,
        .btn-primary:focus {
            background: var(--primary-dark-blue);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-secondary {
            background: var(--gray-600);
            color: white;
        }

        .btn-secondary:hover,
        .btn-secondary:focus {
            background: var(--gray-700);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        /* Mobile menu toggle */
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 21px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
            outline: none;
            position: relative;
        }

        .mobile-menu-toggle:focus {
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
            border-radius: 4px;
        }

        .mobile-menu-toggle span {
            width: 100%;
            height: 3px;
            background: var(--primary-blue);
            border-radius: 3px;
            transition: var(--transition);
            transform-origin: left;
        }

        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg);
        }

        /* Hero section for demo purposes */
        .hero {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1.5rem;
            text-align: center;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .hero p {
            font-size: 1.125rem;
            color: var(--gray-600);
            max-width: 700px;
            margin: 0 auto 2rem;
        }

        /* Tablet styles (768px - 1024px) */
        @media (max-width: 1024px) {
            .header-container {
                padding: 0 1.25rem;
            }
            
            .nav-links ul {
                gap: 1.25rem;
            }
            
            .dropdown-menu {
                width: 420px;
            }
            
            .dropdown-content {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Mobile styles (below 768px) */
        @media (max-width: 768px) {
            .header-container {
                padding: 0 1rem;
            }
            
            .mobile-menu-toggle {
                display: flex;
            }
            
            .nav-links {
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                height: calc(100vh - 80px);
                background: white;
                padding: 1.5rem;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                overflow-y: auto;
            }
            
            .nav-links.nav-open {
                transform: translateX(0);
            }
            
            .nav-links ul {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;
            }
            
            .dropdown-menu {
                position: static;
                width: 100%;
                box-shadow: none;
                margin-top: 0.75rem;
                margin-left: 1rem;
                display: none;
                opacity: 1;
                visibility: visible;
                transform: none;
                padding: 1rem;
                border: none;
                border-left: 3px solid var(--primary-blue);
            }
            
            .dropdown.active .dropdown-menu {
                display: block;
                transform: none;
            }
            
            .dropdown-content {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .auth-link {
                margin-top: 1.5rem;
            }
            
            .nav-links a::after {
                display: none;
            }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
            .logo-text {
                font-size: 1.3rem;
            }
            
            .nav-links {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <a href="#">
                    <span class="logo-icon">🏠</span>
                    <span class="logo-text">Housing</span>
                </a>
            </div>

            <!-- Mobile menu button -->
            <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle navigation menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-links" id="navLinks" aria-label="Main navigation">
                <ul>
                    <!-- Buyers -->
                    <li class="dropdown" id="buyersDropdown">
                        <span tabindex="0" aria-haspopup="true">
                            For Buyers 
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4>Residential Properties</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">Flats</a></li>
                                        <li><a href="#" class="dropdown-link">Houses</a></li>
                                        <li><a href="#" class="dropdown-link">Villas</a></li>
                                        <li><a href="#" class="dropdown-link">Apartments</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4>Commercial Properties</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">Office Spaces</a></li>
                                        <li><a href="#" class="dropdown-link">Shops</a></li>
                                        <li><a href="#" class="dropdown-link">Warehouses</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Sellers -->
                    <li class="dropdown" id="sellersDropdown">
                        <span tabindex="0" aria-haspopup="true">
                            For Sellers
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4>Selling Options</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">List Your Property</a></li>
                                        <li><a href="#" class="dropdown-link">Pricing Plans</a></li>
                                        <li><a href="#" class="dropdown-link">Home Evaluation</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4>Resources</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">Selling Guide</a></li>
                                        <li><a href="#" class="dropdown-link">Marketing Services</a></li>
                                        <li><a href="#" class="dropdown-link">Success Stories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Resources -->
                    <li class="dropdown" id="resourcesDropdown">
                        <span tabindex="0" aria-haspopup="true">
                            Resources
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4>Learning Center</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">Buying Guide</a></li>
                                        <li><a href="#" class="dropdown-link">Selling Guide</a></li>
                                        <li><a href="#" class="dropdown-link">Market Trends</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4>Tools</h4>
                                    <ul role="group">
                                        <li><a href="#" class="dropdown-link">Mortgage Calculator</a></li>
                                        <li><a href="#" class="dropdown-link">Affordability Calculator</a></li>
                                        <li><a href="#" class="dropdown-link">Area Guides</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Static Links -->
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>

                    <!-- Auth Links -->
                    <li class="auth-link">
                        <a href="#" class="btn btn-primary">Sign Up</a>
                    </li>
                    <li class="auth-link">
                        <a href="#" class="btn btn-secondary">Log In</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <h1>Find Your Dream Home</h1>
        <p>Browse thousands of properties for sale and rent across the country. Our modern platform makes it easy to find your perfect home.</p>
        <a href="#" class="btn btn-primary">Start Searching</a>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const navLinks = document.getElementById('navLinks');
            const dropdowns = document.querySelectorAll('.dropdown');
            
            // Toggle mobile menu
            mobileMenuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('nav-open');
            });
            
            // Handle dropdowns on desktop
            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('span');
                
                // Click for mobile and keyboard
                toggle.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        dropdown.classList.toggle('active');
                    }
                });
                
                // Hover for desktop
                dropdown.addEventListener('mouseenter', function() {
                    if (window.innerWidth > 768) {
                        dropdown.classList.add('active');
                    }
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    if (window.innerWidth > 768) {
                        dropdown.classList.remove('active');
                    }
                });
                
                // Keyboard navigation
                toggle.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) return;
                
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });
    </script>
</body>
</html>