import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";
import { LoadingSpinner } from "../component/UI/LoadingSpinner";
import { ErrorMessage } from "../component/UI/ErrorMessage";

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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const firebase = useFirebase();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const propertiesSnapshot = await firebase.getLists();
                const propertyData = propertiesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProperties(propertyData);
                applyFiltersAndSearch(propertyData, searchTerm, filters);
            } catch (err) {
                console.error("Error fetching properties:", err);
                setError("Failed to load properties. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
        let filtered = [...propertiesToFilter];
        
        // Apply search filter
        if (search) {
            filtered = filtered.filter((property) => 
                property.address?.toLowerCase().includes(search.toLowerCase()) ||
                property.city?.toLowerCase().includes(search.toLowerCase()) ||
                property.description?.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Apply property type filter
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

    const clearAllFilters = () => {
        setSearchTerm('');
        setFilters({
            propertyType: "",
            minPrice: "",
            maxPrice: "",
            bedrooms: "",
            bathrooms: "",
        });
        setFilteredProperties(properties);
    };

    return (
        <div className="display-cards-container">
            <style>{`
                .display-cards-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .page-header {
                    text-align: center;
                    margin: 2rem 0 1.5rem;
                }

                .page-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 0.5rem;
                    line-height: 1.2;
                }

                .search-term {
                    color: #4f46e5;
                    font-weight: 600;
                }

                .properties-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.75rem;
                    padding: 1.5rem 0;
                }

                .no-results {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 3rem 0;
                }

                .no-results-message {
                    font-size: 1.25rem;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                }

                .clear-filters-button {
                    padding: 0.75rem 1.5rem;
                    background-color: #4f46e5;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }

                .clear-filters-button:hover {
                    background-color: #4338ca;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .clear-filters-button:active {
                    transform: translateY(0);
                }

                .results-count {
                    font-size: 0.9375rem;
                    color: #6b7280;
                    text-align: center;
                    margin: 0.5rem 0 1.5rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .properties-container {
                        grid-template-columns: 1fr;
                    }

                    .page-title {
                        font-size: 1.75rem;
                    }
                }
            `}</style>

            <div className="page-header">
                <h1 className="page-title">
                    {searchTerm ? (
                        <>
                            Search Results for <span className="search-term">"{searchTerm}"</span>
                        </>
                    ) : (
                        'Explore Properties'
                    )}
                </h1>
                {filteredProperties.length > 0 && (
                    <div className="results-count">
                        Showing {filteredProperties.length} of {properties.length} properties
                    </div>
                )}
            </div>

            <SearchAndFilter 
                onSearch={handleSearch} 
                onFilter={handleFilter}
                showFilters={true}
                initialSearch={searchTerm}
            />

            {loading ? (
                <LoadingSpinner/>
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (
                <div className="properties-container">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <PCard key={property.id} property={property} />
                        ))
                    ) : (
                        <div className="no-results">
                            <p className="no-results-message">
                                No properties match your search criteria.
                            </p>
                            <button 
                                className="clear-filters-button"
                                onClick={clearAllFilters}
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};