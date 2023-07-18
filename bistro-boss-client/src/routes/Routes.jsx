import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/home/Home";
import Menu from "../page/menu/menu/Menu";
import Order from "../page/order/order/Order";
import Login from "../page/login/Login";
import SignUp from "../page/signup/SignUp";
import DashBoard from "../layout/DashBoard";
import MyCart from "../page/dashboard/my-cart/MyCart";
import AllUsers from "../page/dashboard/all users/AllUsers";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);


export default router;