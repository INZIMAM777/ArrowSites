// AddProperty.jsx
import { useState, useEffect } from 'react';
import {
  FiHome, FiLayers, FiCheckCircle,
  FiXCircle, FiArrowRight, FiArrowLeft, FiCheck, FiX
} from 'react-icons/fi';
import { useFirebase } from '../context/FirebaseContext';

export const AddProp = ({ onClose, editData }) => {
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

  // ------------------------------
  // Property categories and prefixes
  // ------------------------------
  const propertyCategories = {
    'Residential Properties': [
      'Residential Flat', 'Residential Floors', 'Residential plot',
      'Residential Land', 'Residential Villa', 'Residential Penthouse',
      'Residential Service Apartment'
    ],
    'Commercial Properties': [
      'Commercial Shop', 'Commercial Office Space',
      'Commercial Guest House', 'Commercial Service Apartment'
    ],
    'Industrial Properties': [
      'Industrial Factory', 'Industrial Plot',
      'Industrial Land for Warehouse/Industry'
    ],
    'Warehouse Properties': [
      'Warehouse - Commercial', 'Warehouse - Agro',
      'Warehouse - Transport', 'Warehouse Land / Industrial Land'
    ],
    'Farm House Properties': [
      'Farm House - Ready', 'Farm House Land'
    ]
  };

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

  // ------------------------------
  // Hooks
  // ------------------------------
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    fetchExistingIds();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchExistingIds = async () => {
    try {
      const ids = await presentId();
      setExistingIds(ids);
    } catch (error) {
      console.error('Error fetching existing IDs:', error);
    }
  };

  // ------------------------------
  // Options
  // ------------------------------
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

  // ------------------------------
  // Functions
  // ------------------------------
  const generateUniqueId = (propertyType) => {
    const prefix = propertyPrefixes[propertyType];
    if (!prefix) return '';

    const prefixIds = existingIds.filter(id => id.startsWith(prefix));
    let maxNum = 0;

    prefixIds.forEach(id => {
      const numPart = id.split('-').pop();
      const num = parseInt(numPart, 10);
      if (!isNaN(num) && num > maxNum) maxNum = num;
    });

    const newNum = maxNum + 1;
    return `${prefix}-${newNum.toString().padStart(3, '0')}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'type') {
      const newId = generateUniqueId(value);
      setFormData(prev => ({ ...prev, [name]: value, id: newId }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleAmenity = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await handleListing(formData);
      setSubmitSuccess(true);
      setExistingIds(prev => [...prev, formData.id]);

      await getLists();

      setTimeout(() => {
        setSubmitSuccess(false);
        setStep(1);

        if (editData && onClose) {
          onClose();
          return;
        }

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
      console.error('Error adding property: ', error);
      setSubmitError('Failed to add property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // ------------------------------
  // (Steps render functions remain same as your original code)
  // ------------------------------
  // renderStep1(), renderStep2(), renderStep3(), renderStep4(), renderStep5()
  // (I didn’t change them except formatting)
  // ------------------------------

  // ------------------------------
  // Return
  // ------------------------------
  return (
    <div>
      {/* Header + Close button */}
      {onClose && (
        <button onClick={onClose}>
          <FiX size={24} />
        </button>
      )}

      <h2>
        <FiHome size={24} />
        {editData ? 'Edit Property' : step === 5 ? 'Review Your Property' : 'Add New Property'}
      </h2>

      {submitSuccess && (
        <div>
          <FiCheckCircle size={18} />
          {editData ? 'Property updated successfully!' : 'Property added successfully!'}
        </div>
      )}

      {submitError && (
        <div>
          <FiXCircle size={18} />
          {submitError}
        </div>
      )}

      <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        {/* Your renderCurrentStep() goes here */}
      </form>
    </div>
  );
};
