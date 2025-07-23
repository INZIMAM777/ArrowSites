import { useState } from 'react';

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
        year_built: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted property:', formData);
        alert('Property added successfully!');
        // Reset form after submission
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
            year_built: ''
        });
    };

    // Styles
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
        },
        heading: {
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '2rem'
        },
        formGroup: {
            marginBottom: '1.5rem'
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: '#34495e'
        },
        input: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem',
            transition: 'border-color 0.3s'
        },
        inputFocus: {
            outline: 'none',
            borderColor: '#3498db'
        },
        select: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem',
            backgroundColor: 'white'
        },
        multiSelect: {
            height: 'auto',
            minHeight: '100px'
        },
        hint: {
            fontSize: '0.8rem',
            color: '#7f8c8d',
            marginTop: '0.3rem'
        },
        button: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            width: '100%',
            marginTop: '1rem'
        },
        buttonHover: {
            backgroundColor: '#2980b9'
        },
        flexRow: {
            display: 'flex',
            gap: '1rem'
        },
        flexItem: {
            flex: '1'
        },
        '@media (max-width: 768px)': {
            container: {
                padding: '1rem'
            },
            flexRow: {
                flexDirection: 'column',
                gap: '0'
            }
        }
    };

    // Media query implementation
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        styles.flexRow = { ...styles.flexRow, flexDirection: 'column', gap: '0' };
        styles.container = { ...styles.container, padding: '1rem' };
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add New Property</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Property ID:</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={formData.id} 
                        onChange={handleChange} 
                        style={styles.input}
                        required 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        style={styles.input}
                        required 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Property Type:</label>
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

                {(formData.type === 'Apartment' || formData.type === 'Villa' || 
                  formData.type === 'Independent Floor' || formData.type === 'Farmhouse') && (
                    <div style={styles.flexRow}>
                        <div style={{...styles.formGroup, ...styles.flexItem}}>
                            <label style={styles.label}>Bedrooms:</label>
                            <input 
                                type="number" 
                                name="bedrooms" 
                                value={formData.bedrooms} 
                                onChange={handleChange} 
                                style={styles.input}
                                required 
                            />
                        </div>

                        <div style={{...styles.formGroup, ...styles.flexItem}}>
                            <label style={styles.label}>Bathrooms:</label>
                            <input 
                                type="number" 
                                name="bathrooms" 
                                value={formData.bathrooms} 
                                onChange={handleChange} 
                                style={styles.input}
                                required 
                            />
                        </div>
                    </div>
                )}

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Area (sqft):</label>
                        <input 
                            type="number" 
                            name="area_sqft" 
                            value={formData.area_sqft} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Transaction Type:</label>
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
                </div>

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Price:</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Price Units:</label>
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

                <div style={styles.formGroup}>
                    <label style={styles.label}>Furnishing:</label>
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

                <div style={styles.formGroup}>
                    <label style={styles.label}>Address:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        style={styles.input}
                        required 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Amenities (Hold Ctrl/Cmd to select multiple):</label>
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
                    <div style={styles.hint}>Selected: {formData.amenities.join(', ') || 'None'}</div>
                </div>

                <div style={styles.flexRow}>
                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Image URL:</label>
                        <input 
                            type="text" 
                            name="image" 
                            value={formData.image} 
                            onChange={handleChange} 
                            style={styles.input}
                        />
                    </div>

                    <div style={{...styles.formGroup, ...styles.flexItem}}>
                        <label style={styles.label}>Year Built:</label>
                        <input 
                            type="number" 
                            name="year_built" 
                            value={formData.year_built} 
                            onChange={handleChange} 
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Builder (optional):</label>
                    <input 
                        type="text" 
                        name="builder" 
                        value={formData.builder} 
                        onChange={handleChange} 
                        style={styles.input}
                    />
                </div>

                <button 
                    type="submit" 
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                    Add Property
                </button>
            </form>
        </div>
    );
};