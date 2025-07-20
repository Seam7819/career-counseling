import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Swiper from "../../Components/Swiper";
import Services from "../../Components/Services";
import Footer from "../../Components/Footer";
const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <nav>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Swiper></Swiper>
            </nav>
            <main>
                <Services></Services>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;