import { createBrowserRouter } from "react-router-dom";
import MyOrders from "../Dashboard/Components/MyOrders/MyOrders";
import AddProduct from "../Dashboard/Components/Products/AddProduct/AddProduct";
import MyProducts from "../Dashboard/Components/Products/MyProducts/MyProducts";
import UpdateProduct from "../Dashboard/Components/Products/UpdateProduct/UpdateProduct";
import AllUsers from "../Dashboard/Components/Users/AllUsers/AllUsers";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import NothingPage from "../Pages/404/NothingPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
                element: <PrivateRoute><Products /></PrivateRoute>
            },
            {
                path: '/category/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`),
                element: <PrivateRoute><Products /></PrivateRoute>
            },
            {
                path: '*',
                element: <NothingPage />
            }

        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/products',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/product/update/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                element: <UpdateProduct />
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders /></BuyerRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            }
        ]
    }


])