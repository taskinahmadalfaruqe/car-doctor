import { NavLink, } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to="/" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hover:opacity-60 text-md p-2 hover:text-whiteColor"}>Home</NavLink> </li>

        <li> <NavLink to="/about" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hover:opacity-60 text-md p-2 hover:text-whiteColor"}>About</NavLink> </li>

        <li> <NavLink to="/services" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hover:opacity-60 text-md p-2 hover:text-whiteColor"}>Services</NavLink> </li>

        <li> <NavLink to="/blog" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hover:opacity-60 text-md p-2 hover:text-whiteColor"}>Blog</NavLink> </li>

        <li> <NavLink to="/contact" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hover:opacity-60 text-md p-2 hover:text-whiteColor"}>Contact</NavLink> </li>

        <li> <NavLink to="/appointment" className={({isActive})=> isActive?"  text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase  hover:bg-primaryColor hovetext-md p-2 r:opacity-60 hover:text-whiteColor"}>Appointment</NavLink> </li>

       
        {user?.email ? <>
            <li><NavLink to="/bookings" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase hover:bg-primaryColor text-md p-2 hover:opacity-60 hover:text-whiteColor"}>My Bookings</NavLink></li>
            <li><button onClick={handleLogOut} className="uppercase text-darkColor font-semibold  hover:bg-primaryColor hover:opacity-60 hover:text-whiteColor ">Log out</button></li>
        </>
            : <li> <NavLink to="/login" className={({isActive})=> isActive?" text-whiteColor font-semibold p-2 px-3 text-lg bg-primaryColor uppercase":"text-darkColor font-semibold uppercase hover:bg-primaryColor text-md p-2 hover:opacity-60 hover:text-whiteColor"}>Login</NavLink> </li>
        }
    </>
    return (
        <div className="bg-slate-300">
            <div className="container">
            <div className=" navbar py-3 flex justify-between items-center  max-w-7xl">
                <div className="">
                    <NavLink to="/" className="">
                        <img src={logo} alt="logo" className="w-16" />
                    </NavLink>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2 justify-center items-center">
                        {navItems}
                    </ul>
                </div>
                <div>
                    dark
                </div>
                <div className="lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="flex justify-center items-center gap-2 flex-col lg:hidden">
                            <span className="w-7 h-[2px] rounded-md bg-darkColor"></span>
                            <span className="w-7 h-[2px] rounded-md bg-darkColor"></span>
                            <span className="w-7 h-[2px] rounded-md bg-darkColor"></span>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 right-0 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
        </div>
    );
};

export default NavBar;