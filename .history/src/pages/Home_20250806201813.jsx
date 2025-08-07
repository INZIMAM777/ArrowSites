

// import { AgentShowcase } from '../component/UI/AgentShowCase';
// import { useNavigate } from 'react-router-dom';
import { BlogHighlights } from '../component/UI/BlogHighlights';
import {CallToAction} from '../component/UI/CallToAction';
import FeatureSection from '../component/UI/FeatureSection';
import { Hero } from '../component/UI/Hero';
import { MortgageCalculator } from '../component/UI/MortgageCalculator';
import { NeighborhoodHighlights } from '../component/UI/NeighborhoodHighlights';
import { PropertyListings } from '../component/UI/PropertyListing';
import { RecentTransactions } from '../component/UI/RecentTransactions';
// import { SearchFilters } from '../component/UI/SearchFilter';
import Testimonials from '../component/UI/Testimonials';
import { VideoTours } from '../component/UI/VideoTours';
import './Home.css';
// import { SearchAndFilter } from './SearchAndFilter';

export const Home = () => {
    
    return (
        <div className="home-page">
            <main>
                <Hero />
                {/* <SearchFilters /> */}
                {/* <SearchAndFilter
                    onSearch={handleSearch} 
                    onFilter={() => {}} // Empty function for home page
                    showFilters={false} // We'll add this prop to hide filters on home
                /> */}
                <PropertyListings 
                    title="Featured Properties" 
                    limit={6} 
                    featured={true}
                />
                <NeighborhoodHighlights />
                <FeatureSection />
                <VideoTours />
                {/* <AgentShowcase /> */}
                <MortgageCalculator />
                <RecentTransactions />
                <Testimonials />
                <BlogHighlights 
                    title="Real Estate Insights" 
                    limit={3}
                />
                <CallToAction />
            </main>    
        </div>
    )
}