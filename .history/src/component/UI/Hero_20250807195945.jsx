import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) queryParams.append("search", encodeURIComponent(searchTerm.trim()));
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    navigate(`/listings?${queryParams.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Perfect Property Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Luxury homes, premium locations, exceptional service - experience real estate at its finest
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by city, country, or landmark"
                className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Search
            </button>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Property Type</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Price Range</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="">Any Price</option>
                <option value="0-500000">Up to $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-5000000">$1M - $5M</option>
                <option value="5000000-">$5M+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Bedrooms</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.bedrooms}
                onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-lg opacity-80">Premium Properties</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
            <div className="text-4xl font-bold mb-2">120+</div>
            <div className="text-lg opacity-80">Countries Worldwide</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-lg opacity-80">Years of Excellence</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
            <div className="text-4xl font-bold mb-2">2M+</div>
            <div className="text-lg opacity-80">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};