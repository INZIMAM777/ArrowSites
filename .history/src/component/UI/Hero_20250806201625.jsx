import { SearchAndFilter } from "../../pages/SearchAndFilter";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home Today</h1>
        <p>Discover properties in the most desirable neighborhoods</p>
       <SearchAndFilter
                           onSearch={handleSearch} 
                           onFilter={() => {}} // Empty function for home page
                           showFilters={false} // We'll add this prop to hide filters on home
                       />
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