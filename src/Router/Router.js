import { createBrowserRouter } from "react-router-dom";
import MyOrders from "../Dashboard/Components/MyOrders/MyOrders";
import AddProduct from "../Dashboard/Components/Products/AddProduct/AddProduct";
import MyProducts from "../Dashboard/Components/Products/MyProducts/MyProducts";
import UpdateProduct from "../Dashboard/Components/Products/UpdateProduct/UpdateProduct";
import AllUsers from "../Dashboard/Components/Users/AllUsers/AllUsers";
import Buyer from "../Dashboard/Components/Users/Buyer/Buyer";
import Seller from "../Dashboard/Components/Users/Seller/Seller";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/products',
                loader: () => fetch('http://localhost:5000/products'),
                element: <Products />
            },
            {
                path: '/category/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`),
                element: <Products />
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
                path: '/dashboard/product/update/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                element: <UpdateProduct />
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders />
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