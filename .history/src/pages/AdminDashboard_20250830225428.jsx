import { useState, useEffect } from 'react';
import { 
  FiHome, FiUsers, FiDollarSign, FiPieChart, 
  FiSettings, FiPlus, FiEdit, FiTrash2, 
  FiEye, FiSearch, FiFilter, FiDownload,
  FiBarChart2, FiUserPlus, FiTrendingUp
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';
import { AddPropr } from './AddPropr';

export const AdminDashboard = () => {
  const { properties,  getLists, removeSign, user } = useFirebase();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalProperties: 0,
    forSale: 0,
    forRent: 0,
    residential: 0,
    commercial: 0,
    totalValue: 0
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterTransaction, setFilterTransaction] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAddProperty, setShowAddProperty] = useState(false);

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
      totalValue: (totalValue / 10000000).toFixed(2) // in crores
    });
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesTransaction = filterTransaction === 'all' || property.transaction_type === filterTransaction;
    
    return matchesSearch && matchesType && matchesTransaction;
  });

  const handleDeleteProperty = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      // Implement delete functionality
      console.log('Delete property:', id);
    }
  };

  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setShowAddProperty(true);
  };

  const StatCard = ({ title, value, icon, color, subtitle }) => (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        backgroundColor: color + '20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>{value}</h3>
        <p style={{ margin: 0, color: '#718096', fontWeight: '500' }}>{title}</p>
        {subtitle && <small style={{ color: '#a0aec0' }}>{subtitle}</small>}
      </div>
    </div>
  );

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
      alignItems: 'center'
    },
    sidebar: {
      width: '280px',
      backgroundColor: 'white',
      height: 'calc(100vh - 80px)',
      position: 'fixed',
      boxShadow: '2px 0 4px rgba(0, 0, 0, 0.05)'
    },
    content: {
      marginLeft: '280px',
      padding: '2rem'
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
      transition: 'all 0.2s ease'
    },
    navItemActive: {
      backgroundColor: '#3182ce',
      color: 'white',
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
    buttonDanger: {
      backgroundColor: '#e53e3e',
      color: 'white'
    },
    buttonSuccess: {
      backgroundColor: '#38a169',
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
      fontSize: '0.95rem'
    },
    select: {
      padding: '0.75rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white',
      fontSize: '0.95rem'
    }
  };

  if (showAddProperty) {
    return (
      <AddProperty 
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
        <h1 style={{ margin: 0, color: '#2d3748' }}>
          <FiHome style={{ marginRight: '0.5rem' }} />
          Property Admin Dashboard
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#4a5568' }}>Welcome, {user?.email}</span>
          <button 
            onClick={removeSign}
            style={{ ...styles.button, backgroundColor: '#e2e8f0', color: '#4a5568' }}
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
                <button 
                  style={{ ...styles.button, ...styles.buttonPrimary }}
                  onClick={() => setShowAddProperty(true)}
                >
                  <FiPlus /> Add New Property
                </button>
              </div>

              {/* Statistics Grid */}
              <div style={styles.grid}>
                <StatCard
                  title="Total Properties"
                  value={stats.totalProperties}
                  icon={<FiHome size={24} />}
                  color="#3182ce"
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
                  title="Total Value"
                  value={`₹${stats.totalValue} Cr`}
                  icon={<FiPieChart size={24} />}
                  color="#e53e3e"
                  subtitle="Estimated market value"
                />
              </div>

              {/* Recent Properties */}
              <div style={{ ...styles.card, marginTop: '2rem' }}>
                <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Recent Properties</h3>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>ID</th>
                      <th style={styles.tableHeader}>Title</th>
                      <th style={styles.tableHeader}>Type</th>
                      <th style={styles.tableHeader}>Price</th>
                      <th style={styles.tableHeader}>Status</th>
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
                <button style={{ ...styles.button, backgroundColor: '#e2e8f0' }}>
                  <FiFilter /> Filter
                </button>
              </div>

              {/* Properties Table */}
              <div style={styles.card}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>ID</th>
                      <th style={styles.tableHeader}>Property</th>
                      <th style={styles.tableHeader}>Type</th>
                      <th style={styles.tableHeader}>Price</th>
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
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button 
                              style={{ ...styles.button, ...styles.buttonSuccess, padding: '0.25rem 0.5rem' }}
                              onClick={() => handleEditProperty(property)}
                            >
                              <FiEdit size={14} />
                            </button>
                            <button 
                              style={{ ...styles.button, ...styles.buttonDanger, padding: '0.25rem 0.5rem' }}
                              onClick={() => handleDeleteProperty(property.id)}
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredProperties.length === 0 && (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    No properties found matching your criteria.
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748' }}>Analytics</h2>
              <p style={{ color: '#718096' }}>Analytics dashboard coming soon...</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748' }}>User Management</h2>
              <p style={{ color: '#718096' }}>User management features coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div style={styles.card}>
              <h2 style={{ color: '#2d3748' }}>Settings</h2>
              <p style={{ color: '#718096' }}>Settings panel coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};