// AddProperty.jsx
import { useState, useEffect } from 'react';
import {
    FiHome, FiLayers, FiCheckCircle,
    FiXCircle, FiArrowRight, FiArrowLeft, FiCheck, FiX
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';
import { useOutletContext } from 'react-router-dom';
// import { max } from 'lodash';

export const AddPropr = ({ onClose, editData }) => {
    const { handleListing, getLists } = useFirebase();

    // Initialize formData with editData if provided
    const [formData, setFormData] = useState(editData || {
        // id: '',
        title: '',
        type: 'Residential Flat',
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
        description: '',
        createdAt: new Date().toISOString()
    });

    // Color palettes for light and dark modes
    const colorTheme = {
        dark: {
            background: {
                primary: "#0f172a",
                secondary:"rgb(15 23 42);,
                tertiary: "#334155",
                overlay: "rgba(0, 0, 0, 0.7)",
            },
            text: {
                primary: "#f8fafc",
                secondary: "#cbd5e1",
                accent: "#60a5fa",
            },
            border: {
                primary: "#334155",
                accent: "#60a5fa",
            },
            button: {
                primary: "#3b82f6",
                primaryHover: "#2563eb",
                secondary: "#1e293b",
                secondaryHover: "#334155",
            }
        },
        light: {
            background: {
                primary: "#ffffff",
                secondary: "#f8fafc",
                tertiary: "#e2e8f0",
                overlay: "rgba(255, 255, 255, 0.7)",
            },
            text: {
                primary: "#1e293b",
                secondary: "#475569",
                accent: "#3b82f6",
            },
            border: {
                primary: "#e2e8f0",
                accent: "#3b82f6",
            },
            button: {
                primary: "#3b82f6",
                primaryHover: "#2563eb",
                secondary: "#f1f5f9",
                secondaryHover: "#e2e8f0",
            }
        }
    };
    const { isDarkMode } = useOutletContext();
    const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
    const homePageStyles = {
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        color: isDarkMode ? '#f8fafc' : '#1e293b',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        maxWidth: '100vw',
    };

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // const [existingIds, setExistingIds] = useState([]);

    // Property type categories
    const propertyCategories = {
        'Residential Properties': [
            'Residential Flat',
            'Residential Floors',
            'Residential plot',
            'Residential Land',
            'Residential Villa',
            'Residential Penthouse',
            'Residential Service Apartment'
        ],
        'Commercial Properties': [
            'Commercial Shop',
            'Commercial Office Space',
            'Commercial Guest House',
            'Commercial Service Apartment'
        ],
        'Industrial Properties': [
            'Industrial Factory',
            'Industrial Plot',
            'Industrial Land for Warehouse/Industry'
        ],
        'Warehouse Properties': [
            'Warehouse - Commercial',
            'Warehouse - Agro',
            'Warehouse - Transport',
            'Warehouse Land / Industrial Land'
        ],
        'Farm House Properties': [
            'Farm House - Ready',
            'Farm House Land'
        ]
    };

    // Prefix mapping for ID generation
    // const propertyPrefixes = {
    //     'Residential Flat': 'RES-FLT',
    //     'Residential Floors': 'RES-FLR',
    //     'Residential plot': 'RES-PLT',
    //     'Residential Land': 'RES-LND',
    //     'Residential Villa': 'RES-VIL',
    //     'Residential Penthouse': 'RES-PHN',
    //     'Residential Service Apartment': 'RES-SAP',
    //     'Commercial Shop': 'COM-SHP',
    //     'Commercial Office Space': 'COM-OFS',
    //     'Commercial Guest House': 'COM-GST',
    //     'Commercial Service Apartment': 'COM-SAP',
    //     'Industrial Factory': 'IND-FAC',
    //     'Industrial Plot': 'IND-PLT',
    //     'Industrial Land for Warehouse/Industry': 'IND-LND',
    //     'Warehouse - Commercial': 'WH-COM',
    //     'Warehouse - Agro': 'WH-AGR',
    //     'Warehouse - Transport': 'WH-TRN',
    //     'Warehouse Land / Industrial Land': 'WH-LND',
    //     'Farm House - Ready': 'FARM-RDY',
    //     'Farm House Land': 'FARM-LND'
    // };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

        // Fetch existing IDs when component mounts
        // fetchExistingIds();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to fetch existing IDs
    // const fetchExistingIds = async () => {
    //     try {
    //         const ids = await presentId();
    //         setExistingIds(ids);
    //     } catch (error) {
    //         console.error("Error fetching existing IDs:", error);
    //     }
    // };

    const furnishingOptions = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished', 'Luxury Furnished'];
    const transactionTypes = ['Sale', 'Rent'];
    const priceUnits = ['crore', 'lakh', 'lakh/month', 'month'];
    const amenityOptions = [
        'Swimming Pool', 'Gym', '24/7 Security', 'Clubhouse',
        'Private Garden', 'Modular Kitchen', 'Home Theater',
        'Parking', 'Power Backup', 'Lift', 'Cafeteria',
        'High-Speed Elevators', 'Private Terrace', 'Jacuzzi',
        'Smart Home', 'Lawn', 'Servant Quarters'
    ];

    // Generate a unique ID based on property type
    // const generateUniqueId = (propertyType) => {
    //     const prefix = propertyPrefixes[propertyType];
    //     if (!prefix) return '';

    //     // Find the highest number for this prefix
    //     const prefixIds = existingIds.filter(id => id.startsWith(prefix));
    //     let maxNum = 0;

    //     prefixIds.forEach(id => {
    //         const numPart = id.split('-').pop();
    //         const num = parseInt(numPart, 10);
    //         if (!isNaN(num) && num > maxNum) {
    //             maxNum = num;
    //         }
    //     });

    //     // Generate new ID with 3-digit format
    //     const newNum = maxNum + 1;
    //     return `${prefix}-${newNum.toString().padStart(3, '0')}`;
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If property type changes, generate a new ID
        if (name === 'type') {
            // const newId = generateUniqueId(value);
            setFormData(prev => ({
                ...prev,
                [name]: value,
                // id: newId
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const toggleAmenity = (amenity) => {
        setFormData(prev => {
            if (prev.amenities.includes(amenity)) {
                return {
                    ...prev,
                    amenities: prev.amenities.filter(a => a !== amenity)
                };
            } else {
                return {
                    ...prev,
                    amenities: [...prev.amenities, amenity]
                };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Add the property to Firestore using the context function
            await handleListing(formData);
            setSubmitSuccess(true);
            // Add the new ID to existing IDs to maintain uniqueness
            // setExistingIds(prev => [...prev, formData.id]);

            // Refresh the properties list
            await getLists();

            setTimeout(() => {
                setSubmitSuccess(false);
                setStep(1);

                // If we're in edit mode, close the form after successful submission
                if (editData && onClose) {
                    onClose();
                    return;
                }

                // Generate a new ID for the next property
                // const newId = generateUniqueId(formData.type);
                setFormData({
                    // id: newId,
                    title: '',
                    type: formData.type,
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
                    description: '',
                    createdAt: new Date().toISOString()
                });
            }, 3000);
        } catch (error) {
            console.error("Error adding property: ", error);
            setSubmitError('Failed to add property. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const renderStepIndicator = () => {
        const steps = ['Basic Info', 'Details', 'Location', 'Amenities', 'Preview'];
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    height: '2px',
                    backgroundColor: '#e2e8f0',
                    top: '15px',
                    left: '0',
                    right: '0',
                    zIndex: '1'
                }} />
                {steps.map((label, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: '2'
                    }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: step > index + 1 ? '#38a169' : step === index + 1 ? '#3182ce' : '#e2e8f0',
                            color: step > index + 1 || step === index + 1 ? 'white' : '#718096',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                        }}>
                            {step > index + 1 ? <FiCheck size={16} /> : index + 1}
                        </div>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            color: step >= index + 1 ? '#3182ce' : '#718096'
                        }}>
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const styles = {
        container: {
            maxWidth: '900px',
            margin: '2rem auto',
            padding: '2.5rem',
            backgroundColor: theme.background.primary,
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            color: theme.text.primary,
        },
        heading: {
            textAlign: 'center',
            color: theme.text.accent,
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
        },
        closeButton: {
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: theme.text.secondary,
            fontSize: '1.5rem'
        },
        formGroup: {
            marginBottom: '1.75rem',
            position: 'relative'
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '600',
            color: theme.text.primary,
            fontSize: '0.95rem'
        },
        input: {
            width: '100%',
            padding: '0.85rem 1rem',
            border: `1px solid ${theme.border.primary}`,
            borderRadius: '8px',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
            backgroundColor: theme.background.secondary,
            color: theme.text.primary,
        },
        select: {
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            fontSize: '0.95rem',
            appearance: 'none',
            backgroundColor: theme.background.secondary,
            color: theme.text.primary,
            border: `1px solid ${theme.border.primary}`,
        },
        textarea: {
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            fontSize: '0.95rem',
            minHeight: '100px',
            resize: 'vertical',
            backgroundColor: theme.background.secondary,
            color: theme.text.primary,
            border: `1px solid ${theme.border.primary}`,
        },
        button: {
            backgroundColor: theme.button.primary,
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            '&:hover': {
                backgroundColor: theme.button.primaryHover,
            }
        },
        buttonSecondary: {
            backgroundColor: theme.button.secondary,
            color: theme.text.primary,
            '&:hover': {
                backgroundColor: theme.button.secondaryHover,
            }
        },
        buttonDisabled: {
            backgroundColor: '#a0aec0',
            cursor: 'not-allowed'
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
        amenityTagContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.5rem'
        },
        amenityTag: {
            backgroundColor: isDarkMode ? '#1e3a8a' : '#ebf8ff',
            color: isDarkMode ? '#bfdbfe' : '#3182ce',
            padding: '0.3rem 0.7rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: '500'
        },
        amenityPill: {
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: isDarkMode ? '#1e3a8a' : '#ebf8ff',
            color: isDarkMode ? '#bfdbfe' : '#3182ce',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: '500',
            cursor: 'pointer',
            margin: '0.25rem',
            transition: 'all 0.2s ease'
        },
        amenityPillSelected: {
            backgroundColor: '#3182ce',
            color: 'white'
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
            gap: '1rem'
        },
        card: {
            border: `1px solid ${theme.border.primary}`,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            backgroundColor: theme.background.primary,
        },

        cardBody: {
            padding: '1.5rem'
        },
        cardImage: {
            height: '200px',
            backgroundColor: theme.background.secondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.text.secondary,
            position: 'relative',
            overflow: 'hidden'
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: theme.text.primary
        },
        cardPrice: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: theme.text.accent,
            marginBottom: '1rem'
        },
        cardDetails: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            color: '#4a5568'
        },
        cardDetailItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.9rem'
        },
        cardAddress: {
            color: '#718096',
            marginBottom: '1rem',
            fontSize: '0.9rem'
        },
        cardAmenities: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '1rem'
        },
        previewLabel: {
            fontWeight: '600',
            color: theme.text.secondary,
            marginBottom: '0.25rem'
        },
        previewValue: {
            marginBottom: '1rem',
            color: theme.text.primary
        },
        previewSection: {
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${theme.border.primary}`
        },
        optgroupLabel: {
            fontWeight: '600',
            backgroundColor: '#f1f5f9',
            padding: '0.5rem'
        }
    };

    if (isMobile) {
        styles.flexRow = { ...styles.flexRow, flexDirection: 'column', gap: '0' };
        styles.container = { ...styles.container, padding: '1.5rem' };
    }

    // Step 1: Basic Information
    const renderStep1 = () => (
        <>
            <div style={styles.flexRow}>
                {/* <div style={{ ...styles.formGroup, ...styles.flexItem }}>
                    <label style={styles.label}>Property ID*</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        style={{ ...styles.input, backgroundColor: '#edf2f7' }}
                        readOnly
                        placeholder="ID will be generated automatically"
                    />
                </div> */}

                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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
                    {Object.entries(propertyCategories).map(([category, types]) => (
                        <optgroup key={category} label={category} style={styles.optgroupLabel}>
                            {types.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
        </>
    );

    // Step 2: Property Details
    const renderStep2 = () => (
        <>
            {(formData.type.includes('Residential') ||
                formData.type.includes('Villa') ||
                formData.type.includes('Penthouse') ||
                formData.type.includes('Service Apartment') ||
                formData.type.includes('Guest House') ||
                formData.type === 'Farm House - Ready') && (
                    <div style={styles.flexRow}>
                        <div style={{ ...styles.formGroup, ...styles.flexItem }}>
                            <label style={styles.label}>Bedrooms*</label>
                            <input
                                type="number"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                style={styles.input}
                                required
                                min="0"
                                placeholder="3"
                            />
                        </div>

                        <div style={{ ...styles.formGroup, ...styles.flexItem }}>
                            <label style={styles.label}>Bathrooms*</label>
                            <input
                                type="number"
                                name="bathrooms"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                style={styles.input}
                                required
                                min="0"
                                placeholder="2"
                            />
                        </div>
                    </div>
                )}

            <div style={styles.flexRow}>
                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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

                {(formData.type.includes('Residential') ||
                    formData.type.includes('Commercial') ||
                    formData.type.includes('Warehouse') ||
                    formData.type === 'Farm House - Ready') && (
                        <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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
                    )}
            </div>

            <div style={styles.flexRow}>
                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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

                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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

                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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
        </>
    );

    // Step 3: Location
    const renderStep3 = () => (
        <>
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

            <div style={styles.flexRow}>
                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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

                <div style={{ ...styles.formGroup, ...styles.flexItem }}>
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

            <div style={styles.formGroup}>
                <label style={styles.label}>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Describe the property features, location advantages, etc."
                />
            </div>
        </>
    );

    // Step 4: Amenities
    const renderStep4 = () => (
        <>
            <div style={styles.formGroup}>
                <label style={styles.label}>Select Amenities</label>
                <div style={{ marginBottom: '1rem' }}>
                    {amenityOptions.map(amenity => (
                        <span
                            key={amenity}
                            style={{
                                ...styles.amenityPill,
                                ...(formData.amenities.includes(amenity) ? styles.amenityPillSelected : {})
                            }}
                            onClick={() => toggleAmenity(amenity)}
                        >
                            {amenity}
                            {formData.amenities.includes(amenity) && <FiCheck style={{ marginLeft: '0.25rem' }} />}
                        </span>
                    ))}
                </div>
                {formData.amenities.length > 0 && (
                    <div>
                        <label style={styles.label}>Selected Amenities</label>
                        <div style={styles.amenityTagContainer}>
                            {formData.amenities.map(amenity => (
                                <span key={amenity} style={styles.amenityTag}>{amenity}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );

    // Step 5: Preview
    const renderStep5 = () => (
        <div className="home-page" style={homePageStyles}>
        
            <div style={styles.previewSection}>
                <h3 style={{ marginBottom: '1rem', color: '#3182ce' }}>Basic Information</h3>
                <div style={styles.flexRow}>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Property ID</div>
                        <div style={styles.previewValue}>{formData.id || '-'}</div>
                    </div>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Title</div>
                        <div style={styles.previewValue}>{formData.title || '-'}</div>
                    </div>
                </div>
                <div style={styles.previewLabel}>Property Type</div>
                <div style={styles.previewValue}>{formData.type}</div>
            </div>

            <div style={styles.previewSection}>
                <h3 style={{ marginBottom: '1rem', color: '#3182ce' }}>Property Details</h3>
                <div style={styles.flexRow}>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Bedrooms</div>
                        <div style={styles.previewValue}>{formData.bedrooms || '-'}</div>
                    </div>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Bathrooms</div>
                        <div style={styles.previewValue}>{formData.bathrooms || '-'}</div>
                    </div>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Area</div>
                        <div style={styles.previewValue}>{formData.area_sqft ? `${formData.area_sqft} sqft` : '-'}</div>
                    </div>
                </div>
                <div style={styles.flexRow}>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Furnishing</div>
                        <div style={styles.previewValue}>{formData.furnishing}</div>
                    </div>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Transaction Type</div>
                        <div style={styles.previewValue}>{formData.transaction_type}</div>
                    </div>
                </div>
                <div style={styles.previewLabel}>Price</div>
                <div style={styles.previewValue}>{formData.price ? `${formData.price} ${formData.price_units}` : '-'}</div>
            </div>

            <div style={styles.previewSection}>
                <h3 style={{ marginBottom: '1rem', color: '#3182ce' }}>Location</h3>
                <div style={styles.previewLabel}>Address</div>
                <div style={styles.previewValue}>{formData.address || '-'}</div>
                <div style={styles.flexRow}>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Builder</div>
                        <div style={styles.previewValue}>{formData.builder || '-'}</div>
                    </div>
                    <div style={styles.flexItem}>
                        <div style={styles.previewLabel}>Year Built</div>
                        <div style={styles.previewValue}>{formData.year_built || '-'}</div>
                    </div>
                </div>
                <div style={styles.previewLabel}>Description</div>
                <div style={styles.previewValue}>{formData.description || 'No description provided'}</div>
            </div>

            <div style={styles.previewSection}>
                <h3 style={{ marginBottom: '1rem', color: '#3182ce' }}>Amenities</h3>
                {formData.amenities.length > 0 ? (
                    <div style={styles.amenityTagContainer}>
                        {formData.amenities.map(amenity => (
                            <span key={amenity} style={styles.amenityTag}>{amenity}</span>
                        ))}
                    </div>
                ) : (
                    <div style={styles.previewValue}>No amenities selected</div>
                )}
            </div>

            <div style={styles.card}>
                <div style={styles.cardImage}>
                    {formData.image ? (
                        <img src={formData.image} alt={formData.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <span>Property Image Preview</span>
                    )}
                </div>
                <div style={styles.cardBody}>
                    <h3 style={styles.cardTitle}>{formData.title || 'Property Title'}</h3>
                    <div style={styles.cardPrice}>
                        {formData.price ? `${formData.price} ${formData.price_units}` : 'Price not set'}
                    </div>
                    <div style={styles.cardDetails}>
                        {formData.bedrooms && (
                            <div style={styles.cardDetailItem}>
                                <FiHome size={14} />
                                {formData.bedrooms} Beds
                            </div>
                        )}
                        {formData.bathrooms && (
                            <div style={styles.cardDetailItem}>
                                <FiLayers size={14} />
                                {formData.bathrooms} Baths
                            </div>
                        )}
                        {formData.area_sqft && (
                            <div style={styles.cardDetailItem}>
                                {formData.area_sqft} sqft
                            </div>
                        )}
                    </div>
                    <div style={styles.cardAddress}>
                        {formData.address || 'Address not provided'}
                    </div>
                    {formData.amenities.length > 0 && (
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                Amenities:
                            </div>
                            <div style={styles.cardAmenities}>
                                {formData.amenities.slice(0, 5).map(amenity => (
                                    <span key={amenity} style={styles.amenityTag}>{amenity}</span>
                                ))}
                                {formData.amenities.length > 5 && (
                                    <span style={styles.amenityTag}>+{formData.amenities.length - 5} more</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        
        </div>
    );

    const renderCurrentStep = () => {
        switch (step) {
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            case 4: return renderStep4();
            case 5: return renderStep5();
            default: return renderStep1();
        }
    };

    return ( 


        <div style={styles.container}>
            {/* Close button added here */}
            {onClose && (
                <button onClick={onClose} style={styles.closeButton}>
                    <FiX size={24} />
                </button>
            )}

            <h2 style={styles.heading}>
                <FiHome size={24} />
                {editData ? 'Edit Property' : step === 5 ? 'Review Your Property' : 'Add New Property'}
            </h2>

            {renderStepIndicator()}

            {submitSuccess && (
                <div style={styles.successMessage}>
                    <FiCheckCircle size={18} />
                    {editData ? 'Property updated successfully!' : 'Property added successfully!'}
                </div>
            )}

            {submitError && (
                <div style={styles.errorMessage}>
                    <FiXCircle size={18} />
                    {submitError}
                </div>
            )}

            <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                {renderCurrentStep()}

                <div style={styles.buttonGroup}>
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            style={{ ...styles.button, ...styles.buttonSecondary }}
                        >
                            <FiArrowLeft size={18} />
                            Back
                        </button>
                    )}

                    {step < 5 ? (
                        <button
                            type="submit"
                            style={styles.button}
                        >
                            Next
                            <FiArrowRight size={18} />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            style={{
                                ...styles.button,
                                ...(isSubmitting ? styles.buttonDisabled : {})
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {editData ? 'Updating Property...' : 'Adding Property...'}
                                </>
                            ) : (
                                <>
                                    <FiCheckCircle size={18} />
                                    {editData ? 'Update Property' : 'Submit Property'}
                                </>
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};