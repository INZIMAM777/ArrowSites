import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialPropertyType = searchParams.get("propertyType") || "";
  const initialTransaction = searchParams.get("transaction_type") || "";

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: initialPropertyType,
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    transaction_type: initialTransaction,
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
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const normalizeString = (str) => {
    return str ? str.toString().toLowerCase().trim() : "";
  };

  const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
    let filtered = [...propertiesToFilter];

    // search filter
    if (search) {
      const normalizedSearch = normalizeString(search);
      filtered = filtered.filter((property) => {
        const searchFields = [
          property.address,
          property.title,
          property.builder,
          property.type,
          property.transaction_type,
        ].filter(Boolean);

        return searchFields.some((field) =>
          normalizeString(field).includes(normalizedSearch)
        );
      });
    }

    // property type
    if (filterParams.propertyType) {
      filtered = filtered.filter(
        (property) =>
          property.type?.toLowerCase() ===
          filterParams.propertyType.toLowerCase()
      );
    }

    // transaction type
    if (filterParams.transaction_type) {
      filtered = filtered.filter(
        (property) =>
          property.transaction_type?.toLowerCase() ===
          filterParams.transaction_type.toLowerCase()
      );
    }

    // price
    if (filterParams.minPrice) {
      filtered = filtered.filter((property) => {
        const price = parseFloat(property.price);
        return !isNaN(price) && price >= Number(filterParams.minPrice);
      });
    }
    if (filterParams.maxPrice) {
      filtered = filtered.filter((property) => {
        const price = parseFloat(property.price);
        return !isNaN(price) && price <= Number(filterParams.maxPrice);
      });
    }

    // bedrooms
    if (filterParams.bedrooms) {
      filtered = filtered.filter(
        (property) => Number(property.bedrooms) >= Number(filterParams.bedrooms)
      );
    }

    // bathrooms
    if (filterParams.bathrooms) {
      filtered = filtered.filter(
        (property) => Number(property.bathrooms) >= Number(filterParams.bathrooms)
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
    setSearchTerm("");
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      transaction_type: "",
    });
    setFilteredProperties(properties);
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", height: "50vh" }}>
        <div>Loading properties...</div>
      </div>
    );
  }

  return (
    <>
      <h1>
        {searchTerm
          ? `Search Results for "${searchTerm}"`
          : filters.propertyType || filters.transaction_type
          ? "Filtered Properties"
          : "All Properties"}
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
            <button onClick={clearAllFilters}>Clear all filters</button>
          </div>
        )}
      </div>
    </>
  );
};
