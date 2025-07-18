import { NavLink } from "react-router-dom";
import navLogo from "../../public/Logo--darker-for-web.png"
const Navbar = () => {


    const link = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-lime-700" : ""
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-lime-700" : ""
        } to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-lime-700" : ""
        } to="/career">Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <img className="w-28  h-12 shadow-lg rounded-md cursor-pointer hidden md:block" src={navLogo} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;