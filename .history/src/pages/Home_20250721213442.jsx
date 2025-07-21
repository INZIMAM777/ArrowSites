import { Hero } from "../component/UI/Hero"

export const Home=()=>{
    return(
        <>
            <div className="home-page">
            <main>
                <FeatureSection />
                <Testimonials />
                <CallToAction />
            </main>    
            </div>
            <Hero/>
        </>
    )
}