import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const initialPropertyType = searchParams.get('propertyType') || '';
    const initialTransaction = searchParams.get('transaction_type') || '';

    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [filters, setFilters] = useState({
        propertyType: initialPropertyType,
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        bathrooms: "",
        transaction_type: initialTransaction
    });
    const [loading, setLoading] = useState(true);
    const firebase = useFirebase();

    useEffect(() => {
        loadProperties();
    }, []);

    useEffect(() => {
        if (properties.length > 0) {
            applyFiltersAndSearch(properties, searchTerm, filters);
        }
    }, [properties, filters, searchTerm]);

    const loadProperties = async () => {
        try {
            setLoading(true);
            const propertiesData = await firebase.getLists();
            setProperties(propertiesData);
            applyFiltersAndSearch(propertiesData, searchTerm, filters);
        } catch (error) {
            console.error("Error loading properties:", error);
        } finally {
            setLoading(false);
        }
    };

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
                    property.title,
                    property.builder,
                    property.type,
                    property.transaction_type
                ].filter(Boolean);

                return searchFields.some((field) =>
                    normalizeString(field).includes(normalizedSearch)
                );
            });
        }

        // Apply property type filter
        if (filterParams.propertyType) {
            filtered = filtered.filter(
                (property) => normalizeString(property.type) === normalizeString(filterParams.propertyType)
            );
        }

        // Apply transaction type filter
        if (filterParams.transaction_type) {
            filtered = filtered.filter(
                (property) => normalizeString(property.transaction_type) === normalizeString(filterParams.transaction_type)
            );
        }

        // Apply price filters - convert prices to numbers for comparison
        if (filterParams.minPrice) {
            filtered = filtered.filter(
                (property) => {
                    const price = parseFloat(property.price);
                    return !isNaN(price) && price >= Number(filterParams.minPrice);
                }
            );
        }
        if (filterParams.maxPrice) {
            filtered = filtered.filter(
                (property) => {
                    const price = parseFloat(property.price);
                    return !isNaN(price) && price <= Number(filterParams.maxPrice);
                }
            );
        }

        // Apply bedroom filter
        if (filterParams.bedrooms) {
            filtered = filtered.filter(
                (property) => Number(property.bedrooms) >= Number(filterParams.bedrooms)
            );
        }

        // Apply bathroom filter
        if (filterParams.bathrooms) {
            filtered = filtered.filter(
                (property) => Number(property.bathrooms) >= Number(filterParams.bathrooms)
            );
        }

        setFilteredProperties(filtered);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleFilter = (filterParams) => {
        setFilters({...filters, ...filterParams});
    };

    const clearAllFilters = () => {
        setSearchTerm('');
        setFilters({
            propertyType: "",
            minPrice: "",
            maxPrice: "",
            bedrooms: "",
            bathrooms: "",
            transaction_type: ""
        });
    };

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh'
            }}>
                <div>Loading properties...</div>
            </div>
        );
    }

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

            <h1>
                {searchTerm 
                    ? `Search Results for "${searchTerm}"` 
                    : (filters.propertyType || filters.transaction_type)
                        ? `${filters.propertyType ? filters.propertyType.charAt(0).toUpperCase() + filters.propertyType.slice(1) : ''} ${filters.transaction_type ? filters.transaction_type.charAt(0).toUpperCase() + filters.transaction_type.slice(1) : ''} Properties`
                        : 'All Properties'
                }
            </h1>

            <SearchAndFilter
                onSearch={handleSearch}
                onFilter={handleFilter}
                showFilters={true}
                initialSearch={searchTerm}
                currentFilters={filters}
            />

            <div className="container">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                        <PCard key={property.id} property={property} />
                    ))
                ) : (
                    <div className="no-results">
                        <p>No properties match your search criteria.</p>
                        <button onClick={clearAllFilters}>
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};