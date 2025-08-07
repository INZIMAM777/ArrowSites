// AddProperty.jsx
import { useState, useEffect } from 'react';
import { db, collection, addDoc } from '../utils/firebase';

export const AddProperty = () => {
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        handleResize();
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

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Add New Property</h2>
                <p className="text-gray-500 mt-2">Fill in the details to list a new property</p>
            </div>
            
            {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200">
                    Property added successfully!
                </div>
            )}
            
            {submitError && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200">
                    {submitError}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Property ID*</label>
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                            placeholder="PR-1001"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Title*</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                            placeholder="Luxury Apartment with Sea View"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Property Type*</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                        >
                            {propertyTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Furnishing*</label>
                        <select
                            name="furnishing"
                            value={formData.furnishing}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                        >
                            {furnishingOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {(formData.type === 'Apartment' || formData.type === 'Villa' || 
                  formData.type === 'Independent Floor' || formData.type === 'Farmhouse') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Bedrooms*</label>
                            <input
                                type="number"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                                min="1"
                                placeholder="3"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Bathrooms*</label>
                            <input
                                type="number"
                                name="bathrooms"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                                min="1"
                                placeholder="2"
                            />
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Area (sqft)*</label>
                        <input
                            type="number"
                            name="area_sqft"
                            value={formData.area_sqft}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                            min="1"
                            placeholder="1500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Transaction Type*</label>
                        <select
                            name="transaction_type"
                            value={formData.transaction_type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                        >
                            {transactionTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Price*</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                {formData.price_units === 'crore' ? '₹' : formData.price_units === 'lakh/month' ? '₹' : '$'}
                            </span>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                                min="0"
                                step="0.01"
                                placeholder={formData.price_units === 'crore' ? '1.25' : formData.price_units === 'lakh/month' ? '50' : '1500'}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Price Units*</label>
                        <select
                            name="price_units"
                            value={formData.price_units}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                        >
                            {priceUnits.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Address*</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                        placeholder="123 Main Street, City, State"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Year Built</label>
                        <input
                            type="number"
                            name="year_built"
                            value={formData.year_built}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            min="1800"
                            max={new Date().getFullYear()}
                            placeholder="2020"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Builder (optional)</label>
                    <input
                        type="text"
                        name="builder"
                        value={formData.builder}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="ABC Constructions"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Amenities</label>
                    <div className="relative">
                        <select
                            multiple
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleAmenitiesChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white h-auto min-h-[120px]"
                        >
                            {amenityOptions.map(amenity => (
                                <option key={amenity} value={amenity}>{amenity}</option>
                            ))}
                        </select>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        {formData.amenities.length > 0 ? (
                            <span>Selected: <span className="font-medium">{formData.amenities.join(', ')}</span></span>
                        ) : (
                            'No amenities selected (Hold Ctrl/Cmd to select multiple)'
                        )}
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Adding Property...
                            </span>
                        ) : 'Add Property'}
                    </button>
                </div>
            </form>
        </div>
    );
};