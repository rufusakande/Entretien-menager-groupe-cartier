import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactHeros from "../Sections/ContactHeros/ContactHeros";
import ContactSection from "../Sections/ContactSection/ContactSection";
import FranchiseHeros from "../Sections/FranchiseHeros/FranchiseHeros";
import FranchiseInfos from "../Sections/FranchiseInfos/FranchiseInfos";

function Contact () {
    return (
        <>
            <Header/>
            <main>
                <ContactHeros/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default Contact;