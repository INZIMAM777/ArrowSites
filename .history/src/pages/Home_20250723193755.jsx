import React from 'react';
import { Hero } from "../component/UI/Hero";
import { SearchFilters } from "../component/Search/SearchFilters";
import { PropertyListings } from "../component/Property/PropertyListings";
import { NeighborhoodHighlights } from "../component/Location/NeighborhoodHighlights";
import FeatureSection from "../component/UI/FeatureSection";
import { VideoTours } from "../component/Media/VideoTours";
import { AgentShowcase } from "../component/Agents/AgentShowcase";
import { MortgageCalculator } from "../component/Tools/MortgageCalculator";
import { RecentTransactions } from "../component/Market/RecentTransactions";
import  Testimonials  from "../component/UI/Testimonials";
import { BlogHighlights } from "../component/Blog/BlogHighlights";
import  CallToAction  from "../component/UI/CallToAction";
import './Home.css';

export const Home = () => {
    return (
        <div className="home-page">
            <main>
                <Hero />
                <SearchFilters />
                <PropertyListings 
                    title="Featured Properties" 
                    limit={6} 
                    featured={true}
                />
                <NeighborhoodHighlights />
                <FeatureSection />
                <VideoTours />
                <AgentShowcase />
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