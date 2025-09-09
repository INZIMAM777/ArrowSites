import { useState, useEffect } from 'react';
import { 
  FiHome, FiLayers, FiCheckCircle, 
  FiXCircle, FiArrowRight, FiArrowLeft, FiCheck, FiX 
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [existingIds, setExistingIds] = useState([]);

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
                <div className="step-line"></div>
                {steps.map((label, index) => (
                    <div key={index} className="step-item">
                        <div className={`step-number ${step > index + 1 ? 'completed' : step === index + 1 ? 'active' : ''}`}>
                            {step > index + 1 ? <FiCheck /> : index + 1}
                        </div>
                        <span className={`step-label ${step >= index + 1 ? 'active' : ''}`}>
                            {label}
                        </span>
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
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        className="form-input"
                        readOnly
                        placeholder="ID will be generated automatically"
                    />
                </div>

                <div className="form-group">
                    <label>Title*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="Luxury Apartment in Downtown"
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Property Type*</label>
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-select"
                >
                    {Object.entries(propertyCategories).map(([category, types]) => (
                        <optgroup key={category} label={category}>
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
                    <div className="form-row">
                        <div className="form-group">
                            <label>Bedrooms*</label>
                            <input
                                type="number"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                className="form-input"
                                required
                                min="0"
                                placeholder="3"
                            />
                        </div>

                        <div className="form-group">
                            <label>Bathrooms*</label>
                            <input
                                type="number"
                                name="bathrooms"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                className="form-input"
                                required
                                min="0"
                                placeholder="2"
                            />
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
                        className="form-input"
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
                        <select
                            name="furnishing"
                            value={formData.furnishing}
                            onChange={handleChange}
                            className="form-select"
                        >
                            {furnishingOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Transaction Type*</label>
                    <select
                        name="transaction_type"
                        value={formData.transaction_type}
                        onChange={handleChange}
                        className="form-select"
                    >
                        {transactionTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Price*</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="form-input"
                        required
                        min="0"
                        step="0.01"
                        placeholder="1.25"
                    />
                </div>

                <div className="form-group">
                    <label>Price Units*</label>
                    <select
                        name="price_units"
                        value={formData.price_units}
                        onChange={handleChange}
                        className="form-select"
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
            <div className="form-group">
                <label>Address*</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="123 Main Street, City, State"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="form-group">
                    <label>Year Built</label>
                    <input
                        type="number"
                        name="year_built"
                        value={formData.year_built}
                        onChange={handleChange}
                        className="form-input"
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
                    className="form-input"
                    placeholder="ABC Constructions"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Describe the property features, location advantages, etc."
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
                            className={`amenity-pill ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
                            onClick={() => toggleAmenity(amenity)}
                        >
                            {amenity}
                            {formData.amenities.includes(amenity) && <FiCheck />}
                        </div>
                    ))}
                </div>
                {formData.amenities.length > 0 && (
                    <div className="selected-amenities">
                        <label>Selected Amenities</label>
                        <div className="amenity-tags">
                            {formData.amenities.map(amenity => (
                                <span key={amenity} className="amenity-tag">{amenity}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );

    // Step 5: Preview
    const renderStep5 = () => (
        <>
            <div className="preview-section">
                <h3>Basic Information</h3>
                <div className="form-row">
                    <div className="form-group">
                        <div className="preview-label">Property ID</div>
                        <div className="preview-value">{formData.id || '-'}</div>
                    </div>
                    <div className="form-group">
                        <div className="preview-label">Title</div>
                        <div className="preview-value">{formData.title || '-'}</div>
                    </div>
                </div>
                <div className="preview-label">Property Type</div>
                <div className="preview-value">{formData.type}</div>
            </div>

            <div className="preview-section">
                <h3>Property Details</h3>
                <div className="form-row">
                    <div className="form-group">
                        <div className="preview-label">Bedrooms</div>
                        <div className="preview-value">{formData.bedrooms || '-'}</div>
                    </div>
                    <div className="form-group">
                        <div className="preview-label">Bathrooms</div>
                        <div className="preview-value">{formData.bathrooms || '-'}</div>
                    </div>
                    <div className="form-group">
                        <div className="preview-label">Area</div>
                        <div className="preview-value">{formData.area_sqft ? `${formData.area_sqft} sqft` : '-'}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <div className="preview-label">Furnishing</div>
                        <div className="preview-value">{formData.furnishing}</div>
                    </div>
                    <div className="form-group">
                        <div className="preview-label">Transaction Type</div>
                        <div className="preview-value">{formData.transaction_type}</div>
                    </div>
                </div>
                <div className="preview-label">Price</div>
                <div className="preview-value">{formData.price ? `${formData.price} ${formData.price_units}` : '-'}</div>
            </div>

            <div className="preview-section">
                <h3>Location</h3>
                <div className="preview-label">Address</div>
                <div className="preview-value">{formData.address || '-'}</div>
                <div className="form-row">
                    <div className="form-group">
                        <div className="preview-label">Builder</div>
                        <div className="preview-value">{formData.builder || '-'}</div>
                    </div>
                    <div className="form-group">
                        <div className="preview-label">Year Built</div>
                        <div className="preview-value">{formData.year_built || '-'}</div>
                    </div>
                </div>
                <div className="preview-label">Description</div>
                <div className="preview-value">{formData.description || 'No description provided'}</div>
            </div>

            <div className="preview-section">
                <h3>Amenities</h3>
                {formData.amenities.length > 0 ? (
                    <div className="amenity-tags">
                        {formData.amenities.map(amenity => (
                            <span key={amenity} className="amenity-tag">{amenity}</span>
                        ))}
                    </div>
                ) : (
                    <div className="preview-value">No amenities selected</div>
                )}
            </div>

            <div className="preview-card">
                <div className="preview-card-image">
                    {formData.image ? (
                        <img src={formData.image} alt={formData.title} />
                    ) : (
                        <span>Property Image Preview</span>
                    )}
                </div>
                <div className="preview-card-body">
                    <h3>{formData.title || 'Property Title'}</h3>
                    <div className="preview-card-price">
                        {formData.price ? `${formData.price} ${formData.price_units}` : 'Price not set'}
                    </div>
                    <div className="preview-card-details">
                        {formData.bedrooms && (
                            <div className="preview-card-detail">
                                <FiHome />
                                {formData.bedrooms} Beds
                            </div>
                        )}
                        {formData.bathrooms && (
                            <div className="preview-card-detail">
                                <FiLayers />
                                {formData.bathrooms} Baths
                            </div>
                        )}
                        {formData.area_sqft && (
                            <div className="preview-card-detail">
                                {formData.area_sqft} sqft
                            </div>
                        )}
                    </div>
                    <div className="preview-card-address">
                        {formData.address || 'Address not provided'}
                    </div>
                    {formData.amenities.length > 0 && (
                        <div>
                            <div className="preview-card-amenities-label">
                                Amenities:
                            </div>
                            <div className="amenity-tags">
                                {formData.amenities.slice(0, 5).map(amenity => (
                                    <span key={amenity} className="amenity-tag">{amenity}</span>
                                ))}
                                {formData.amenities.length > 5 && (
                                    <span className="amenity-tag">+{formData.amenities.length - 5} more</span>
                                )}
                            </div>
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
        <div className="modal-overlay">
            <div className="add-property-modal">
                {onClose && (
                    <button onClick={onClose} className="close-btn">
                        <FiX />
                    </button>
                )}

                <h2 className="modal-heading">
                    <FiHome />
                    {editData ? 'Edit Property' : step === 5 ? 'Review Your Property' : 'Add New Property'}
                </h2>

                {renderStepIndicator()}

                {submitSuccess && (
                    <div className="success-message">
                        <FiCheckCircle />
                        {editData ? 'Property updated successfully!' : 'Property added successfully!'}
                    </div>
                )}

                {submitError && (
                    <div className="error-message">
                        <FiXCircle />
                        {submitError}
                    </div>
                )}

                <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                    {renderCurrentStep()}

                    <div className="form-buttons">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="btn btn-secondary"
                            >
                                <FiArrowLeft />
                                Back
                            </button>
                        )}

                        {step < 5 ? (
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Next
                                <FiArrowRight />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        {editData ? 'Updating Property...' : 'Adding Property...'}
                                    </>
                                ) : (
                                    <>
                                        <FiCheckCircle />
                                        {editData ? 'Update Property' : 'Submit Property'}
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </form>

                <style jsx>{`
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
                    
                    .add-property-modal {
                        background-color: white;
                        border-radius: var(--border-radius);
                        max-width: 800px;
                        width: 100%;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                        padding: 2.5rem;
                        position: relative;
                    }
                    
                    .close-btn {
                        position: absolute;
                        top: 1.5rem;
                        right: 1.5rem;
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: var(--gray);
                        font-size: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0.25rem;
                        border-radius: 4px;
                    }
                    
                    .close-btn:hover {
                        background-color: var(--gray-light);
                    }
                    
                    .modal-heading {
                        text-align: center;
                        color: var(--dark);
                        margin-bottom: 2rem;
                        font-size: 1.8rem;
                        font-weight: 700;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                    }
                    
                    /* Step Indicator */
                    .step-indicator {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 2rem;
                        position: relative;
                    }
                    
                    .step-line {
                        position: absolute;
                        height: 2px;
                        background-color: var(--gray-light);
                        top: 15px;
                        left: 0;
                        right: 0;
                        z-index: 1;
                    }
                    
                    .step-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        z-index: 2;
                    }
                    
                    .step-number {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background-color: var(--gray-light);
                        color: var(--gray);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    }
                    
                    .step-number.completed {
                        background-color: var(--secondary);
                        color: white;
                    }
                    
                    .step-number.active {
                        background-color: var(--primary);
                        color: white;
                    }
                    
                    .step-label {
                        font-size: 0.8rem;
                        font-weight: 500;
                        color: var(--gray);
                    }
                    
                    .step-label.active {
                        color: var(--primary);
                    }
                    
                    /* Form Elements */
                    .form-row {
                        display: flex;
                        gap: 1.5rem;
                        margin-bottom: 1.75rem;
                    }
                    
                    .form-group {
                        flex: 1;
                        position: relative;
                    }
                    
                    label {
                        display: block;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                        color: var(--dark);
                        font-size: 0.95rem;
                    }
                    
                    .form-input, .form-select, .form-textarea {
                        width: 100%;
                        padding: 0.85rem 1rem;
                        border: 1px solid var(--gray-light);
                        border-radius: 8px;
                        font-size: 0.95rem;
                        transition: var(--transition);
                        background-color: var(--light);
                    }
                    
                    .form-input:focus, .form-select:focus, .form-textarea:focus {
                        outline: none;
                        border-color: var(--primary);
                        box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent);
                    }
                    
                    .form-textarea {
                        min-height: 100px;
                        resize: vertical;
                    }
                    
                    /* Amenities */
                    .amenities-grid {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                        margin-bottom: 1rem;
                    }
                    
                    .amenity-pill {
                        display: inline-flex;
                        align-items: center;
                        background-color: color-mix(in srgb, var(--primary) 10%, transparent);
                        color: var(--primary);
                        padding: 0.5rem 1rem;
                        border-radius: 9999px;
                        font-size: 0.85rem;
                        font-weight: 500;
                        cursor: pointer;
                        transition: var(--transition);
                    }
                    
                    .amenity-pill:hover {
                        background-color: color-mix(in srgb, var(--primary) 20%, transparent);
                    }
                    
                    .amenity-pill.selected {
                        background-color: var(--primary);
                        color: white;
                    }
                    
                    .selected-amenities {
                        margin-top: 1rem;
                    }
                    
                    .amenity-tags {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                        margin-top: 0.5rem;
                    }
                    
                    .amenity-tag {
                        background-color: var(--primary-light);
                        color: var(--primary);
                        padding: 0.3rem 0.7rem;
                        border-radius: 9999px;
                        font-size: 0.8rem;
                        font-weight: 500;
                    }
                    
                    /* Preview */
                    .preview-section {
                        margin-bottom: 1.5rem;
                        padding-bottom: 1.5rem;
                        border-bottom: 1px solid var(--gray-light);
                    }
                    
                    .preview-section h3 {
                        color: var(--primary);
                        margin-bottom: 1rem;
                    }
                    
                    .preview-label {
                        font-weight: 600;
                        color: var(--gray);
                        margin-bottom: 0.25rem;
                    }
                    
                    .preview-value {
                        margin-bottom: 1rem;
                        color: var(--dark);
                    }
                    
                    .preview-card {
                        border: 1px solid var(--gray-light);
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--shadow);
                        transition: var(--transition);
                    }
                    
                    .preview-card-image {
                        height: 200px;
                        background-color: var(--light);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--gray);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .preview-card-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .preview-card-body {
                        padding: 1.5rem;
                    }
                    
                    .preview-card-body h3 {
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
                    
                    .preview-card-detail {
                        display: flex;
                        align-items: center;
                        gap: 0.25rem;
                        font-size: 0.9rem;
                    }
                    
                    .preview-card-address {
                        color: var(--gray);
                        margin-bottom: 1rem;
                        font-size: 0.9rem;
                    }
                    
                    .preview-card-amenities-label {
                        font-size: 0.9rem;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    }
                    
                    /* Messages */
                    .success-message {
                        background-color: var(--secondary);
                        color: white;
                        padding: 1rem;
                        border-radius: 8px;
                        margin-bottom: 1.5rem;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        font-weight: 500;
                    }
                    
                    .error-message {
                        background-color: var(--danger);
                        color: white;
                        padding: 1rem;
                        border-radius: 8px;
                        margin-bottom: 1.5rem;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        font-weight: 500;
                    }
                    
                    /* Buttons */
                    .form-buttons {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 2rem;
                        gap: 1rem;
                    }
                    
                    .btn {
                        padding: 1rem 1.5rem;
                        border-radius: 8px;
                        border: none;
                        cursor: pointer;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        transition: var(--transition);
                        font-size: 1rem;
                    }
                    
                    .btn-primary {
                        background-color: var(--primary);
                        color: white;
                    }
                    
                    .btn-primary:hover:not(.btn-disabled) {
                        background-color: #4F46E5;
                    }
                    
                    .btn-secondary {
                        background-color: var(--gray-light);
                        color: var(--dark);
                    }
                    
                    .btn-secondary:hover {
                        background-color: #D1D5DB;
                    }
                    
                    .btn-disabled {
                        background-color: var(--gray);
                        cursor: not-allowed;
                    }
                    
                    .spinner {
                        width: 16px;
                        height: 16px;
                        border: 2px solid transparent;
                        border-top: 2px solid white;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    
                    /* Responsive */
                    @media (max-width: 768px) {
                        .add-property-modal {
                            padding: 1.5rem;
                        }
                        
                        .form-row {
                            flex-direction: column;
                            gap: 0;
                        }
                        
                        .step-indicator {
                            gap: 0.5rem;
                        }
                        
                        .step-label {
                            font-size: 0.7rem;
                        }
                        
                        .form-buttons {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};