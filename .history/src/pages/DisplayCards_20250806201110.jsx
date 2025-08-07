import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [filters, setFilters] = useState({
        propertyType: "",
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        bathrooms: "",
    });
    const firebase = useFirebase();

    useEffect(() => {
        firebase.getLists().then((propertiesSnapshot) => {
            const propertyData = propertiesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProperties(propertyData);
            applyFiltersAndSearch(propertyData, searchTerm, filters);
        });
    }, []);

    const normalizeString = (str) => {
        return str ? str.toString().toLowerCase().trim() : '';
    };

    const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
        let filtered = [...propertiesToFilter];
        
        // Apply search filter
        if (search) {
            const normalizedSearch = normalizeString(search);
            filtered = filtered.filter((property) => {
                const searchFields = [
                    property.address,
                    property.city,
                    property.description,
                    property.location, // Added location field
                    property.neighborhood,
                    property.landmark
                ].filter(Boolean); // Remove undefined/null fields

                return searchFields.some(field => 
                    normalizeString(field).includes(normalizedSearch)
            });
        }

        if (filterParams.propertyType) {
            filtered = filtered.filter(
                (property) => property.type === filterParams.propertyType
            );
        }

        // Apply price filters
        if (filterParams.minPrice) {
            filtered = filtered.filter(
                (property) => property.price >= Number(filterParams.minPrice)
            );
        }
        if (filterParams.maxPrice) {
            filtered = filtered.filter(
                (property) => property.price <= Number(filterParams.maxPrice)
            );
        }

        // Apply bedroom filter
        if (filterParams.bedrooms) {
            filtered = filtered.filter(
                (property) => property.bedrooms >= Number(filterParams.bedrooms)
            );
        }

        // Apply bathroom filter
        if (filterParams.bathrooms) {
            filtered = filtered.filter(
                (property) => property.bathrooms >= Number(filterParams.bathrooms)
            );
        }

        setFilteredProperties(filtered);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        applyFiltersAndSearch(properties, searchTerm, filters);
    };

    const handleFilter = (filterParams) => {
        setFilters(filterParams);
        applyFiltersAndSearch(properties, searchTerm, filterParams);
    };

    return (
        <>
            <style>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    padding: 2rem 1rem;
                    max-width: 1200px;
                    margin: auto;
                }

                h1 {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 2.5rem;
                    color: #343a40;
                }

                .no-results {
                    text-align: center;
                    width: 100%;
                    padding: 2rem;
                    font-size: 1.2rem;
                }

                .no-results button {
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background-color: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .no-results button:hover {
                    background-color: #2563eb;
                }
            `}</style>

            <h1>{searchTerm ? `Search Results for "${searchTerm}"` : 'All Properties'}</h1>

            <SearchAndFilter 
                onSearch={handleSearch} 
                onFilter={handleFilter}
                showFilters={true}
                initialSearch={searchTerm}
            />

            <div className="container">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                        <PCard key={property.id} property={property} />
                    ))
                ) : (
                    <div className="no-results">
                        <p>No properties match your search criteria.</p>
                        <button onClick={() => {
                            setSearchTerm('');
                            setFilters({
                                propertyType: "",
                                minPrice: "",
                                maxPrice: "",
                                bedrooms: "",
                                bathrooms: "",
                            });
                            setFilteredProperties(properties);
                        }}>
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};