import { useState, useEffect } from 'react';
import { 
  FiHome, FiUsers, FiDollarSign, FiPieChart, 
  FiSettings, FiPlus, FiEdit, FiTrash2, 
  FiEye, FiSearch, FiFilter, FiDownload, 
  FiBarChart2, FiUserPlus, FiTrendingUp, 
  FiX, FiCalendar, FiMap, FiLayers, 
  FiStar, FiMessageSquare, FiChevronDown,
  FiGrid, FiBookmark, FiActivity, FiRefreshCw
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';
import { AddPropr } from './AddPropr';

export const AdminDashboard = () => {
  const { properties, getLists, removeSign, user, deleteProperty } = useFirebase();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ 
    totalProperties: 0, 
    forSale: 0, 
    forRent: 0, 
    residential: 0, 
    commercial: 0, 
    industrial: 0,
    warehouse: 0,
    farmhouse: 0,
    totalValue: 0, 
    featured: 0,
    recentViews: 1245,
    conversionRate: '4.8%'
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterTransaction, setFilterTransaction] = useState('all');
  // const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getLists();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (properties.length > 0) {
      calculateStats();
    }
  }, [properties]);

  const calculateStats = () => {
    const totalProperties = properties.length;
    const forSale = properties.filter(p => p.transaction_type === 'Sale').length;
    const forRent = properties.filter(p => p.transaction_type === 'Rent').length;
    const residential = properties.filter(p => p.type.includes('Residential')).length;
    const commercial = properties.filter(p => p.type.includes('Commercial')).length;
    const industrial = properties.filter(p => p.type.includes('Industrial')).length;
    const warehouse = properties.filter(p => p.type.includes('Warehouse')).length;
    const farmhouse = properties.filter(p => p.type.includes('Farm')).length;
    const featured = properties.filter(p => p.featured).length;
    
    // Calculate total value (simplified for demo)
    const totalValue = properties.reduce((sum, property) => {
      let value = parseFloat(property.price);
      if (property.price_units === 'crore') value *= 10000000;
      else if (property.price_units === 'lakh') value *= 100000;
      return sum + value;
    }, 0);
    
    // Format total value for display
    const formattedValue = totalValue >= 10000000 
      ? `${(totalValue / 10000000).toFixed(1)} Cr` 
      : `${(totalValue / 100000).toFixed(1)} Lakh`;
    
    setStats({
      totalProperties,
      forSale,
      forRent,
      residential,
      commercial,
      industrial,
      warehouse,
      farmhouse,
      totalValue: formattedValue,
      featured,
      recentViews: 1245,
      conversionRate: '4.8%'
    });
  };

  const filteredProperties = properties.filter(property => {
  const matchesSearch = 
    (property?.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
    (property?.address?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
    (property?.id?.toLowerCase() || '').includes(searchTerm.toLowerCase());
  
  const matchesType = filterType === 'all' || (property?.type || '').includes(filterType);
  const matchesTransaction = filterTransaction === 'all' || property?.transaction_type === filterTransaction;
  
  return matchesSearch && matchesType && matchesTransaction;
});


  const handleDeleteProperty = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      await deleteProperty(id);
    }
  };

  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setShowAddProperty(true);
  };

  const handleViewDetails = (property) => {
    setPropertyDetails(property);
    setShowDetails(true);
  };

  const toggleFeatured = async (property) => {
    // Implement featured toggle functionality
    console.log('Toggle featured:', property.id);
  };

  const StatCard = ({ title, value, icon, color, subtitle, trend }) => (
    <div className="stat-card" style={{ '--color': color }}>
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-content">
        <h3>{value}</h3>
        <p>{title}</p>
        {subtitle && <small>{subtitle}</small>}
      </div>
      {trend && (
        <div className={`stat-trend ${trend.value > 0 ? 'up' : 'down'}`}>
          {trend.value > 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
        </div>
      )}
    </div>
  );

  const PropertyDetailsModal = ({ property, onClose }) => {
    if (!property) return null;
    
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Property Details</h2>
            <button onClick={onClose} className="close-btn">
              <FiX />
            </button>
          </div>
          <div className="modal-body">
            <div className="property-image">
              <img src={property.image} alt={property.title} />
            </div>
            <div className="property-details-grid">
              <div className="detail-group">
                <h3>{property.title}</h3>
                <p className="address">{property.address}</p>
              </div>
              
              <div className="detail-group">
                <h4>Basic Information</h4>
                <div className="detail-row">
                  <span className="label">Property ID:</span>
                  <span className="value">{property.id}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Type:</span>
                  <span className="value">{property.type}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Transaction:</span>
                  <span className="value">{property.transaction_type}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Price:</span>
                  <span className="value">{property.price} {property.price_units}</span>
                </div>
              </div>
              
              <div className="detail-group">
                <h4>Specifications</h4>
                <div className="detail-row">
                  <span className="label">Area:</span>
                  <span className="value">{property.area_sqft} sq.ft.</span>
                </div>
                <div className="detail-row">
                  <span className="label">Bedrooms:</span>
                  <span className="value">{property.bedrooms}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Bathrooms:</span>
                  <span className="value">{property.bathrooms}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Year Built:</span>
                  <span className="value">{property.year_built}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Furnishing:</span>
                  <span className="value">{property.furnishing}</span>
                </div>
              </div>
              
              <div className="detail-group">
                <h4>Amenities</h4>
                <div className="amenities-list">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
              </div>
              
              <div className="detail-group full-width">
                <h4>Description</h4>
                <p>{property.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <div className="dashboard-header">
              <h2>Dashboard Overview</h2>
              <div className="header-actions">
                <button className="btn btn-secondary">
                  <FiDownload /> Export Report
                </button>
                <button className="btn btn-primary" onClick={() => setShowAddProperty(true)}>
                  <FiPlus /> Add Property
                </button>
              </div>
            </div>
            
            <div className="stats-grid">
              <StatCard 
                title="Total Properties" 
                value={stats.totalProperties} 
                icon={<FiHome />} 
                color="#6366F1" 
                trend={{ value: 12.5 }}
              />
              <StatCard 
                title="Total Value" 
                value={stats.totalValue} 
                icon={<FiDollarSign />} 
                color="#10B981" 
                trend={{ value: 8.2 }}
              />
              <StatCard 
                title="For Sale" 
                value={stats.forSale} 
                icon={<FiTrendingUp />} 
                color="#F59E0B" 
              />
              <StatCard 
                title="For Rent" 
                value={stats.forRent} 
                icon={<FiActivity />} 
                color="#EF4444" 
              />
              <StatCard 
                title="Featured" 
                value={stats.featured} 
                icon={<FiStar />} 
                color="#8B5CF6" 
              />
              <StatCard 
                title="Conversion Rate" 
                value={stats.conversionRate} 
                icon={<FiBarChart2 />} 
                color="#3B82F6" 
                trend={{ value: 2.3 }}
              />
            </div>
            
            <div className="charts-section">
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Property Distribution</h3>
                  <FiChevronDown />
                </div>
                <div className="property-distribution">
                  <div className="distribution-item">
                    <div className="label">
                      <span className="color-indicator" style={{backgroundColor: '#6366F1'}}></span>
                      Residential
                    </div>
                    <div className="value">{stats.residential}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="label">
                      <span className="color-indicator" style={{backgroundColor: '#10B981'}}></span>
                      Commercial
                    </div>
                    <div className="value">{stats.commercial}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="label">
                      <span className="color-indicator" style={{backgroundColor: '#F59E0B'}}></span>
                      Industrial
                    </div>
                    <div className="value">{stats.industrial}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="label">
                      <span className="color-indicator" style={{backgroundColor: '#8B5CF6'}}></span>
                      Warehouse
                    </div>
                    <div className="value">{stats.warehouse}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="label">
                      <span className="color-indicator" style={{backgroundColor: '#3B82F6'}}></span>
                      Farm House
                    </div>
                    <div className="value">{stats.farmhouse}</div>
                  </div>
                </div>
              </div>
              
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Recent Activity</h3>
                  <FiChevronDown />
                </div>
                <div className="recent-activity">
                  <div className="activity-item">
                    <div className="activity-icon success">
                      <FiPlus />
                    </div>
                    <div className="activity-content">
                      <p>New property added</p>
                      <small>2 hours ago</small>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon primary">
                      <FiUserPlus />
                    </div>
                    <div className="activity-content">
                      <p>New user registration</p>
                      <small>5 hours ago</small>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon warning">
                      <FiEdit />
                    </div>
                    <div className="activity-content">
                      <p>Property details updated</p>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="recent-properties">
              <div className="section-header">
                <h3>Recent Properties</h3>
                <button className="btn btn-text">View All</button>
              </div>
              <div className="properties-grid">
                {properties.slice(0, 4).map(property => (
                  <div key={property.id} className="property-card">
                    <div className="property-image">
                      <img src={property.image} alt={property.title} />
                      <button 
                        className={`featured-btn ${property.featured ? 'active' : ''}`}
                        onClick={() => toggleFeatured(property)}
                      >
                        <FiStar />
                      </button>
                    </div>
                    <div className="property-content">
                      <h4>{property.title}</h4>
                      <p className="property-address">{property.address}</p>
                      <div className="property-details">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.area_sqft} sq.ft.</span>
                      </div>
                      <div className="property-price">
                        ₹{property.price} {property.price_units}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      
      case 'properties':
        return (
          <>
            <div className="section-header">
              <h2>Property Management</h2>
              <button className="btn btn-primary" onClick={() => setShowAddProperty(true)}>
                <FiPlus /> Add Property
              </button>
            </div>
            
            <div className="filter-bar">
              <div className="search-box">
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search properties..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Farm">Farm House</option>
              </select>
              
              <select value={filterTransaction} onChange={(e) => setFilterTransaction(e.target.value)}>
                <option value="all">All Transactions</option>
                <option value="Sale">For Sale</option>
                <option value="Rent">For Rent</option>
              </select>
              
              <button className="btn btn-secondary">
                <FiFilter /> More Filters
              </button>
            </div>
            
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Transaction</th>
                    <th>Price</th>
                    <th>Area</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProperties.map(property => (
                    <tr key={property.id}>
                      <td>
                        <div className="property-info">
                          <img src={property.image} alt={property.title} />
                          <div>
                            <div className="property-title">{property.title}</div>
                            <div className="property-id">{property.id}</div>
                          </div>
                        </div>
                      </td>
                      <td>{property.type}</td>
                      <td>
                        <span className={`badge ${property.transaction_type === 'Sale' ? 'badge-success' : 'badge-info'}`}>
                          {property.transaction_type}
                        </span>
                      </td>
                      <td>₹{property.price} {property.price_units}</td>
                      <td>{property.area_sqft} sq.ft.</td>
                      <td>
                        <span className="badge badge-active">Active</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="btn-icon" 
                            onClick={() => handleViewDetails(property)}
                            title="View Details"
                          >
                            <FiEye />
                          </button>
                          <button 
                            className="btn-icon" 
                            onClick={() => handleEditProperty(property)}
                            title="Edit"
                          >
                            <FiEdit />
                          </button>
                          <button 
                            className="btn-icon danger" 
                            onClick={() => handleDeleteProperty(property.id)}
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredProperties.length === 0 && (
                <div className="empty-state">
                  <FiGrid />
                  <h3>No properties found</h3>
                  <p>Try adjusting your search or filter to find what you're looking for.</p>
                  <button className="btn btn-primary" onClick={() => setShowAddProperty(true)}>
                    <FiPlus /> Add New Property
                  </button>
                </div>
              )}
            </div>
          </>
        );
      
      case 'analytics':
        return (
          <div className="analytics-tab">
            <h2>Analytics & Reports</h2>
            <div className="coming-soon">
              <FiBarChart2 />
              <h3>Analytics Dashboard Coming Soon</h3>
              <p>We're working on detailed analytics and reporting features.</p>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="settings-tab">
            <h2>Settings</h2>
            <div className="coming-soon">
              <FiSettings />
              <h3>Settings Panel Coming Soon</h3>
              <p>We're working on comprehensive settings and configuration options.</p>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab</div>;
    }
  };

  if (showAddProperty) {
    return (
      <AddPropr  
        onClose={() => {
          setShowAddProperty(false);
          setSelectedProperty(null);
        }} 
        editData={selectedProperty} 
      />
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>
          <FiHome /> Property Admin Dashboard
        </h1>
        <div className="header-actions">
          <div className="user-info">
            <div className="user-avatar">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <span>{user?.email}</span>
          </div>
          <button className="btn btn-secondary" onClick={removeSign}>
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FiPieChart /> Dashboard
            </div>
            <div 
              className={`nav-item ${activeTab === 'properties' ? 'active' : ''}`}
              onClick={() => setActiveTab('properties')}
            >
              <FiHome /> Properties
            </div>
            <div 
              className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <FiBarChart2 /> Analytics
            </div>
            <div 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FiSettings /> Settings
            </div>
          </nav>
          
          <div className="sidebar-footer">
            <div className="help-section">
              <h4>Need help?</h4>
              <p>Check our documentation or contact support</p>
              <button className="btn btn-text">Get Help</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {loading ? (
            <div className="loading-state">
              <FiRefreshCw className="spinner" />
              <p>Loading properties...</p>
            </div>
          ) : (
            renderTabContent()
          )}
        </main>
      </div>

      {/* Property Details Modal */}
      {showDetails && (
        <PropertyDetailsModal 
          property={propertyDetails} 
          onClose={() => setShowDetails(false)} 
        />
      )}

      <style jsx>{`
        :root {
          --primary: #6366F1;
          --primary-light: #C7D2FE;
          --secondary: #10B981;
          --danger: #EF4444;
          --warning: #F59E0B;
          --info: #3B82F6;
          --dark: #1F2937;
          --light: #F9FAFB;
          --gray: #6B7280;
          --gray-light: #E5E7EB;
          --border-radius: 12px;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #F7FAFC;
          color: var(--dark);
        }
        
        .admin-dashboard {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        /* Header Styles */
        .dashboard-header {
          background-color: white;
          padding: 1rem 2rem;
          box-shadow: var(--shadow);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .dashboard-header h1 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        /* Main Layout */
        .dashboard-container {
          display: flex;
          flex: 1;
        }
        
        /* Sidebar Styles */
        .sidebar {
          width: 280px;
          background-color: white;
          height: calc(100vh - 80px);
          position: sticky;
          top: 80px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .sidebar-nav {
          padding: 1rem 0;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          color: var(--gray);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          border-right: 4px solid transparent;
        }
        
        .nav-item:hover {
          background-color: var(--light);
          color: var(--dark);
        }
        
        .nav-item.active {
          background-color: #EBF8FF;
          color: var(--primary);
          border-right-color: var(--primary);
        }
        
        .sidebar-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--gray-light);
        }
        
        .help-section h4 {
          margin-bottom: 0.5rem;
        }
        
        .help-section p {
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        
        /* Main Content */
        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .section-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
        }
        
        /* Button Styles */
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
          font-size: 0.95rem;
        }
        
        .btn-primary {
          background-color: var(--primary);
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #4F46E5;
        }
        
        .btn-secondary {
          background-color: var(--gray-light);
          color: var(--dark);
        }
        
        .btn-secondary:hover {
          background-color: #D1D5DB;
        }
        
        .btn-text {
          background: none;
          color: var(--primary);
          padding: 0.5rem 1rem;
        }
        
        .btn-text:hover {
          background-color: var(--primary-light);
        }
        
        .btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: none;
          background-color: var(--gray-light);
          color: var(--dark);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        
        .btn-icon:hover {
          background-color: #D1D5DB;
        }
        
        .btn-icon.danger {
          color: var(--danger);
        }
        
        .btn-icon.danger:hover {
          background-color: #FEE2E2;
        }
        
        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background-color: var(--color);
        }
        
        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background-color: color-mix(in srgb, var(--color) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color);
          flex-shrink: 0;
          font-size: 1.5rem;
        }
        
        .stat-content {
          flex: 1;
        }
        
        .stat-content h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .stat-content p {
          margin: 0;
          color: var(--gray);
          font-weight: 500;
        }
        
        .stat-content small {
          color: #A0AEC0;
        }
        
        .stat-trend {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .stat-trend.up {
          color: var(--secondary);
        }
        
        .stat-trend.down {
          color: var(--danger);
        }
        
        /* Charts Section */
        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .chart-card {
          background-color: white;
          border-radius: var(--border-radius);
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .chart-header h3 {
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .property-distribution {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .distribution-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .distribution-item .label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .color-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .distribution-item .value {
          font-weight: 600;
        }
        
        .recent-activity {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-icon.success {
          background-color: #D1FAE5;
          color: var(--secondary);
        }
        
        .activity-icon.primary {
          background-color: #DBEAFE;
          color: var(--primary);
        }
        
        .activity-icon.warning {
          background-color: #FEF3C7;
          color: var(--warning);
        }
        
        .activity-content p {
          margin: 0;
          font-weight: 500;
        }
        
        .activity-content small {
          color: var(--gray);
        }
        
        /* Properties Grid */
        .recent-properties {
          margin-bottom: 2rem;
        }
        
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .property-card {
          background-color: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .property-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .property-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .property-card:hover .property-image img {
          transform: scale(1.05);
        }
        
        .featured-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background-color: white;
          color: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: var(--transition);
        }
        
        .featured-btn.active {
          color: var(--warning);
        }
        
        .featured-btn:hover {
          background-color: var(--light);
        }
        
        .property-content {
          padding: 1.5rem;
        }
        
        .property-content h4 {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .property-address {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        
        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: var(--gray);
        }
        
        .property-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
        }
        
        /* Filter Bar */
        .filter-bar {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          min-width: 300px;
        }
        
        .search-box svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray);
        }
        
        .search-box input {
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid var(--gray-light);
          border-radius: 8px;
          width: 100%;
          font-size: 0.95rem;
        }
        
        .filter-bar select {
          padding: 0.75rem 1rem;
          border: 1px solid var(--gray-light);
          border-radius: 8px;
          background-color: white;
          font-size: 0.95rem;
          min-width: 150px;
        }
        
        /* Table Styles */
        .table-container {
          background-color: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          background-color: #F7FAFC;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: var(--gray);
          border-bottom: 1px solid var(--gray-light);
        }
        
        .data-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--gray-light);
          color: var(--dark);
        }
        
        .data-table tr:last-child td {
          border-bottom: none;
        }
        
        .property-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .property-info img {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }
        
        .property-title {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .property-id {
          font-size: 0.875rem;
          color: var(--gray);
        }
        
        .badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .badge-success {
          background-color: #D1FAE5;
          color: var(--secondary);
        }
        
        .badge-info {
          background-color: #DBEAFE;
          color: var(--info);
        }
        
        .badge-active {
          background-color: #D1FAE5;
          color: var(--secondary);
        }
        
        .action-buttons {
          display: flex;
          gap: 0.5rem;
        }
        
        /* Empty State */
        .empty-state {
          padding: 3rem;
          text-align: center;
          color: var(--gray);
        }
        
        .empty-state svg {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .empty-state h3 {
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        /* Coming Soon */
        .coming-soon {
          padding: 3rem;
          text-align: center;
          color: var(--gray);
        }
        
        .coming-soon svg {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .coming-soon h3 {
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        /* Loading State */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: var(--gray);
        }
        
        .spinner {
          animation: spin 1s linear infinite;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        
        .modal-content {
          background-color: white;
          border-radius: var(--border-radius);
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--gray-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header h2 {
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          border-radius: 4px;
        }
        
        .close-btn:hover {
          background-color: var(--gray-light);
        }
        
        .modal-body {
          padding: 1.5rem;
        }
        
        .property-image {
          height: 300px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        
        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .property-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .detail-group {
          margin-bottom: 1.5rem;
        }
        
        .detail-group h4 {
          margin-bottom: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--dark);
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--gray-light);
        }
        
        .detail-row .label {
          color: var(--gray);
        }
        
        .detail-row .value {
          font-weight: 500;
        }
        
        .amenities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .amenity-tag {
          padding: 0.25rem 0.75rem;
          background-color: var(--gray-light);
          border-radius: 20px;
          font-size: 0.875rem;
        }
        
        .full-width {
          grid-column: 1 / -1;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .sidebar {
            width: 240px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          
          .charts-section {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-container {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            height: auto;
            position: static;
          }
          
          .main-content {
            margin-left: 0;
            padding: 1rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-bar {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-box {
            min-width: auto;
          }
          
          .property-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};