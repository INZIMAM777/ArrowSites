// import { AgentShowcase } from '../component/UI/AgentShowCase';
// import { useNavigate } from 'react-router-dom';
import { BlogHighlights } from '../component/UI/BlogHighlights';
import {CallToAction} from '../component/UI/CallToAction';
import FeatureSection from '../component/UI/FeatureSection';
import { Hero } from '../component/UI/Hero';
// import { MortgageCalculator } from '../component/UI/MortgageCalculator';
// import { NeighborhoodHighlights } from '../component/UI/NeighborhoodHighlights';
import { PropertyListings } from '../component/UI/PropertyListing';
// import { RecentTransactions } from '../component/UI/RecentTransactions';
// import { SearchFilters } from '../component/UI/SearchFilter';
import Testimonials from '../component/UI/Testimonials';
import { VideoTours } from '../component/UI/VideoTours';
import './Home.css';
// import { SearchAndFilter } from './SearchAndFilter';
import { useOutletContext } from "react-router-dom";

export const Home = () => {
    // Get theme state from Layout component
    const { isDarkMode, setIsDarkMode } = useOutletContext();
    
    // const navigate = useNavigate();
    // const handleSearch = (searchTerm) => {
    //     // Navigate to DisplayCards page with search query
    //     navigate(`/Cards?search=${encodeURIComponent(searchTerm)}`);
    // };
    
    return (
        <div className="home-page">
            <main>
                <Hero isDarkMode={isDarkMode} />
                {/* <SearchFilters isDarkMode={isDarkMode} /> */}
                {/* <SearchAndFilter
                    onSearch={handleSearch} 
                    onFilter={() => {}}
                    showFilters={false}
                    isDarkMode={isDarkMode}
                /> */}
                <PropertyListings 
                    title="Featured Properties" 
                    limit={1} 
                    featured={true}
                    isDarkMode={isDarkMode}
                />
                {/* <NeighborhoodHighlights isDarkMode={isDarkMode} /> */}
                <FeatureSection isDarkMode={isDarkMode} />
                <VideoTours isDarkMode={isDarkMode} />
                {/* <AgentShowcase isDarkMode={isDarkMode} /> */}
                {/* <MortgageCalculator isDarkMode={isDarkMode} /> */}
                {/* <RecentTransactions isDarkMode={isDarkMode} /> */}
                <Testimonials isDarkMode={isDarkMode} />
                {/* <BlogHighlights 
                    title="Real Estate Insights" 
                    limit={3}
                    isDarkMode={isDarkMode}
                /> */}
                <CallToAction isDarkMode={isDarkMode} />
            </main>    
        </div>
    )
}