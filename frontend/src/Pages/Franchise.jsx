import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ContactSection from "../Sections/ContactSection/ContactSection";
import FranchiseHeros from "../Sections/FranchiseHeros/FranchiseHeros";
import FranchiseInfos from "../Sections/FranchiseInfos/FranchiseInfos";

function Franchise () {
    return (
        <>
            <Header/>
            <main>
                <FranchiseHeros/>
                <FranchiseInfos/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    )
}

export default Franchise;