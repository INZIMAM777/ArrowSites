import { useState, useEffect } from 'react';
import { FiHome, FiMapPin, FiDollarSign, FiLayers, FiCheck, FiChevronRight, FiChevronLeft, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { db, collection, addDoc } from '../utils/firebase';

export const AddProp= () => {
  // Form steps
  const [step, setStep] = useState(1);
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

  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Location
    id: '',
    city: '',
    locality: '',
    project: '',
    address: '',
    
    // Step 2: Basic Details
    propertyType: 'Apartment',
    bedrooms: '',
    bathrooms: '',
    area: '',
    areaUnit: 'sq.ft.',
    floor: '',
    totalFloors: '',
    
    // Step 3: Pricing
    price: '',
    priceUnit: 'Lac',
    maintenance: '',
    maintenanceUnit: 'per month',
    transactionType: 'Sale',
    
    // Step 4: Additional Details
    furnishing: 'Unfurnished',
    possessionStatus: 'Ready to Move',
    age: '',
    description: '',
    amenities: [],
    image: '',
    builder: '',
    yearBuilt: '',
    createdAt: new Date().toISOString()
  });

  // Available options
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];
  const localities = {
    Mumbai: ['Andheri', 'Bandra', 'Powai', 'Thane', 'Dadar'],
    Delhi: ['Dwarka', 'Rohini', 'Saket', 'Vasant Kunj', 'Mayur Vihar'],
    Bangalore: ['Whitefield', 'Electronic City', 'Koramangala', 'Indiranagar', 'Marathahalli']
  };
  const propertyTypes = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Independent House'];
  const furnishingOptions = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished', 'Luxury Furnished'];
  const possessionOptions = ['Ready to Move', 'Under Construction', 'New Launch'];
  const amenitiesList = [
    'Swimming Pool', 'Gym', '24/7 Security', 'Clubhouse',
    'Private Garden', 'Modular Kitchen', 'Home Theater',
    'Parking', 'Power Backup', 'Lift', 'Cafeteria',
    'High-Speed Elevators', 'Private Terrace', 'Jacuzzi',
    'Smart Home', 'Lawn', 'Servant Quarters'
  ];
  const priceUnits = {
    Sale: ['Lac', 'Cr'],
    Rent: ['/month', '/year']
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle multi-select amenities
  const handleAmenityChange = (amenity) => {
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      await addDoc(collection(db, "properties"), formData);
      setSubmitSuccess(true);
      // Reset form or redirect after successful submission
      setTimeout(() => {
        setSubmitSuccess(false);
        setStep(1);
        setFormData({
          id: '',
          city: '',
          locality: '',
          project: '',
          address: '',
          propertyType: 'Apartment',
          bedrooms: '',
          bathrooms: '',
          area: '',
          areaUnit: 'sq.ft.',
          floor: '',
          totalFloors: '',
          price: '',
          priceUnit: 'Lac',
          maintenance: '',
          maintenanceUnit: 'per month',
          transactionType: 'Sale',
          furnishing: 'Unfurnished',
          possessionStatus: 'Ready to Move',
          age: '',
          description: '',
          amenities: [],
          image: '',
          builder: '',
          yearBuilt: '',
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

  // Progress steps
  const steps = [
    { number: 1, title: 'Location', icon: <FiMapPin /> },
    { number: 2, title: 'Basic Details', icon: <FiHome /> },
    { number: 3, title: 'Pricing', icon: <FiDollarSign /> },
    { number: 4, title: 'Additional', icon: <FiLayers /> }
  ];

  // Navigation functions
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="property-form-container" style={isMobile ? mobileStyles.container : desktopStyles.container}>
      {/* Progress Bar */}
      <div className="progress-bar-container" style={styles.progressBarContainer}>
        {steps.map((stepItem) => (
          <div key={stepItem.number} className="progress-step" style={styles.progressStep}>
            <div className={`step-icon ${step >= stepItem.number ? 'active' : ''}`} 
                 style={step >= stepItem.number ? styles.stepIconActive : styles.stepIcon}>
              {step > stepItem.number ? <FiCheck /> : stepItem.icon}
            </div>
            {!isMobile && (
              <span className={`step-title ${step >= stepItem.number ? 'active' : ''}`} 
                    style={step >= stepItem.number ? styles.stepTitleActive : styles.stepTitle}>
                {stepItem.title}
              </span>
            )}
          </div>
        ))}
        <div className="progress-line" style={styles.progressLine}>
          <div className="progress-fill" 
               style={{ ...styles.progressFill, width: `${(step - 1) * 33.33}%` }}></div>
        </div>
      </div>

      {/* Status Messages */}
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

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Location */}
        {step === 1 && (
          <div className="form-step">
            <h2 className="step-header" style={styles.stepHeader}>
              <FiMapPin /> Property Location
            </h2>
            
            <div className="form-grid" style={isMobile ? styles.formGridMobile : styles.formGrid}>
              <div className="form-group" style={styles.formGroup}>
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

              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>City*</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Locality*</label>
                <select
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  style={styles.select}
                  required
                  disabled={!formData.city}
                >
                  <option value="">Select Locality</option>
                  {formData.city && localities[formData.city]?.map(locality => (
                    <option key={locality} value={locality}>{locality}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Project/Society (Optional)</label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter project or society name"
                />
              </div>
            </div>
            
            <div className="form-group" style={styles.formGroup}>
              <label style={styles.label}>Address*</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={{...styles.input, ...styles.textarea}}
                placeholder="Enter complete address"
                required
              />
            </div>
            
            <div className="form-navigation" style={styles.formNavigation}>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.id || !formData.city || !formData.locality || !formData.address}
                style={styles.nextButton}
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Basic Details */}
        {step === 2 && (
          <div className="form-step">
            <h2 className="step-header" style={styles.stepHeader}>
              <FiHome /> Basic Details
            </h2>
            
            <div className="form-grid" style={isMobile ? styles.formGridMobile : styles.formGrid}>
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Property Type*</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              {(formData.propertyType === 'Apartment' || formData.propertyType === 'Villa') && (
                <>
                  <div className="form-group" style={styles.formGroup}>
                    <label style={styles.label}>Bedrooms*</label>
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      style={styles.select}
                      required
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  
                  <div className="form-group" style={styles.formGroup}>
                    <label style={styles.label}>Bathrooms*</label>
                    <select
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      style={styles.select}
                      required
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                </>
              )}
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Super Area*</label>
                <div style={styles.inputWithUnit}>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Area"
                    required
                  />
                  <select
                    name="areaUnit"
                    value={formData.areaUnit}
                    onChange={handleChange}
                    style={styles.unitSelect}
                  >
                    <option value="sq.ft.">sq.ft.</option>
                    <option value="sq.m.">sq.m.</option>
                    <option value="sq.yard">sq.yard</option>
                  </select>
                </div>
              </div>
              
              {formData.propertyType !== 'Plot' && (
                <>
                  <div className="form-group" style={styles.formGroup}>
                    <label style={styles.label}>Floor*</label>
                    <input
                      type="number"
                      name="floor"
                      value={formData.floor}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Floor number"
                      required
                    />
                  </div>
                  
                  <div className="form-group" style={styles.formGroup}>
                    <label style={styles.label}>Total Floors*</label>
                    <input
                      type="number"
                      name="totalFloors"
                      value={formData.totalFloors}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Total floors in building"
                      required
                    />
                  </div>
                </>
              )}
            </div>
            
            <div className="form-navigation between" style={styles.formNavigationBetween}>
              <button
                type="button"
                onClick={prevStep}
                style={styles.backButton}
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  !formData.area || 
                  (formData.propertyType !== 'Plot' && (!formData.floor || !formData.totalFloors)) ||
                  ((formData.propertyType === 'Apartment' || formData.propertyType === 'Villa') && 
                    (!formData.bedrooms || !formData.bathrooms))
                }
                style={styles.nextButton}
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pricing */}
        {step === 3 && (
          <div className="form-step">
            <h2 className="step-header" style={styles.stepHeader}>
              <FiDollarSign /> Pricing Details
            </h2>
            
            <div className="form-grid" style={isMobile ? styles.formGridMobile : styles.formGrid}>
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Transaction Type*</label>
                <select
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>
                  {formData.transactionType === 'Sale' ? 'Expected Price*' : 'Monthly Rent*'}
                </label>
                <div style={styles.inputWithUnit}>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder={formData.transactionType === 'Sale' ? 'Price' : 'Rent'}
                    required
                  />
                  <select
                    name="priceUnit"
                    value={formData.priceUnit}
                    onChange={handleChange}
                    style={styles.unitSelect}
                  >
                    {priceUnits[formData.transactionType].map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {formData.transactionType === 'Rent' && (
                <div className="form-group" style={styles.formGroup}>
                  <label style={styles.label}>Maintenance (Optional)</label>
                  <div style={styles.inputWithUnit}>
                    <input
                      type="number"
                      name="maintenance"
                      value={formData.maintenance}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Maintenance"
                    />
                    <select
                      name="maintenanceUnit"
                      value={formData.maintenanceUnit}
                      onChange={handleChange}
                      style={styles.unitSelect}
                    >
                      <option value="per month">per month</option>
                      <option value="per year">per year</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="form-navigation between" style={styles.formNavigationBetween}>
              <button
                type="button"
                onClick={prevStep}
                style={styles.backButton}
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.price}
                style={styles.nextButton}
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Additional Details */}
        {step === 4 && (
          <div className="form-step">
            <h2 className="step-header" style={styles.stepHeader}>
              <FiLayers /> Additional Details
            </h2>
            
            <div className="form-grid" style={isMobile ? styles.formGridMobile : styles.formGrid}>
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Furnishing*</label>
                <select
                  name="furnishing"
                  value={formData.furnishing}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  {furnishingOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Possession Status*</label>
                <select
                  name="possessionStatus"
                  value={formData.possessionStatus}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  {possessionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              {formData.possessionStatus === 'Ready to Move' && (
                <div className="form-group" style={styles.formGroup}>
                  <label style={styles.label}>Age of Property (Years)</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Age in years"
                  />
                </div>
              )}
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Builder (Optional)</label>
                <input
                  type="text"
                  name="builder"
                  value={formData.builder}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Builder name"
                />
              </div>
              
              <div className="form-group" style={styles.formGroup}>
                <label style={styles.label}>Year Built</label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Construction year"
                  min="1800"
                  max={new Date().getFullYear()}
                />
              </div>
              
              <div className="form-group" style={styles.formGroup}>
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
            </div>
            
            <div className="form-group" style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{...styles.input, ...styles.textarea}}
                placeholder="Describe your property in detail"
              />
            </div>
            
            <div className="form-group" style={styles.formGroup}>
              <label style={styles.label}>Amenities</label>
              <div style={styles.amenitiesGrid}>
                {amenitiesList.map(amenity => (
                  <div key={amenity} style={styles.amenityItem}>
                    <input
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      style={styles.checkbox}
                    />
                    <label htmlFor={`amenity-${amenity}`} style={styles.amenityLabel}>
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
              {formData.amenities.length > 0 && (
                <div style={styles.selectedAmenities}>
                  Selected: {formData.amenities.join(', ')}
                </div>
              )}
            </div>
            
            <div className="form-navigation between" style={styles.formNavigationBetween}>
              <button
                type="button"
                onClick={prevStep}
                style={styles.backButton}
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={isSubmitting ? styles.submitButtonDisabled : styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiCheckCircle /> Submit Property
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

// Styles
const baseStyles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: "'Inter', sans-serif"
  },
  progressBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    position: 'relative'
  },
  progressStep: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10
  },
  stepIcon: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
    color: '#4b5563'
  },
  stepIconActive: {
    backgroundColor: '#2563eb',
    color: 'white'
  },
  stepTitle: {
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    color: '#6b7280'
  },
  stepTitleActive: {
    fontWeight: '500',
    color: '#111827'
  },
  progressLine: {
    position: 'absolute',
    top: '1.25rem',
    left: 0,
    right: 0,
    height: '0.125rem',
    backgroundColor: '#e5e7eb',
    zIndex: -1
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    transition: 'all 0.3s ease'
  },
  stepHeader: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  },
  formGridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem'
  },
  formGroup: {
    marginBottom: '1rem'
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
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    backgroundColor: '#f8fafc'
  },
  textarea: {
    minHeight: '100px',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    backgroundColor: '#f8fafc',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231a365d%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.7rem top 50%',
    backgroundSize: '0.65rem auto'
  },
  inputWithUnit: {
    display: 'flex'
  },
  unitSelect: {
    flex: 1,
    borderLeft: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  formNavigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1.5rem'
  },
  formNavigationBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem'
  },
  backButton: {
    backgroundColor: '#e5e7eb',
    color: '#374151',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '600'
  },
  nextButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '600'
  },
  nextButtonDisabled: {
    backgroundColor: '#93c5fd',
    cursor: 'not-allowed'
  },
  submitButton: {
    backgroundColor: '#059669',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '600'
  },
  submitButtonDisabled: {
    backgroundColor: '#a0aec0',
    cursor: 'not-allowed'
  },
  amenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '0.75rem',
    marginTop: '0.5rem'
  },
  amenityItem: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    height: '1rem',
    width: '1rem',
    marginRight: '0.5rem'
  },
  amenityLabel: {
    fontSize: '0.9rem',
    color: '#374151'
  },
  selectedAmenities: {
    fontSize: '0.8rem',
    color: '#4b5563',
    marginTop: '0.5rem',
    fontStyle: 'italic'
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
  }
};

const desktopStyles = {
  container: {
    ...baseStyles.container
  }
};

const mobileStyles = {
  container: {
    ...baseStyles.container,
    padding: '1.5rem',
    margin: '1rem auto'
  }
};

const styles = {
  ...baseStyles,
  ...desktopStyles,
  ...mobileStyles
};