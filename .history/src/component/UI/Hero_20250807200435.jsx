import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/Cards?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="hero-section relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="bg-cover bg-center absolute inset-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')" }}
      ></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
          Discover the perfect property that matches your lifestyle and budget
        </p>
        
        {/* Search bar */}
        <div className="bg-white p-2 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="Search by city, ZIP, or address"
            className="flex-grow p-4 text-lg focus:outline-none rounded md:rounded-r-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="search-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded md:rounded-l-none transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        
        {/* Popular searches */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="text-white font-medium">Popular:</span>
          <button 
            className="text-white hover:text-blue-200 transition"
            onClick={() => setSearchTerm("New York")}
          >
            New York
          </button>
          <button 
            className="text-white hover:text-blue-200 transition"
            onClick={() => setSearchTerm("Los Angeles")}
          >
            Los Angeles
          </button>
          <button 
            className="text-white hover:text-blue-200 transition"
            onClick={() => setSearchTerm("Miami")}
          >
            Miami
          </button>
          <button 
            className="text-white hover:text-blue-200 transition"
            onClick={() => setSearchTerm("Chicago")}
          >
            Chicago
          </button>
        </div>
      </div>
      
      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-4">
        <div className="container mx-auto flex flex-wrap justify-around text-center">
          <div className="px-4 py-2">
            <div className="text-2xl font-bold">10,000+</div>
            <div className="text-sm">Properties Listed</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Cities Covered</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};