<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Portal</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary-color: #2d5b7c;
            --secondary-color: #f8f9fa;
            --accent-color: #ff6b01;
            --text-color: #333;
            --light-text: #fff;
            --border-color: #ddd;
            --hover-color: #eaeaea;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        body {
            background-color: #f5f7f9;
            color: var(--text-color);
            line-height: 1.6;
        }

        .header {
            background-color: var(--primary-color);
            color: var(--light-text);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .logo a {
            text-decoration: none;
            color: var(--light-text);
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 1.4rem;
        }

        .logo-icon {
            font-size: 1.8rem;
            margin-right: 8px;
        }

        .logo-text {
            background: linear-gradient(90deg, #ff9e45, #ff6b01);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }

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
        }

        .mobile-menu-toggle span {
            height: 3px;
            width: 100%;
            background-color: var(--light-text);
            border-radius: 3px;
            transition: all 0.3s ease;
        }

        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        .nav-links {
            display: flex;
            align-items: center;
        }

        .nav-list {
            display: flex;
            list-style: none;
            align-items: center;
            gap: 20px;
        }

        .nav-item {
            position: relative;
        }

        .nav-item > a, .nav-item > span {
            text-decoration: none;
            color: var(--light-text);
            font-weight: 500;
            font-size: 0.95rem;
            padding: 10px 15px;
            border-radius: 4px;
            transition: background-color 0.3s;
            cursor: pointer;
            display: flex;
            align-items: center;
        }

        .nav-item > a:hover, .nav-item > span:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .dropdown-icon {
            margin-left: 5px;
            font-size: 0.8rem;
            transition: transform 0.3s;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 500px;
            background: white;
            border-radius: 8px;
            box-shadow: var(--shadow);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 100;
            padding: 20px;
            border: 1px solid var(--border-color);
            margin-top: 15px;
        }

        .dropdown-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(8px);
        }

        .dropdown-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .dropdown-section {
            display: flex;
            flex-direction: column;
        }

        .dropdown-section-title {
            font-size: 0.9rem;
            color: var(--primary-color);
            margin-bottom: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--border-color);
        }

        .dropdown-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .dropdown-list a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 0.9rem;
            padding: 6px 0;
            transition: color 0.3s;
            display: block;
        }

        .dropdown-list a:hover {
            color: var(--accent-color);
        }

        .auth-buttons {
            display: flex;
            gap: 10px;
        }

        .btn {
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
        }

        .btn-primary {
            background-color: var(--accent-color);
            color: white;
            border: none;
        }

        .btn-primary:hover {
            background-color: #e55e00;
        }

        .btn-secondary {
            background-color: transparent;
            color: white;
            border: 1px solid white;
        }

        .btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 968px) {
            .mobile-menu-toggle {
                display: flex;
            }

            .nav-links {
                position: fixed;
                top: 70px;
                left: 0;
                width: 100%;
                height: calc(100vh - 70px);
                background: var(--primary-color);
                padding: 20px;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                overflow-y: auto;
                flex-direction: column;
                align-items: flex-start;
            }

            .nav-links.nav-open {
                transform: translateX(0);
            }

            .nav-list {
                flex-direction: column;
                align-items: flex-start;
                gap: 0;
                width: 100%;
            }

            .nav-item {
                width: 100%;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .nav-item > a, .nav-item > span {
                padding: 15px 10px;
                width: 100%;
            }

            .dropdown-menu {
                position: static;
                width: 100%;
                box-shadow: none;
                margin: 0;
                display: none;
                opacity: 1;
                visibility: visible;
                transform: none;
                padding: 10px 0 10px 20px;
                border: none;
                border-left: 3px solid var(--accent-color);
                background: rgba(255, 255, 255, 0.05);
                height: 0;
                overflow: hidden;
                transition: height 0.3s ease;
            }

            .dropdown-menu.active {
                display: block;
                height: auto;
                transform: none;
                margin-top: 0;
                margin-bottom: 10px;
            }

            .dropdown-content {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .dropdown-section-title {
                color: var(--light-text);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            .dropdown-list a {
                color: var(--light-text);
                opacity: 0.9;
            }

            .dropdown-list a:hover {
                opacity: 1;
            }

            .auth-buttons {
                flex-direction: column;
                width: 100%;
                margin-top: 20px;
            }

            .btn {
                width: 100%;
                text-align: center;
            }
        }

        /* Content for demonstration */
        .content {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .content h1 {
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .property-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .property-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .property-image {
            height: 200px;
            background-color: #ddd;
            background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), 
                              linear-gradient(-45deg, #ccc 25%, transparent 25%), 
                              linear-gradient(45deg, transparent 75%, #ccc 75%), 
                              linear-gradient(-45deg, transparent 75%, #ccc 75%);
            background-size: 20px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }

        .property-details {
            padding: 20px;
        }

        .property-price {
            color: var(--primary-color);
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .property-address {
            color: #666;
            margin-bottom: 15px;
        }

        .property-features {
            display: flex;
            gap: 15px;
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <a href="#">
                    <span class="logo-icon">🏠</span>
                    <span class="logo-text">Arrow Sites</span>
                </a>
            </div>

            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-links" id="navLinks">
                <ul class="nav-list">
                    <li class="nav-item">
                        <span>
                            For Buyers
                            <i class="dropdown-icon fas fa-chevron-down"></i>
                        </span>
                        <div class="dropdown-menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Residential Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Flats</a></li>
                                        <li><a href="#">Floors</a></li>
                                        <li><a href="#">Plots</a></li>
                                        <li><a href="#">Lands</a></li>
                                        <li><a href="#">Villas</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Commercial Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Shops</a></li>
                                        <li><a href="#">Office Space</a></li>
                                        <li><a href="#">Guest House</a></li>
                                        <li><a href="#">Service Apartment</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Industrial</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Factory</a></li>
                                        <li><a href="#">Industrial Plot</a></li>
                                        <li><a href="#">Warehouse/Industry</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Warehouse</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Commercial Warehouse</a></li>
                                        <li><a href="#">Agro</a></li>
                                        <li><a href="#">Transport & Logistic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <span>
                            For Tenants
                            <i class="dropdown-icon fas fa-chevron-down"></i>
                        </span>
                        <div class="dropdown-menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Residential Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Flats</a></li>
                                        <li><a href="#">Floors</a></li>
                                        <li><a href="#">Villas</a></li>
                                        <li><a href="#">Service Apartment</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Commercial Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Office Space</a></li>
                                        <li><a href="#">Shops</a></li>
                                        <li><a href="#">Showrooms</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Resources</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Rental Guide</a></li>
                                        <li><a href="#">Lease Agreement</a></li>
                                        <li><a href="#">Tenant Rights</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <span>
                            For Owners
                            <i class="dropdown-icon fas fa-chevron-down"></i>
                        </span>
                        <div class="dropdown-menu">
                            <div class="dropdown-content">
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">List Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Post Property</a></li>
                                        <li><a href="#">Pricing Plans</a></li>
                                        <li><a href="#">Success Stories</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Manage Properties</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Manage Listings</a></li>
                                        <li><a href="#">Performance</a></li>
                                        <li><a href="#">Payments</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-section">
                                    <h4 class="dropdown-section-title">Resources</h4>
                                    <ul class="dropdown-list">
                                        <li><a href="#">Pricing Advice</a></li>
                                        <li><a href="#">Market Trends</a></li>
                                        <li><a href="#">Legal Guidelines</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item"><a href="#">Properties</a></li>
                    <li class="nav-item"><a href="#">About</a></li>
                    <li class="nav-item"><a href="#">Contact</a></li>

                    <li class="nav-item">
                        <div class="auth-buttons">
                            <a href="#" class="btn btn-primary">Register / Login</a>
                            <a href="#" class="btn btn-secondary">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="content">
        <h1>Find Your Dream Property</h1>
        <p>Browse through our extensive collection of residential and commercial properties.</p>
        
        <div class="property-cards">
            <div class="property-card">
                <div class="property-image">Property Image</div>
                <div class="property-details">
                    <div class="property-price">₹75,00,000</div>
                    <div class="property-address">3 BHK Apartment in Sector 62, Gurgaon</div>
                    <div class="property-features">
                        <span>3 BHK</span>
                        <span>1500 sq.ft.</span>
                    </div>
                </div>
            </div>
            
            <div class="property-card">
                <div class="property-image">Property Image</div>
                <div class="property-details">
                    <div class="property-price">₹1,20,00,000</div>
                    <div class="property-address">4 BHK Villa in Golf Course Road, Gurgaon</div>
                    <div class="property-features">
                        <span>4 BHK</span>
                        <span>2800 sq.ft.</span>
                    </div>
                </div>
            </div>
            
            <div class="property-card">
                <div class="property-image">Property Image</div>
                <div class="property-details">
                    <div class="property-price">₹35,00,000</div>
                    <div class="property-address">2 BHK Apartment in Sector 49, Gurgaon</div>
                    <div class="property-features">
                        <span>2 BHK</span>
                        <span>1100 sq.ft.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const navLinks = document.getElementById('navLinks');
            const dropdownItems = document.querySelectorAll('.nav-item');
            
            // Toggle mobile menu
            mobileMenuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('nav-open');
            });
            
            // Toggle dropdowns on mobile
            dropdownItems.forEach(item => {
                const toggle = item.querySelector('span');
                const dropdown = item.querySelector('.dropdown-menu');
                
                if (toggle && dropdown) {
                    toggle.addEventListener('click', function() {
                        if (window.innerWidth <= 968) {
                            dropdown.classList.toggle('active');
                            
                            // Rotate arrow icon
                            const icon = this.querySelector('.dropdown-icon');
                            if (icon) {
                                icon.classList.toggle('fa-chevron-down');
                                icon.classList.toggle('fa-chevron-up');
                            }
                        }
                    });
                }
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                if (window.innerWidth > 968) {
                    dropdownItems.forEach(item => {
                        const dropdown = item.querySelector('.dropdown-menu');
                        const toggle = item.querySelector('span');
                        
                        if (dropdown && toggle && !item.contains(event.target)) {
                            dropdown.classList.remove('active');
                        }
                    });
                }
            });
            
            // Hover functionality for desktop
            dropdownItems.forEach(item => {
                const dropdown = item.querySelector('.dropdown-menu');
                
                if (dropdown) {
                    item.addEventListener('mouseenter', function() {
                        if (window.innerWidth > 968) {
                            dropdown.classList.add('active');
                        }
                    });
                    
                    item.addEventListener('mouseleave', function() {
                        if (window.innerWidth > 968) {
                            dropdown.classList.remove('active');
                        }
                    });
                }
            });
        });
    </script>
</body>
</html>