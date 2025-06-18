import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactSection from "../Sections/ContactSection/ContactSection";
import GrandMenageHeros from "../Sections/GrandMenageHeros/GrandMenageHeros";
import GrandMenageInfos from "../Sections/GrandMenageInfos/GrandMenageInfos";

function GrandMenage () {
    return (
        <>
            <Header/>
            <main>
                <GrandMenageHeros/>
                <GrandMenageInfos/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default GrandMenage;