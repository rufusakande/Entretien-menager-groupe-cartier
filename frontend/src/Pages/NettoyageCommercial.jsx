import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactSection from "../Sections/ContactSection/ContactSection";
import NettoyageCommercialHeros from "../Sections/NettoyageCommercialHeros/NettoyageCommercialHeros";
import NettoyageCommercialInfos from "../Sections/NettoyageCommercialInfos/NettoyageCommercialInfos";

function NettoyageCommercial () {
    return (
        <>
            <Header/>
            <main>
                <NettoyageCommercialHeros/>
                <NettoyageCommercialInfos/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default NettoyageCommercial;