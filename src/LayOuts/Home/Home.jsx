import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <nav>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default Home;