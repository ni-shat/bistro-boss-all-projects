import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoard = () => {

    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content ">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome /> Admin home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaUtensils /> Add items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Manage items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook /> Manage bookings</NavLink></li>
                            <li><NavLink to='/dashboard/all-users'><FaUsers /> All users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome />Home</NavLink></li>
                            <li><NavLink to='/'><FaHome />Menu</NavLink></li>
                            <li><NavLink to='/'><FaHome />Order food</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/dashboard/home'><FaHome /> User home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                                <li className="">
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart /> My cart  <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                                </li>
                                <li><NavLink to='/dashboard/history'><FaWallet /> Payment history</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'><FaHome />Home</NavLink></li>
                                <li><NavLink to='/'><FaHome />Menu</NavLink></li>
                                <li><NavLink to='/'><FaHome />Order food</NavLink></li>
                            </>
                    }

                    {/* Sidebar content here */}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;