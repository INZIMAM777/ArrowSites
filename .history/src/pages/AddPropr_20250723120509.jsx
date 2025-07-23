import { useState } from "react";

export const AddProp= () => {
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
        // Here you would typically send the data to an API
        console.log('Submitted property:', formData);
        alert('Property added successfully!');
    };

    return (
        <div className="add-property-form">
            <h2>Add New Property</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Property ID:</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={formData.id} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Property Type:</label>
                    <select name="type" value={formData.type} onChange={handleChange}>
                        {propertyTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {(formData.type === 'Apartment' || formData.type === 'Villa' || formData.type === 'Independent Floor' || formData.type === 'Farmhouse') && (
                    <>
                        <div className="form-group">
                            <label>Bedrooms:</label>
                            <input 
                                type="number" 
                                name="bedrooms" 
                                value={formData.bedrooms} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label>Bathrooms:</label>
                            <input 
                                type="number" 
                                name="bathrooms" 
                                value={formData.bathrooms} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </>
                )}

                <div className="form-group">
                    <label>Area (sqft):</label>
                    <input 
                        type="number" 
                        name="area_sqft" 
                        value={formData.area_sqft} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Transaction Type:</label>
                    <select name="transaction_type" value={formData.transaction_type} onChange={handleChange}>
                        {transactionTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Price Units:</label>
                    <select name="price_units" value={formData.price_units} onChange={handleChange}>
                        {priceUnits.map(unit => (
                            <option key={unit} value={unit}>{unit}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Furnishing:</label>
                    <select name="furnishing" value={formData.furnishing} onChange={handleChange}>
                        {furnishingOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Amenities (Select multiple):</label>
                    <select 
                        multiple 
                        name="amenities" 
                        value={formData.amenities} 
                        onChange={handleAmenitiesChange}
                    >
                        <option value="Swimming Pool">Swimming Pool</option>
                        <option value="Gym">Gym</option>
                        <option value="24/7 Security">24/7 Security</option>
                        <option value="Clubhouse">Clubhouse</option>
                        <option value="Private Garden">Private Garden</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Home Theater">Home Theater</option>
                        <option value="Parking">Parking</option>
                        <option value="Power Backup">Power Backup</option>
                        <option value="Lift">Lift</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Image URL:</label>
                    <input 
                        type="text" 
                        name="image" 
                        value={formData.image} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Builder (optional):</label>
                    <input 
                        type="text" 
                        name="builder" 
                        value={formData.builder} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Year Built:</label>
                    <input 
                        type="number" 
                        name="year_built" 
                        value={formData.year_built} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit">Add Property</button>
            </form>
        </div>
    );
};