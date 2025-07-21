import { Hero } from "../component/UI/Hero"

export const Home=()=>{
    return(
        <>
            <div className="home-page">
      <Header />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
            <Hero/>
        </>
    )
}