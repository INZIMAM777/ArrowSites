import { useState, useEffect } from 'react';
import { 
  FiHome, FiLayers, FiCheckCircle, 
  FiXCircle, FiArrowRight, FiArrowLeft, 
  FiCheck, FiX, FiImage, FiMapPin,
  FiDollarSign, FiSquare, FiPlus, FiMinus
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';

export const AddPropr = ({ onClose, editData }) => {
    const { handleListing, getLists, presentId } = useFirebase();
    
    // Initialize formData with editData if provided
    const [formData, setFormData] = useState(editData || {
        id: '',
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

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [existingIds, setExistingIds] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Residential Properties');

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
    const propertyPrefixes = {
        'Residential Flat': 'RES-FLT',
        'Residential Floors': 'RES-FLR',
        'Residential plot': 'RES-PLT',
        'Residential Land': 'RES-LND',
        'Residential Villa': 'RES-VIL',
        'Residential Penthouse': 'RES-PHN',
        'Residential Service Apartment': 'RES-SAP',
        'Commercial Shop': 'COM-SHP',
        'Commercial Office Space': 'COM-OFS',
        'Commercial Guest House': 'COM-GST',
        'Commercial Service Apartment': 'COM-SAP',
        'Industrial Factory': 'IND-FAC',
        'Industrial Plot': 'IND-PLT',
        'Industrial Land for Warehouse/Industry': 'IND-LND',
        'Warehouse - Commercial': 'WH-COM',
        'Warehouse - Agro': 'WH-AGR',
        'Warehouse - Transport': 'WH-TRN',
        'Warehouse Land / Industrial Land': 'WH-LND',
        'Farm House - Ready': 'FARM-RDY',
        'Farm House Land': 'FARM-LND'
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        
        // Fetch existing IDs when component mounts
        fetchExistingIds();
        
        // Set image preview if editing and image exists
        if (editData && editData.image) {
            setImagePreview(editData.image);
        }
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to fetch existing IDs
    const fetchExistingIds = async () => {
        try {
            const ids = await presentId();
            setExistingIds(ids);
        } catch (error) {
            console.error("Error fetching existing IDs:", error);
        }
    };

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
    const generateUniqueId = (propertyType) => {
        const prefix = propertyPrefixes[propertyType];
        if (!prefix) return '';
        
        // Find the highest number for this prefix
        const prefixIds = existingIds.filter(id => id.startsWith(prefix));
        let maxNum = 0;
        
        prefixIds.forEach(id => {
            const numPart = id.split('-').pop();
            const num = parseInt(numPart, 10);
            if (!isNaN(num) && num > maxNum) {
                maxNum = num;
            }
        });
        
        // Generate new ID with 3-digit format
        const newNum = maxNum + 1;
        return `${prefix}-${newNum.toString().padStart(3, '0')}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // If property type changes, generate a new ID
        if (name === 'type') {
            const newId = generateUniqueId(value);
            setFormData(prev => ({
                ...prev,
                [name]: value,
                id: newId
            }));
        } else if (name === 'image') {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
            setImagePreview(value);
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
            setExistingIds(prev => [...prev, formData.id]);
            
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
                const newId = generateUniqueId(formData.type);
                setFormData({
                    id: newId,
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
                setImagePreview(null);
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
            <div className="step-indicator">
                <div className="step-progress-bar">
                    <div 
                        className="step-progress-fill" 
                        style={{ width: `${(step - 1) * 25}%` }}
                    ></div>
                </div>
                {steps.map((label, index) => (
                    <div 
                        key={index} 
                        className={`step ${step > index + 1 ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}
                    >
                        <div className="step-icon">
                            {step > index + 1 ? <FiCheck size={16} /> : index + 1}
                        </div>
                        <span className="step-label">{label}</span>
                    </div>
                ))}
            </div>
        );
    };

    // Step 1: Basic Information
    const renderStep1 = () => (
        <>
            <div className="form-row">
                <div className="form-group">
                    <label>Property ID*</label>
                    <div className="input-with-tag">
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            readOnly
                            placeholder="ID will be generated automatically"
                        />
                        <span className="input-tag">Auto-generated</span>
                    </div>
                </div>

                <div className="form-group">
                    <label>Title*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Luxury Apartment in Downtown"
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Property Category</label>
                <div className="category-tabs">
                    {Object.keys(propertyCategories).map(category => (
                        <button
                            key={category}
                            type="button"
                            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.replace(' Properties', '')}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Property Type*</label>
                <div className="type-grid">
                    {propertyCategories[selectedCategory].map(type => (
                        <div
                            key={type}
                            className={`type-card ${formData.type === type ? 'selected' : ''}`}
                            onClick={() => {
                                const newId = generateUniqueId(type);
                                setFormData(prev => ({
                                    ...prev,
                                    type,
                                    id: newId
                                }));
                            }}
                        >
                            <div className="type-icon">
                                <FiHome />
                            </div>
                            <span>{type}</span>
                        </div>
                    ))}
                </div>
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
                    <div className="form-row">
                        <div className="form-group">
                            <label>Bedrooms*</label>
                            <div className="counter-input">
                                <button 
                                    type="button" 
                                    className="counter-btn"
                                    onClick={() => setFormData(prev => ({
                                        ...prev,
                                        bedrooms: Math.max(0, parseInt(prev.bedrooms || 0) - 1)
                                    }))}
                                >
                                    <FiMinus />
                                </button>
                                <input
                                    type="number"
                                    name="bedrooms"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    placeholder="3"
                                />
                                <button 
                                    type="button" 
                                    className="counter-btn"
                                    onClick={() => setFormData(prev => ({
                                        ...prev,
                                        bedrooms: parseInt(prev.bedrooms || 0) + 1
                                    }))}
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Bathrooms*</label>
                            <div className="counter-input">
                                <button 
                                    type="button" 
                                    className="counter-btn"
                                    onClick={() => setFormData(prev => ({
                                        ...prev,
                                        bathrooms: Math.max(0, parseInt(prev.bathrooms || 0) - 1)
                                    }))}
                                >
                                    <FiMinus />
                                </button>
                                <input
                                    type="number"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    placeholder="2"
                                />
                                <button 
                                    type="button" 
                                    className="counter-btn"
                                    onClick={() => setFormData(prev => ({
                                        ...prev,
                                        bathrooms: parseInt(prev.bathrooms || 0) + 1
                                    }))}
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            <div className="form-row">
                <div className="form-group">
                    <label>Area (sqft)*</label>
                    <input
                        type="number"
                        name="area_sqft"
                        value={formData.area_sqft}
                        onChange={handleChange}
                        required
                        min="1"
                        placeholder="1500"
                    />
                </div>

                {(formData.type.includes('Residential') || 
                  formData.type.includes('Commercial') ||
                  formData.type.includes('Warehouse') ||
                  formData.type === 'Farm House - Ready') && (
                    <div className="form-group">
                        <label>Furnishing*</label>
                        <div className="option-cards">
                            {furnishingOptions.map(option => (
                                <div
                                    key={option}
                                    className={`option-card ${formData.furnishing === option ? 'selected' : ''}`}
                                    onClick={() => setFormData(prev => ({ ...prev, furnishing: option }))}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Transaction Type*</label>
                    <div className="option-cards horizontal">
                        {transactionTypes.map(type => (
                            <div
                                key={type}
                                className={`option-card ${formData.transaction_type === type ? 'selected' : ''}`}
                                onClick={() => setFormData(prev => ({ ...prev, transaction_type: type }))}
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Price*</label>
                    <div className="price-input-group">
                        <span className="price-prefix">
                            <FiDollarSign />
                        </span>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            min="0"
                            step="0.01"
                            placeholder="1.25"
                        />
                        <select
                            name="price_units"
                            value={formData.price_units}
                            onChange={handleChange}
                        >
                            {priceUnits.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );

    // Step 3: Location
    const renderStep3 = () => (
        <>
            <div className="form-group">
                <label>Address*</label>
                <div className="input-with-icon">
                    <FiMapPin />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="123 Main Street, City, State"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Image URL</label>
                    <div className="input-with-icon">
                        <FiImage />
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" />
                            <button 
                                type="button" 
                                className="remove-image"
                                onClick={() => {
                                    setFormData(prev => ({ ...prev, image: '' }));
                                    setImagePreview(null);
                                }}
                            >
                                <FiX />
                            </button>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label>Year Built</label>
                    <input
                        type="number"
                        name="year_built"
                        value={formData.year_built}
                        onChange={handleChange}
                        min="1800"
                        max={new Date().getFullYear()}
                        placeholder="2020"
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Builder (optional)</label>
                <input
                    type="text"
                    name="builder"
                    value={formData.builder}
                    onChange={handleChange}
                    placeholder="ABC Constructions"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the property features, location advantages, etc."
                    rows="4"
                />
            </div>
        </>
    );

    // Step 4: Amenities
    const renderStep4 = () => (
        <>
            <div className="form-group">
                <label>Select Amenities</label>
                <div className="amenities-grid">
                    {amenityOptions.map(amenity => (
                        <div
                            key={amenity}
                            className={`amenity-card ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
                            onClick={() => toggleAmenity(amenity)}
                        >
                            <div className="amenity-checkbox">
                                {formData.amenities.includes(amenity) && <FiCheck />}
                            </div>
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {formData.amenities.length > 0 && (
                <div className="form-group">
                    <label>Selected Amenities ({formData.amenities.length})</label>
                    <div className="selected-amenities">
                        {formData.amenities.map(amenity => (
                            <span key={amenity} className="amenity-tag">
                                {amenity}
                                <button 
                                    type="button"
                                    onClick={() => toggleAmenity(amenity)}
                                >
                                    <FiX size={12} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );

    // Step 5: Preview
    const renderStep5 = () => (
        <>
            <div className="preview-section">
                <h3>Basic Information</h3>
                <div className="preview-grid">
                    <div className="preview-item">
                        <label>Property ID</label>
                        <span>{formData.id || '-'}</span>
                    </div>
                    <div className="preview-item">
                        <label>Title</label>
                        <span>{formData.title || '-'}</span>
                    </div>
                    <div className="preview-item">
                        <label>Property Type</label>
                        <span>{formData.type}</span>
                    </div>
                </div>
            </div>

            <div className="preview-section">
                <h3>Property Details</h3>
                <div className="preview-grid">
                    {(formData.bedrooms || formData.bathrooms) && (
                        <>
                            {formData.bedrooms && (
                                <div className="preview-item">
                                    <label>Bedrooms</label>
                                    <span>{formData.bedrooms}</span>
                                </div>
                            )}
                            {formData.bathrooms && (
                                <div className="preview-item">
                                    <label>Bathrooms</label>
                                    <span>{formData.bathrooms}</span>
                                </div>
                            )}
                        </>
                    )}
                    {formData.area_sqft && (
                        <div className="preview-item">
                            <label>Area</label>
                            <span>{formData.area_sqft} sqft</span>
                        </div>
                    )}
                    <div className="preview-item">
                        <label>Furnishing</label>
                        <span>{formData.furnishing}</span>
                    </div>
                    <div className="preview-item">
                        <label>Transaction Type</label>
                        <span>{formData.transaction_type}</span>
                    </div>
                    {formData.price && (
                        <div className="preview-item">
                            <label>Price</label>
                            <span>{formData.price} {formData.price_units}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="preview-section">
                <h3>Location</h3>
                <div className="preview-grid">
                    {formData.address && (
                        <div className="preview-item full-width">
                            <label>Address</label>
                            <span>{formData.address}</span>
                        </div>
                    )}
                    {formData.builder && (
                        <div className="preview-item">
                            <label>Builder</label>
                            <span>{formData.builder}</span>
                        </div>
                    )}
                    {formData.year_built && (
                        <div className="preview-item">
                            <label>Year Built</label>
                            <span>{formData.year_built}</span>
                        </div>
                    )}
                    {formData.description && (
                        <div className="preview-item full-width">
                            <label>Description</label>
                            <span>{formData.description}</span>
                        </div>
                    )}
                </div>
            </div>

            {formData.amenities.length > 0 && (
                <div className="preview-section">
                    <h3>Amenities ({formData.amenities.length})</h3>
                    <div className="preview-amenities">
                        {formData.amenities.map(amenity => (
                            <span key={amenity} className="amenity-tag">
                                {amenity}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="preview-card">
                <div className="preview-card-image">
                    {formData.image ? (
                        <img src={formData.image} alt={formData.title} />
                    ) : (
                        <div className="no-image">
                            <FiImage size={32} />
                            <span>No Image</span>
                        </div>
                    )}
                </div>
                <div className="preview-card-content">
                    <h3>{formData.title || 'Property Title'}</h3>
                    <div className="preview-card-price">
                        {formData.price ? `${formData.price} ${formData.price_units}` : 'Price not set'}
                    </div>
                    <div className="preview-card-details">
                        {formData.bedrooms && (
                            <div className="detail">
                                <FiHome size={14} />
                                {formData.bedrooms} Beds
                            </div>
                        )}
                        {formData.bathrooms && (
                            <div className="detail">
                                <FiLayers size={14} />
                                {formData.bathrooms} Baths
                            </div>
                        )}
                        {formData.area_sqft && (
                            <div className="detail">
                                <FiSquare size={14} />
                                {formData.area_sqft} sqft
                            </div>
                        )}
                    </div>
                    {formData.address && (
                        <div className="preview-card-address">
                            <FiMapPin size={14} />
                            {formData.address}
                        </div>
                    )}
                </div>
            </div>
        </>
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
        <div className="property-form-container">
            <div className="property-form">
                <button onClick={onClose} className="close-button">
                    <FiX size={24} />
                </button>

                <div className="form-header">
                    <h2>
                        <FiHome size={24} />
                        {editData ? 'Edit Property' : step === 5 ? 'Review Your Property' : 'Add New Property'}
                    </h2>
                    <p>Complete all steps to {editData ? 'update' : 'add'} your property</p>
                </div>

                {renderStepIndicator()}

                {submitSuccess && (
                    <div className="success-message">
                        <FiCheckCircle size={18} />
                        {editData ? 'Property updated successfully!' : 'Property added successfully!'}
                    </div>
                )}

                {submitError && (
                    <div className="error-message">
                        <FiXCircle size={18} />
                        {submitError}
                    </div>
                )}

                <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                    <div className="form-content">
                        {renderCurrentStep()}
                    </div>

                    <div className="form-actions">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="button secondary"
                            >
                                <FiArrowLeft size={18} />
                                Back
                            </button>
                        )}

                        {step < 5 ? (
                            <button
                                type="submit"
                                className="button primary"
                            >
                                Next
                                <FiArrowRight size={18} />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="button primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        {editData ? 'Updating...' : 'Adding...'}
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

            <style jsx>{`
                :root {
                    --primary: #6366F1;
                    --primary-light: #C7D2FE;
                    --primary-dark: #4F46E5;
                    --secondary: #10B981;
                    --danger: #EF4444;
                    --warning: #F59E0B;
                    --info: #3B82F6;
                    --dark: #1F2937;
                    --light: #F9FAFB;
                    --gray: #6B7280;
                    --gray-light: #E5E7EB;
                    --gray-lighter: #F3F4F6;
                    --border-radius: 12px;
                    --border-radius-lg: 16px;
                    --shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
                    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
                    --transition: all 0.3s ease;
                }
                
                .property-form-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    z-index: 1000;
                    overflow-y: auto;
                }
                
                .property-form {
                    background: white;
                    border-radius: var(--border-radius-lg);
                    width: 100%;
                    max-width: 900px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: var(--shadow-lg);
                    padding: 2.5rem;
                }
                
                .close-button {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--gray);
                    padding: 0.5rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition);
                }
                
                .close-button:hover {
                    background: var(--gray-lighter);
                    color: var(--dark);
                }
                
                .form-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                
                .form-header h2 {
                    color: var(--dark);
                    font-size: 1.8rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .form-header p {
                    color: var(--gray);
                    font-size: 1rem;
                }
                
                /* Step Indicator */
                .step-indicator {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 2.5rem;
                    position: relative;
                }
                
                .step-progress-bar {
                    position: absolute;
                    top: 15px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: var(--gray-light);
                    z-index: 1;
                }
                
                .step-progress-fill {
                    height: 100%;
                    background: var(--primary);
                    transition: var(--transition);
                }
                
                .step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 2;
                }
                
                .step-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: var(--gray-light);
                    color: var(--gray);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    transition: var(--transition);
                }
                
                .step.active .step-icon {
                    background: var(--primary);
                    color: white;
                }
                
                .step.completed .step-icon {
                    background: var(--secondary);
                    color: white;
                }
                
                .step-label {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: var(--gray);
                    transition: var(--transition);
                }
                
                .step.active .step-label,
                .step.completed .step-label {
                    color: var(--primary);
                }
                
                /* Form Elements */
                .form-content {
                    margin-bottom: 2rem;
                }
                
                .form-row {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .form-group {
                    flex: 1;
                    margin-bottom: 1.5rem;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: var(--dark);
                    font-size: 0.95rem;
                }
                
                input, select, textarea {
                    width: 100%;
                    padding: 0.85rem 1rem;
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    font-size: 0.95rem;
                    transition: var(--transition);
                    background: var(--light);
                }
                
                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px var(--primary-light);
                }
                
                textarea {
                    min-height: 100px;
                    resize: vertical;
                }
                
                .input-with-tag {
                    position: relative;
                }
                
                .input-tag {
                    position: absolute;
                    right: 0.5rem;
                    top: 50%;
                    transform: translateY(-50%);
                    background: var(--gray-lighter);
                    color: var(--gray);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                
                .input-with-icon {
                    position: relative;
                }
                
                .input-with-icon svg {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--gray);
                }
                
                .input-with-icon input {
                    padding-left: 2.5rem;
                }
                
                .price-input-group {
                    position: relative;
                    display: flex;
                }
                
                .price-input-group input {
                    padding-left: 2.5rem;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                
                .price-input-group select {
                    width: auto;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border-left: none;
                }
                
                .price-prefix {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--gray);
                    z-index: 2;
                }
                
                /* Category Tabs */
                .category-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                
                .category-tab {
                    padding: 0.5rem 1rem;
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    background: white;
                    color: var(--gray);
                    font-size: 0.85rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .category-tab:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                
                .category-tab.active {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: white;
                }
                
                /* Type Grid */
                .type-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 0.75rem;
                }
                
                .type-card {
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    padding: 1rem;
                    text-align: center;
                    cursor: pointer;
                    transition: var(--transition);
                    background: white;
                }
                
                .type-card:hover {
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }
                
                .type-card.selected {
                    border-color: var(--primary);
                    background: var(--primary-light);
                }
                
                .type-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--gray-lighter);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 0.5rem;
                    color: var(--gray);
                    transition: var(--transition);
                }
                
                .type-card.selected .type-icon {
                    background: var(--primary);
                    color: white;
                }
                
                .type-card span {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: var(--dark);
                }
                
                /* Counter Input */
                .counter-input {
                    display: flex;
                    align-items: center;
                }
                
                .counter-input input {
                    text-align: center;
                    margin: 0 0.5rem;
                    width: 80px;
                }
                
                .counter-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 1px solid var(--gray-light);
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .counter-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                
                /* Option Cards */
                .option-cards {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .option-cards.horizontal {
                    flex-direction: row;
                }
                
                .option-card {
                    padding: 0.75rem 1rem;
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    background: white;
                    color: var(--gray);
                    font-size: 0.85rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .option-card:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                
                .option-card.selected {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: white;
                }
                
                /* Image Preview */
                .image-preview {
                    position: relative;
                    margin-top: 1rem;
                    width: 150px;
                    height: 100px;
                    border-radius: var(--border-radius);
                    overflow: hidden;
                }
                
                .image-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .remove-image {
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.8);
                    color: var(--danger);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .remove-image:hover {
                    background: var(--danger);
                    color: white;
                }
                
                .no-image {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: var(--gray-lighter);
                    color: var(--gray);
                }
                
                /* Amenities Grid */
                .amenities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 0.75rem;
                }
                
                .amenity-card {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    background: white;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .amenity-card:hover {
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }
                
                .amenity-card.selected {
                    border-color: var(--primary);
                    background: var(--primary-light);
                }
                
                .amenity-checkbox {
                    width: 20px;
                    height: 20px;
                    border: 1px solid var(--gray-light);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition);
                }
                
                .amenity-card.selected .amenity-checkbox {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: white;
                }
                
                /* Selected Amenities */
                .selected-amenities {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .amenity-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--primary-light);
                    color: var(--primary-dark);
                    padding: 0.4rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                
                .amenity-tag button {
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    opacity: 0.7;
                    transition: var(--transition);
                }
                
                .amenity-tag button:hover {
                    opacity: 1;
                }
                
                /* Preview Styles */
                .preview-section {
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--gray-light);
                }
                
                .preview-section h3 {
                    color: var(--primary);
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .preview-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 1rem;
                }
                
                .preview-item {
                    display: flex;
                    flex-direction: column;
                }
                
                .preview-item.full-width {
                    grid-column: 1 / -1;
                }
                
                .preview-item label {
                    font-weight: 600;
                    color: var(--gray);
                    font-size: 0.85rem;
                    margin-bottom: 0.25rem;
                }
                
                .preview-item span {
                    color: var(--dark);
                    font-weight: 500;
                }
                
                .preview-amenities {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .preview-card {
                    border: 1px solid var(--gray-light);
                    border-radius: var(--border-radius);
                    overflow: hidden;
                    box-shadow: var(--shadow);
                }
                
                .preview-card-image {
                    height: 200px;
                    background: var(--gray-lighter);
                    overflow: hidden;
                }
                
                .preview-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .preview-card-content {
                    padding: 1.5rem;
                }
                
                .preview-card-content h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--dark);
                }
                
                .preview-card-price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 1rem;
                }
                
                .preview-card-details {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    color: var(--gray);
                }
                
                .preview-card-details .detail {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.9rem;
                }
                
                .preview-card-address {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: var(--gray);
                    font-size: 0.9rem;
                }
                
                /* Form Actions */
                .form-actions {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                }
                
                .button {
                    padding: 0.85rem 1.5rem;
                    border-radius: var(--border-radius);
                    border: none;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }
                
                .button.primary {
                    background: var(--primary);
                    color: white;
                }
                
                .button.primary:hover:not(:disabled) {
                    background: var(--primary-dark);
                }
                
                .button.secondary {
                    background: var(--gray-light);
                    color: var(--dark);
                }
                
                .button.secondary:hover {
                    background: #D1D5DB;
                }
                
                .button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                
                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid transparent;
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                /* Messages */
                .success-message {
                    background: var(--secondary);
                    color: white;
                    padding: 1rem;
                    border-radius: var(--border-radius);
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                }
                
                .error-message {
                    background: var(--danger);
                    color: white;
                    padding: 1rem;
                    border-radius: var(--border-radius);
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    .property-form {
                        padding: 1.5rem;
                    }
                    
                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }
                    
                    .type-grid {
                        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    }
                    
                    .amenities-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .preview-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .form-actions {
                        flex-direction: column;
                    }
                    
                    .button {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};