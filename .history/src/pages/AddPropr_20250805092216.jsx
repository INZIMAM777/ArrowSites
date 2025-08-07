// AddProperty.jsx
import { useState, useEffect } from 'react';
import { db, collection, addDoc } from '../utils/firebase';
import { FiHome, FiDollarSign, FiMapPin, FiLayers, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export const AddPropr = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        type: 'Apartment',
        bedrooms: '',
        bathrooms: '',
        area_sqft: '',
        price: '',
        price_units: 'crore',
        transaction_type: 'Sale',
        furnishing: 'Unfurnished',
        address: '',
        amenities: [],
        image: '',
        builder: '',
        year_built: '',
        createdAt: new Date().toISOString()
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const propertyTypes = ['Apartment', 'Villa', 'Commercial', 'Industrial', 'Independent Floor', 'Farmhouse'];
    const furnishingOptions = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished', 'Luxury Furnished'];
    const transactionTypes = ['Sale', 'Rent'];
    const priceUnits = ['crore', 'lakh/month', 'month'];
    const amenityOptions = [
        'Swimming Pool', 'Gym', '24/7 Security', 'Clubhouse',
        'Private Garden', 'Modular Kitchen', 'Home Theater',
        'Parking', 'Power Backup', 'Lift', 'Cafeteria',
        'High-Speed Elevators', 'Private Terrace', 'Jacuzzi',
        'Smart Home', 'Lawn', 'Servant Quarters'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmenitiesChange = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setFormData(prev => ({
            ...prev,
            amenities: options
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        
        try {
            await addDoc(collection(db, "properties"), formData);
            setSubmitSuccess(true);
            setFormData({
                id: '',
                title: '',
                type: 'Apartment',
                bedrooms: '',
                bathrooms: '',
                area_sqft: '',
                price: '',
                price_units: 'crore',
                transaction_type: 'Sale',
                furnishing: 'Unfurnished',
                address: '',
                amenities: [],
                image: '',
                builder: '',
                year_built: '',
                createdAt: new Date().toISOString()
            });
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error("Error adding property: ", error);
            setSubmitError('Failed to add property. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Enhanced styles with modern design
    const styles = {
        container: {
            maxWidth: '900px',
            margin: '2rem auto',
            padding: '2.5rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            fontFamily: "'Inter', sans-serif"
        },
        heading: {
            textAlign: 'center',
            color: '#1a365d',
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
        },
        formGroup: {
            marginBottom: '1.75rem',
            position: 'relative'
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: '#2d3748',
            fontSize: '0.95rem'
        },
        input: {
            width: '100%',
            padding: '0.85rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
            backgroundColor: '#f8fafc'
        },
        inputFocus: {
            outline: 'none',
            borderColor: '#4299e1',
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.2)'
        },
        select: {
            width: '100%',
            padding: '0.85rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '0.95rem',
            backgroundColor: '#f8fafc',
            appearance: 'none',
            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231a365d%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.7rem top 50%',
            backgroundSize: '0.65rem auto'
        },
        multiSelect: {
            height: 'auto',
            minHeight: '120px',
            padding: '0.5rem'
        },
        hint: {
            fontSize: '0.8rem',
            color: '#718096',
            marginTop: '0.3rem',
            fontStyle: 'italic'
        },
        button: {
            backgroundColor: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '100%',
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
        },
        buttonDisabled: {
            backgroundColor: '#a0aec0',
            cursor: 'not-allowed'
        },
        buttonHover: {
            backgroundColor: '#2c5282',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
        },
        flexRow: {
            display: 'flex',
            gap: '1.5rem'
        },
        flexItem: {
            flex: '1'
        },
        successMessage: {
            backgroundColor: '#38a169',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontWeight: '500'
        },
        errorMessage: {
            backgroundColor: '#e53e3e',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontWeight: '500'
        },
        iconWrapper: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0.5rem'
        },
        amenityTagContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.5rem'
        },
        amenityTag: {
            backgroundColor: '#ebf8ff',
            color: '#3182ce',
            padding: '0.3rem 0.7rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: '500'
        },
        sectionTitle: {
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#2d3748',
            margin: '1.5rem 0 1rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        formGroup: { marginBottom: '1rem' },
  label: { display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' },
  multiSelectContainer: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    minHeight: '40px',
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    width: '100%',
    zIndex: 10,
    maxHeight: '150px',
    overflowY: 'auto',
    borderRadius: '4px',
    marginTop: '4px',
  },
  dropdownItem: {
    padding: '8px',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#f0f0f0',
  },
  amenityTag: {
    background: '#007bff',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
  },
  removeBtn: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    marginLeft: '4px',
  },
        
    };

    if (isMobile) {
        styles.flexRow = { ...styles.flexRow, flexDirection: 'column', gap: '0' };
        styles.container = { ...styles.container, padding: '1.5rem' };
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>
                <FiHome size={24} />
                Add New Property
            </h2>
            
            {submitSuccess && (
                <div style={styles.successMessage}>
                    <FiCheckCircle size={18} />
                    Property added successfully!
                </div>
            )}
            
            {submitError && (
                <div style={styles.errorMessage}>
                    <FiXCircle size={18} />
                    {submitError}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <div style={styles.sectionTitle}>Basic Information</div>
                
                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Property ID*</label>
                        <input 
                            type="text" 
                            name="id" 
                            value={formData.id} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                            placeholder="PR-1001"
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Title*</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                            placeholder="Luxury Apartment in Downtown"
                        />
                    </div>
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Property Type*</label>
                    <select 
                        name="type" 
                        value={formData.type} 
                        onChange={handleChange}
                        style={styles.select}
                    >
                        {propertyTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Property Details Section */}
                <div style={styles.sectionTitle}>
                    <FiLayers size={20} />
                    Property Details
                </div>

                {(formData.type === 'Apartment' || formData.type === 'Villa' || 
                  formData.type === 'Independent Floor' || formData.type === 'Farmhouse') && (
                    <div style={styles.flexRow}>
                        <div style={{...styles.formGroup, ...styles.flexItem}}>
                            <label style={styles.label}>Bedrooms*</label>
                            <input 
                                type="number" 
                                name="bedrooms" 
                                value={formData.bedrooms} 
                                onChange={handleChange} 
                                style={styles.input}
                                required 
                                min="1"
                                placeholder="3"
                            />
                        </div>

                        <div style={{...styles.formGroup, ...styles.flexItem}}>
                            <label style={styles.label}>Bathrooms*</label>
                            <input 
                                type="number" 
                                name="bathrooms" 
                                value={formData.bathrooms} 
                                onChange={handleChange} 
                                style={styles.input}
                                required 
                                min="1"
                                placeholder="2"
                            />
                        </div>
                    </div>
                )}

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Area (sqft)*</label>
                        <input 
                            type="number" 
                            name="area_sqft" 
                            value={formData.area_sqft} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                            min="1"
                            placeholder="1500"
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Furnishing*</label>
                        <select 
                            name="furnishing" 
                            value={formData.furnishing} 
                            onChange={handleChange}
                            style={styles.select}
                        >
                            {furnishingOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Pricing Section */}
                <div style={styles.sectionTitle}>
                    <FiDollarSign size={20} />
                    Pricing Information
                </div>

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Transaction Type*</label>
                        <select 
                            name="transaction_type" 
                            value={formData.transaction_type} 
                            onChange={handleChange}
                            style={styles.select}
                        >
                            {transactionTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Price*</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                            min="0"
                            step="0.01"
                            placeholder="1.25"
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Price Units*</label>
                        <select 
                            name="price_units" 
                            value={formData.price_units} 
                            onChange={handleChange}
                            style={styles.select}
                        >
                            {priceUnits.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Location Section */}
                <div style={styles.sectionTitle}>
                    <FiMapPin size={20} />
                    Location Details
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Address*</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        style={styles.input}
                        required 
                        placeholder="123 Main Street, City, State"
                    />
                </div>

                {/* Amenities Section */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Amenities</label>
                    <select 
                        multiple 
                        name="amenities" 
                        value={formData.amenities} 
                        onChange={handleAmenitiesChange}
                        style={{...styles.select, ...styles.multiSelect}}
                    >
                        {amenityOptions.map(amenity => (
                            <option key={amenity} value={amenity}>{amenity}</option>
                        ))}
                    </select>
                    <div style={styles.hint}>Hold Ctrl/Cmd to select multiple options</div>
                    {formData.amenities.length > 0 && (
                        <div style={styles.amenityTagContainer}>
                            {formData.amenities.map(amenity => (
                                <span key={amenity} style={styles.amenityTag}>{amenity}</span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Additional Information Section */}
                <div style={styles.sectionTitle}>Additional Information</div>

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Image URL</label>
                        <input 
                            type="text" 
                            name="image" 
                            value={formData.image} 
                            onChange={handleChange} 
                            style={styles.input}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Year Built</label>
                        <input 
                            type="number" 
                            name="year_built" 
                            value={formData.year_built} 
                            onChange={handleChange} 
                            style={styles.input}
                            min="1800"
                            max={new Date().getFullYear()}
                            placeholder="2020"
                        />
                    </div>
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Builder (optional)</label>
                    <input 
                        type="text" 
                        name="builder" 
                        value={formData.builder} 
                        onChange={handleChange} 
                        style={styles.input}
                        placeholder="ABC Constructions"
                    />
                </div>

                <button 
                    type="submit" 
                    style={{
                        ...styles.button,
                        ...(isSubmitting ? styles.buttonDisabled : {})
                    }}
                    onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Adding Property...
                        </>
                    ) : (
                        <>
                            <FiCheckCircle size={18} />
                            Add Property
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};