import { useState } from 'react';
import { FiHome, FiMapPin, FiDollarSign, FiLayers, FiCheck, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const PropertyForm = () => {
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
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-8 relative">
        {steps.map((stepItem, index) => (
          <div key={stepItem.number} className="flex flex-col items-center z-10">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${step >= stepItem.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {step > stepItem.number ? <FiCheck /> : stepItem.icon}
            </div>
            <span className={`text-sm mt-2 ${step >= stepItem.number ? 'font-medium' : 'text-gray-500'}`}>
              {stepItem.title}
            </span>
          </div>
        ))}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-1">
          <div 
            className="h-1 bg-blue-600 transition-all duration-300" 
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Location */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiMapPin /> Property Location
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Locality*</label>
                <select
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project/Society (Optional)</label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Enter project or society name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete address"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.city || !formData.locality || !formData.address}
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:bg-blue-400"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Basic Details */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiHome /> Basic Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type*</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms*</label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms*</label>
                <select
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3+">3+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Super Area*</label>
                <div className="flex">
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area"
                    className="w-3/4 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <select
                    name="areaUnit"
                    value={formData.areaUnit}
                    onChange={handleChange}
                    className="w-1/4 p-3 border border-l-0 border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="sq.ft.">sq.ft.</option>
                    <option value="sq.m.">sq.m.</option>
                    <option value="sq.yard">sq.yard</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Floor*</label>
                <input
                  type="number"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  placeholder="Floor number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Floors*</label>
                <input
                  type="number"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  placeholder="Total floors in building"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md flex items-center gap-2"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.bedrooms || !formData.bathrooms || !formData.area || !formData.floor || !formData.totalFloors}
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:bg-blue-400"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pricing */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiDollarSign /> Pricing Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type*</label>
                <select
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {formData.transactionType === 'Sale' ? 'Expected Price*' : 'Monthly Rent*'}
                </label>
                <div className="flex">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder={formData.transactionType === 'Sale' ? 'Price' : 'Rent'}
                    className="w-3/4 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <select
                    name="priceUnit"
                    value={formData.priceUnit}
                    onChange={handleChange}
                    className="w-1/4 p-3 border border-l-0 border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance (Optional)</label>
                  <div className="flex">
                    <input
                      type="number"
                      name="maintenance"
                      value={formData.maintenance}
                      onChange={handleChange}
                      placeholder="Maintenance"
                      className="w-3/4 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select
                      name="maintenanceUnit"
                      value={formData.maintenanceUnit}
                      onChange={handleChange}
                      className="w-1/4 p-3 border border-l-0 border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="per month">per month</option>
                      <option value="per year">per year</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md flex items-center gap-2"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.price}
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:bg-blue-400"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Additional Details */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiLayers /> Additional Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Furnishing*</label>
                <select
                  name="furnishing"
                  value={formData.furnishing}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {furnishingOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Possession Status*</label>
                <select
                  name="possessionStatus"
                  value={formData.possessionStatus}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {possessionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              {formData.possessionStatus === 'Ready to Move' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age of Property (Years)</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age in years"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your property in detail"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                {amenitiesList.map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-gray-700">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md flex items-center gap-2"
              >
                <FiChevronLeft /> Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700"
              >
                Submit Property <FiCheck />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PropertyForm;