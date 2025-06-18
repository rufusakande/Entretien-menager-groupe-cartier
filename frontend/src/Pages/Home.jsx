import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
import HomeHeros from "../Sections/HomeHeros/HomeHeros";
import ServicesSection from "../Sections/ServicesSection/ServicesSection";
import TestimonialsSection from "../Sections/TestimonialsSection/TestimonialsSection";

function Home () {
    return (
        <>
            <Header/>
            <main>
                <HomeHeros/>
                <AboutSection/>
                <ServicesSection/>
                <TestimonialsSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default Home;