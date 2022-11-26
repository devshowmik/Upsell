import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/Components/Products/AddProduct/AddProduct";
import MyProducts from "../Dashboard/Components/Products/MyProducts/MyProducts";
import AllUsers from "../Dashboard/Components/Users/AllUsers/AllUsers";
import Buyer from "../Dashboard/Components/Users/Buyer/Buyer";
import Seller from "../Dashboard/Components/Users/Seller/Seller";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/add-product',
                element: <AddProduct />
            },
            {
                path: '/dashboard/products',
                element: <MyProducts />
            },
            {
                path: '/dashboard/users',
                element: <AllUsers />
            },
            {
                path: '/dashboard/users/buyer',
                element: <Buyer />
            },
            {
                path: '/dashboard/users/seller',
                element: <Seller />
            }
        ]
    }


])