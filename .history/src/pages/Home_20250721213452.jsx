import FeatureSection from "../component/UI/FeatureSection"
import { Hero } from "../component/UI/Hero"
import Testimonials from "../component/UI/Testimonials"

export const Home=()=>{
    return(
        <>
            <div className="home-page">
            <main>
                <Hero />
                <FeatureSection />
                <Testimonials />
                <CallToAction />
            </main>    
            </div>
            <Hero/>
        </>
    )
}