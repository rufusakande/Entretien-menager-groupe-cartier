import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutHero from "../Sections/AboutHero/AboutHero";
import AboutInfosSection from "../Sections/AboutInfosSection/AboutInfosSection";
import ContactSection from "../Sections/ContactSection/ContactSection";

function About () {
    return (
        <>
            <Header/>
            <main>
                <AboutHero/>
                <AboutInfosSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default About;