import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactSection from "../Sections/ContactSection/ContactSection";
import ResidentielHeros from "../Sections/ResidentielHeros/ResidentielHeros";
import ResidentielInfos from "../Sections/ResidentielInfos/ResidentielInfos";

function Residentiel () {
    return (
        <>
            <Header/>
            <main>
                <ResidentielHeros/>
                <ResidentielInfos/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default Residentiel;