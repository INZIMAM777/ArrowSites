import { useState, useEffect } from 'react';
import { 
  FiHome, FiUsers, FiDollarSign, FiPieChart, 
  FiSettings, FiPlus, FiEdit, FiTrash2, 
  FiEye, FiSearch, FiFilter, FiDownload,
  FiBarChart2, FiUserPlus, FiTrendingUp, FiX,
  FiCalendar, FiMap, FiLayers, FiStar, FiMessageSquare
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';
import { AddPropr } from './AddPropy';

export const AdminDashboard = () => {
  const { properties, getLists, removeSign, user, deleteProperty } = useFirebase();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalProperties: 0,
    forSale: 0,
    forRent: 0,
    residential: 0,
    commercial: 0,
    totalValue: 0,
    featured: 0
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterTransaction, setFilterTransaction] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    getLists();
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
    const featured = properties.filter(p => p.featured).length;
    
    const totalValue = properties.reduce((sum, property) => {
      let value = parseFloat(property.price) || 0;
      if (property.price_units === 'crore') value *= 10000000;
      if (property.price_units === 'lakh') value *= 100000;
      return sum + value;
    }, 0);

    setStats({
      totalProperties,
      forSale,
      forRent,
      residential,
      commercial,
      featured,
      totalValue: (totalValue / 10000000).toFixed(2) // in crores
    });
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesTransaction = filterTransaction === 'all' || property.transaction_type === filterTransaction;
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'featured' && property.featured) ||
                         (filterStatus === 'active' && property.status !== 'inactive');
    
    return matchesSearch && matchesType && matchesTransaction && matchesStatus;
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
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        backgroundColor: color + '20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        flexShrink: 0
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>{value}</h3>
        <p style={{ margin: 0, color: '#718096', fontWeight: '500' }}>{title}</p>
        {subtitle && <small style={{ color: '#a0aec0' }}>{subtitle}</small>}
      </div>
      {trend && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: trend.value > 0 ? '#38a169' : '#e53e3e',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          {trend.value > 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
        </div>
      )}
    </div>
  );

  const PropertyDetailsModal = ({ property, onClose }) => {
    if (!property) return null;
    
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#718096'
            }}
          >
            <FiX />
          </button>
          
          <h2 style={{ marginTop: 0, color: '#2d3748' }}>Property Details</h2>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: '#3182ce' }}>Basic Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <strong>Property ID:</strong>
                  <p>{property.id}</p>
                </div>
                <div>
                  <strong>Title:</strong>
                  <p>{property.title}</p>
                </div>
                <div>
                  <strong>Type:</strong>
                  <p>{property.type}</p>
                </div>
                <div>
                  <strong>Transaction:</strong>
                  <p>{property.transaction_type}</p>
                </div>
              </div>
            </div>
            
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: '#3182ce' }}>Pricing</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <strong>Price:</strong>
                  <p>₹{property.price} {property.price_units}</p>
                </div>
                <div>
                  <strong>Area:</strong>
                  <p>{property.area_sqft} sqft</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#3182ce' }}>Location</h3>
            <p>{property.address}</p>
          </div>
          
          {property.description && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#3182ce' }}>Description</h3>
              <p>{property.description}</p>
            </div>
          )}
          
          {property.amenities && property.amenities.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#3182ce' }}>Amenities</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {property.amenities.map(amenity => (
                  <span key={amenity} style={{
                    backgroundColor: '#ebf8ff',
                    color: '#3182ce',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button 
              style={{ 
                padding: '0.5rem 1rem', 
                borderRadius: '6px', 
                border: 'none', 
                backgroundColor: '#3182ce', 
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onClick={() => {
                onClose();
                handleEditProperty(property);
              }}
            >
              <FiEdit /> Edit Property
            </button>
          </div>
        </div>
      </div>
    );
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      fontFamily: "'Inter', sans-serif"
    },
    header: {
      backgroundColor: 'white',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    sidebar: {
      width: '280px',
      backgroundColor: 'white',
      height: 'calc(100vh - 80px)',
      position: 'fixed',
      boxShadow: '2px 0 4px rgba(0, 0, 0, 0.05)',
      overflowY: 'auto'
    },
    content: {
      marginLeft: '280px',
      padding: '2rem',
      minHeight: 'calc(100vh - 80px)'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem 1.5rem',
      color: '#4a5568',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderRight: '4px solid transparent'
    },
    navItemActive: {
      backgroundColor: '#ebf8ff',
      color: '#3182ce',
      borderRight: '4px solid #3182ce'
    },
    grid: {
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    tableHeader: {
      backgroundColor: '#f7fafc',
      padding: '1rem',
      textAlign: 'left',
      fontWeight: '600',
      color: '#4a5568',
      borderBottom: '1px solid #e2e8f0'
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #e2e8f0',
      color: '#2d3748'
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease'
    },
    buttonPrimary: {
      backgroundColor: '#3182ce',
      color: 'white'
    },
    buttonSecondary: {
      backgroundColor: '#e2e8f0',
      color: '#4a5568'
    },
    buttonDanger: {
      backgroundColor: '#e53e3e',
      color: 'white'
    },
    buttonSuccess: {
      backgroundColor: '#38a169',
      color: 'white'
    },
    buttonWarning: {
      backgroundColor: '#d69e2e',
      color: 'white'
    },
    filterBar: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    searchInput: {
      padding: '0.75rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      minWidth: '300px',
      fontSize: '0.95rem',
      flex: 1
    },
    select: {
      padding: '0.75rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white',
      fontSize: '0.95rem',
      minWidth: '150px'
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem'
    },
    actionButton: {
      padding: '0.4rem',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={{ margin: 0, color: '#2d3748', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FiHome /> Property Admin Dashboard
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#3182ce',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600'
            }}>
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <span style={{ color: '#4a5568' }}>{user?.email}</span>
          </div>
          <button 
            onClick={removeSign}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <nav style={styles.sidebar}>
          <div style={{ padding: '1.5rem 0' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <FiPieChart /> },
              { id: 'properties', label: 'Properties', icon: <FiHome /> },
              { id: 'analytics', label: 'Analytics', icon: <FiBarChart2 /> },
              { id: 'users', label: 'Users', icon: <FiUsers /> },
              { id: 'settings', label: 'Settings', icon: <FiSettings /> }
            ].map(item => (
              <div
                key={item.id}
                style={{
                  ...styles.navItem,
                  ...(activeTab === item.id && styles.navItemActive)
                }}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main style={styles.content}>
          {activeTab === 'dashboard' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ margin: 0, color: '#2d3748' }}>Dashboard Overview</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    style={{ ...styles.button, ...styles.buttonSecondary }}
                  >
                    <FiDownload /> Export Report
                  </button>
                  <button 
                    style={{ ...styles.button, ...styles.buttonPrimary }}
                    onClick={() => setShowAddProperty(true)}
                  >
                    <FiPlus /> Add New Property
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div style={styles.grid}>
                <StatCard
                  title="Total Properties"
                  value={stats.totalProperties}
                  icon={<FiHome size={24} />}
                  color="#3182ce"
                  trend={{ value: 12.5 }}
                />
                <StatCard
                  title="For Sale"
                  value={stats.forSale}
                  icon={<FiDollarSign size={24} />}
                  color="#38a169"
                />
                <StatCard
                  title="For Rent"
                  value={stats.forRent}
                  icon={<FiTrendingUp size={24} />}
                  color="#d69e2e"
                />
                <StatCard
                  title="Featured"
                  value={stats.featured}
                  icon={<FiStar size={24} />}
                  color="#805ad5"
                />
                <StatCard
                  title="Residential"
                  value={stats.residential}
                  icon={<FiLayers size={24} />}
                  color="#3182ce"
                />
                <StatCard
                  title="Commercial"
                  value={stats.commercial}
                  icon={<FiMap size={24} />}
                  color="#e53e3e"
                />
                <StatCard
                  title="Total Value"
                  value={`₹${stats.totalValue} Cr`}
                  icon={<FiPieChart size={24} />}
                  color="#38a169"
                  subtitle="Estimated market value"
                />
              </div>

              {/* Recent Properties */}
              <div style={{ ...styles.card, marginTop: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0, color: '#2d3748' }}>Recent Properties</h3>
                  <button style={{ ...styles.button, ...styles.buttonSecondary, padding: '0.5rem' }}>
                    View All
                  </button>
                </div>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>ID</th>
                      <th style={styles.tableHeader}>Title</th>
                      <th style={styles.tableHeader}>Type</th>
                      <th style={styles.tableHeader}>Price</th>
                      <th style={styles.tableHeader}>Status</th>
                      <th style={styles.tableHeader}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.slice(0, 5).map(property => (
                      <tr key={property.id}>
                        <td style={styles.tableCell}>{property.id}</td>
                        <td style={styles.tableCell}>{property.title}</td>
                        <td style={styles.tableCell}>{property.type}</td>
                        <td style={styles.tableCell}>
                          ₹{property.price} {property.price_units}
                        </td>
                        <td style={styles.tableCell}>
                          <span style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            backgroundColor: property.transaction_type === 'Sale' ? '#c6f6d5' : '#bee3f8',
                            color: property.transaction_type === 'Sale' ? '#22543d' : '#2c5282'
                          }}>
                            {property.transaction_type}
                          </span>
                        </td>
                        <td style={styles.tableCell}>
                          <div style={styles.actionButtons}>
                            <button 
                              style={{ ...styles.actionButton, backgroundColor: '#ebf8ff', color: '#3182ce' }}
                              onClick={() => handleViewDetails(property)}
                            >
                              <FiEye size={14} />
                            </button>
                            <button 
                              style={{ ...styles.actionButton, backgroundColor: '#f0fff4', color: '#38a169' }}
                              onClick={() => handleEditProperty(property)}
                            >
                              <FiEdit size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'properties' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0, color: '#2d3748' }}>Property Management</h2>
                <button 
                  style={{ ...styles.button, ...styles.buttonPrimary }}
                  onClick={() => setShowAddProperty(true)}
                >
                  <FiPlus /> Add New Property
                </button>
              </div>

              {/* Filters */}
              <div style={styles.filterBar}>
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
                <select 
                  value={filterType} 
                  onChange={(e) => setFilterType(e.target.value)}
                  style={styles.select}
                >
                  <option value="all">All Types</option>
                  {Object.values({
                    'Residential Properties': [
                      'Residential Flat', 'Residential Floors', 'Residential plot',
                      'Residential Land', 'Residential Villa', 'Residential Penthouse',
                      'Residential Service Apartment'
                    ],
                    'Commercial Properties': [
                      'Commercial Shop', 'Commercial Office Space', 'Commercial Guest House',
                      'Commercial Service Apartment'
                    ],
                    'Industrial Properties': [
                      'Industrial Factory', 'Industrial Plot', 'Industrial Land for Warehouse/Industry'
                    ],
                    'Warehouse Properties': [
                      'Warehouse - Commercial', 'Warehouse - Agro', 'Warehouse - Transport',
                      'Warehouse Land / Industrial Land'
                    ],
                    'Farm House Properties': [
                      'Farm House - Ready', 'Farm House Land'
                    ]
                  }).flat().map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <select 
                  value={filterTransaction} 
                  onChange={(e) => setFilterTransaction(e.target.value)}
                  style={styles.select}
                >
                  <option value="all">All Transactions</option>
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
                <select 
                  value={filterStatus} 
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={styles.select}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="featured">Featured</option>
                </select>
                <button style={{ ...styles.button, backgroundColor: '#e2e8f0' }}>
                  <FiFilter /> Apply Filters
                </button>
              </div>

              {/* Properties Table */}
              <div style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: '#718096' }}>
                    Showing {filteredProperties.length} of {properties.length} properties
                  </span>
                  <button style={{ ...styles.button, ...styles.buttonSecondary }}>
                    <FiDownload /> Export
                  </button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.tableHeader}>ID</th>
                        <th style={styles.tableHeader}>Property</th>
                        <th style={styles.tableHeader}>Type</th>
                        <th style={styles.tableHeader}>Price</th>
                        <th style={styles.tableHeader}>Area</th>
                        <th style={styles.tableHeader}>Status</th>
                        <th style={styles.tableHeader}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProperties.map(property => (
                        <tr key={property.id}>
                          <td style={styles.tableCell}>{property.id}</td>
                          <td style={styles.tableCell}>
                            <div>
                              <strong>{property.title}</strong>
                              <br />
                              <small style={{ color: '#718096' }}>{property.address}</small>
                            </div>
                          </td>
                          <td style={styles.tableCell}>{property.type}</td>
                          <td style={styles.tableCell}>
                            ₹{property.price} {property.price_units}
                          </td>
                          <td style={styles.tableCell}>
                            {property.area_sqft} sqft
                          </td>
                          <td style={styles.tableCell}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                              <span style={{
                                padding: '0.25rem 0.5rem',
                                borderRadius: '9999px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                backgroundColor: property.transaction_type === 'Sale' ? '#c6f6d5' : '#bee3f8',
                                color: property.transaction_type === 'Sale' ? '#22543d' : '#2c5282',
                                width: 'fit-content'
                              }}>
                                {property.transaction_type}
                              </span>
                              {property.featured && (
                                <span style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '9999px',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  backgroundColor: '#fefcbf',
                                  color: '#744210',
                                  width: 'fit-content'
                                }}>
                                  Featured
                                </span>
                              )}
                            </div>
                          </td>
                          <td style={styles.tableCell}>
                            <div style={styles.actionButtons}>
                              <button 
                                style={{ ...styles.actionButton, backgroundColor: '#ebf8ff', color: '#3182ce' }}
                                onClick={() => handleViewDetails(property)}
                                title="View Details"
                              >
                                <FiEye size={14} />
                              </button>
                              <button 
                                style={{ ...styles.actionButton, backgroundColor: '#f0fff4', color: '#38a169' }}
                                onClick={() => handleEditProperty(property)}
                                title="Edit Property"
                              >
                                <FiEdit size={14} />
                              </button>
                              <button 
                                style={{ ...styles.actionButton, backgroundColor: '#fff5f5', color: '#e53e3e' }}
                                onClick={() => handleDeleteProperty(property.id)}
                                title="Delete Property"
                              >
                                <FiTrash2 size={14} />
                              </button>
                              <button 
                                style={{ 
                                  ...styles.actionButton, 
                                  backgroundColor: property.featured ? '#fefcbf' : '#f7fafc', 
                                  color: property.featured ? '#d69e2e' : '#4a5568'
                                }}
                                onClick={() => toggleFeatured(property)}
                                title={property.featured ? "Remove Featured" : "Mark as Featured"}
                              >
                                <FiStar size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredProperties.length === 0 && (
                  <div style={{ padding: '3rem', textAlign: 'center', color: '#718096' }}>
                    <FiSearch size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>No properties found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748', marginTop: 0 }}>Analytics</h2>
              <div style={{ 
                backgroundColor: '#f7fafc', 
                padding: '2rem', 
                borderRadius: '8px', 
                textAlign: 'center',
                border: '2px dashed #e2e8f0'
              }}>
                <FiBarChart2 size={48} style={{ color: '#a0aec0', marginBottom: '1rem' }} />
                <h3 style={{ color: '#718096' }}>Analytics Dashboard</h3>
                <p style={{ color: '#a0aec0' }}>Property performance analytics and insights coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748', marginTop: 0 }}>User Management</h2>
              <div style={{ 
                backgroundColor: '#f7fafc', 
                padding: '2rem', 
                borderRadius: '8px', 
                textAlign: 'center',
                border: '2px dashed #e2e8f0'
              }}>
                <FiUsers size={48} style={{ color: '#a0aec0', marginBottom: '1rem' }} />
                <h3 style={{ color: '#718096' }}>User Management</h3>
                <p style={{ color: '#a0aec0' }}>Manage users, roles, and permissions coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748', marginTop: 0 }}>Settings</h2>
              <div style={{ 
                backgroundColor: '#f7fafc', 
                padding: '2rem', 
                borderRadius: '8px', 
                textAlign: 'center',
                border: '2px dashed #e2e8f0'
              }}>
                <FiSettings size={48} style={{ color: '#a0aec0', marginBottom: '1rem' }} />
                <h3 style={{ color: '#718096' }}>System Settings</h3>
                <p style={{ color: '#a0aec0' }}>Configure system preferences and options coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {showDetails && (
        <PropertyDetailsModal 
          property={propertyDetails} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </div>
  );
};