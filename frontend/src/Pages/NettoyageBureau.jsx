import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactSection from "../Sections/ContactSection/ContactSection";
import NettoyageBureauHeros from "../Sections/NettoyageBureauHeros/NettoyageBureauHeros";
import NettoyageBureauInfos from "../Sections/NettoyageBureauInfos/NettoyageBureauInfos";

function NettoyageBureau () {
    return (
        <>
            <Header/>
            <main>
                <NettoyageBureauHeros/>
                <NettoyageBureauInfos/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default NettoyageBureau;