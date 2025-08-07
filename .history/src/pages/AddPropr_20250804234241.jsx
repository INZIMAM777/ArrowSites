import { useState } from 'react';
import { FiHome, FiMapPin, FiDollarSign, FiLayers, FiCheck, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Addp = () => {
  // Form steps
  const [step, setStep] = useState(1);
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Location
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
  });

  // Available options
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];
  const localities = {
    Mumbai: ['Andheri', 'Bandra', 'Powai', 'Thane', 'Dadar'],
    Delhi: ['Dwarka', 'Rohini', 'Saket', 'Vasant Kunj', 'Mayur Vihar'],
    Bangalore: ['Whitefield', 'Electronic City', 'Koramangala', 'Indiranagar', 'Marathahalli']
  };
  const propertyTypes = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Independent House'];
  const furnishingOptions = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished'];
  const possessionOptions = ['Ready to Move', 'Under Construction', 'New Launch'];
  const amenitiesList = [
    'Swimming Pool', 'Gym', 'Park', 'Power Backup', 'Lift', 
    'Security', 'Club House', 'Children Play Area', 'Parking'
  ];

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send data to your backend
    alert('Property submitted successfully!');
  };

  // Progress steps
  const steps = [
    { number: 1, title: 'Location', icon: <FiMapPin /> },
    { number: 2, title: 'Basic Details', icon: <FiHome /> },
    { number: 3, title: 'Pricing', icon: <FiDollarSign /> },
    { number: 4, title: 'Additional Details', icon: <FiLayers /> }
  ];

  // Navigation functions
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="property-form-container">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        {steps.map((stepItem, index) => (
          <div key={stepItem.number} className="progress-step">
            <div className={`step-icon ${step >= stepItem.number ? 'active' : ''}`}>
              {step > stepItem.number ? <FiCheck /> : stepItem.icon}
            </div>
            <span className={`step-title ${step >= stepItem.number ? 'active' : ''}`}>
              {stepItem.title}
            </span>
          </div>
        ))}
        <div className="progress-line">
          <div 
            className="progress-fill" 
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Location */}
        {step === 1 && (
          <div className="form-step">
            <h2 className="step-header">
              <FiMapPin /> Property Location
            </h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>City*</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Locality*</label>
                <select
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  required
                  disabled={!formData.city}
                >
                  <option value="">Select Locality</option>
                  {formData.city && localities[formData.city]?.map(locality => (
                    <option key={locality} value={locality}>{locality}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Project/Society (Optional)</label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Enter project or society name"
              />
            </div>
            
            <div className="form-group">
              <label>Address*</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete address"
                rows="3"
                required
              />
            </div>
            
            <div className="form-navigation">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.city || !formData.locality || !formData.address}
                className="next-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Basic Details */}
        {step === 2 && (
          <div className="form-step">
            <h2 className="step-header">
              <FiHome /> Basic Details
            </h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Property Type*</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Bedrooms*</label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
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
              
              <div className="form-group">
                <label>Bathrooms*</label>
                <select
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3+">3+</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Super Area*</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area"
                    required
                  />
                  <select
                    name="areaUnit"
                    value={formData.areaUnit}
                    onChange={handleChange}
                  >
                    <option value="sq.ft.">sq.ft.</option>
                    <option value="sq.m.">sq.m.</option>
                    <option value="sq.yard">sq.yard</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Floor*</label>
                <input
                  type="number"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  placeholder="Floor number"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Total Floors*</label>
                <input
                  type="number"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  placeholder="Total floors in building"
                  required
                />
              </div>
            </div>
            
            <div className="form-navigation between">
              <button
                type="button"
                onClick={prevStep}
                className="back-button"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.bedrooms || !formData.bathrooms || !formData.area || !formData.floor || !formData.totalFloors}
                className="next-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pricing */}
        {step === 3 && (
          <div className="form-step">
            <h2 className="step-header">
              <FiDollarSign /> Pricing Details
            </h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Transaction Type*</label>
                <select
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  required
                >
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>
                  {formData.transactionType === 'Sale' ? 'Expected Price*' : 'Monthly Rent*'}
                </label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder={formData.transactionType === 'Sale' ? 'Price' : 'Rent'}
                    required
                  />
                  <select
                    name="priceUnit"
                    value={formData.priceUnit}
                    onChange={handleChange}
                  >
                    {formData.transactionType === 'Sale' ? (
                      <>
                        <option value="Lac">Lac</option>
                        <option value="Cr">Cr</option>
                      </>
                    ) : (
                      <>
                        <option value="/month">/month</option>
                        <option value="/year">/year</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              
              {formData.transactionType === 'Rent' && (
                <div className="form-group">
                  <label>Maintenance (Optional)</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      name="maintenance"
                      value={formData.maintenance}
                      onChange={handleChange}
                      placeholder="Maintenance"
                    />
                    <select
                      name="maintenanceUnit"
                      value={formData.maintenanceUnit}
                      onChange={handleChange}
                    >
                      <option value="per month">per month</option>
                      <option value="per year">per year</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="form-navigation between">
              <button
                type="button"
                onClick={prevStep}
                className="back-button"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.price}
                className="next-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Additional Details */}
        {step === 4 && (
          <div className="form-step">
            <h2 className="step-header">
              <FiLayers /> Additional Details
            </h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Furnishing*</label>
                <select
                  name="furnishing"
                  value={formData.furnishing}
                  onChange={handleChange}
                  required
                >
                  {furnishingOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Possession Status*</label>
                <select
                  name="possessionStatus"
                  value={formData.possessionStatus}
                  onChange={handleChange}
                  required
                >
                  {possessionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              {formData.possessionStatus === 'Ready to Move' && (
                <div className="form-group">
                  <label>Age of Property (Years)</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age in years"
                  />
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your property in detail"
                rows="4"
              />
            </div>
            
            <div className="form-group">
              <label>Amenities</label>
              <div className="amenities-grid">
                {amenitiesList.map(amenity => (
                  <div key={amenity} className="amenity-item">
                    <input
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                    />
                    <label htmlFor={`amenity-${amenity}`}>
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="form-navigation between">
              <button
                type="button"
                onClick={prevStep}
                className="back-button"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="submit"
                className="submit-button"
              >
                Submit Property <FiCheck />
              </button>
            </div>
          </div>
        )}
      </form>

      <style jsx>{`
        .property-form-container {
          max-width: 56rem;
          margin: 0 auto;
          padding: 1rem;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
        }
        
        /* Progress bar styles */
        .progress-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }
        
        .step-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e5e7eb;
          color: #4b5563;
        }
        
        .step-icon.active {
          background-color: #2563eb;
          color: white;
        }
        
        .step-title {
          font-size: 0.875rem;
          margin-top: 0.5rem;
          color: #6b7280;
        }
        
        .step-title.active {
          font-weight: 500;
          color: #111827;
        }
        
        .progress-line {
          position: absolute;
          top: 1.25rem;
          left: 0;
          right: 0;
          height: 0.125rem;
          background-color: #e5e7eb;
          z-index: -1;
        }
        
        .progress-fill {
          height: 100%;
          background-color: #2563eb;
          transition: all 0.3s ease;
        }
        
        /* Form styles */
        .form-step {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .step-header {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }
        
        .form-group select,
        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          transition: border-color 0.15s ease;
        }
        
        .form-group select:focus,
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-group textarea {
          min-height: 5rem;
          resize: vertical;
        }
        
        .input-with-unit {
          display: flex;
        }
        
        .input-with-unit input {
          flex: 3;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        
        .input-with-unit select {
          flex: 1;
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        
        /* Form navigation */
        .form-navigation {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
        }
        
        .form-navigation.between {
          justify-content: space-between;
        }
        
        .back-button {
          background-color: #e5e7eb;
          color: #374151;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }
        
        .next-button {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }
        
        .next-button:disabled {
          background-color: #93c5fd;
          cursor: not-allowed;
        }
        
        .submit-button {
          background-color: #059669;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }
        
        .submit-button:hover {
          background-color: #047857;
        }
        
        /* Amenities grid */
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .amenity-item {
          display: flex;
          align-items: center;
        }
        
        .amenity-item input {
          height: 1rem;
          width: 1rem;
          color: #3b82f6;
          border-color: #d1d5db;
          border-radius: 0.25rem;
        }
        
        .amenity-item label {
          margin-left: 0.5rem;
          font-size: 0.875rem;
          color: #374151;
        }
      `}</style>
    </div>
  );
};

