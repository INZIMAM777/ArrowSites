
import './Home.css';

export const Home = () => {
    return (
        <div className="home-page">
            <main>
                <Hero/>
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