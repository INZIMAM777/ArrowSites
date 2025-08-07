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

    const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
        let filtered = [...propertiesToFilter];
        
        // Apply search filter
        if (search) {
            filtered = filtered.filter((property) => 
                property.address.toLowerCase().includes(search.toLowerCase()) ||
                property.city.toLowerCase().includes(search.toLowerCase()) ||
                property.description.toLowerCase().includes(search.toLowerCase())
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
            `}</style>

            <h1>{searchTerm ? `Search Results for "${searchTerm}"` : 'All Properties'}</h1>

            <SearchAndFilterr 
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
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};