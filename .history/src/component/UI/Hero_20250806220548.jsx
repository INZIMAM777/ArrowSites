
export const Hero = () => {
  const handleSearch = (searchTerm) => {
        // Navigate to DisplayCards page with search query
        navigate(`/Cards?search=${encodeURIComponent(searchTerm)}`);
    };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home Today</h1>
        <p>Discover properties in the most desirable neighborhoods</p>
        <div className="hero-search">
          <input type="text" onSearch={handleSearch} onFilter={() => {}} placeholder="Search by location, ZIP, or address" />
          <button className="search-btn">Search</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Properties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Locations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="hero-image"></div>
    </section>
  );
};