import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../Dashboard/Components/Blog/AddBlog/AddBlog";
import Blogs from "../Dashboard/Components/Blog/Blogs/Blogs";
import DashWelcome from "../Dashboard/Components/DashWelcome/DashWelcome";
import MyOrders from "../Dashboard/Components/MyOrders/MyOrders";
import Payment from "../Dashboard/Components/Payment/Payment";
import AddProduct from "../Dashboard/Components/Products/AddProduct/AddProduct";
import MyProducts from "../Dashboard/Components/Products/MyProducts/MyProducts";
import UpdateProduct from "../Dashboard/Components/Products/UpdateProduct/UpdateProduct";
import AllUsers from "../Dashboard/Components/Users/AllUsers/AllUsers";
import Buyer from "../Dashboard/Components/Users/Buyer/Buyer";
import Seller from "../Dashboard/Components/Users/Seller/Seller";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import NothingPage from "../Pages/404/NothingPage";
import Blog from "../Pages/Blog/Blog";
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
                path: '/blogs',
                element: <Blog />
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
                loader: () => fetch('https://upsell-server-devshowmik.vercel.app/products'),
                element: <PrivateRoute><Products /></PrivateRoute>
            },
            {
                path: '/category/:name',
                loader: ({ params }) => fetch(`https://upsell-server-devshowmik.vercel.app/category/${params.name}`),
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
                path: '/dashboard',
                element: <DashWelcome />
            },
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
                loader: ({ params }) => fetch(`https://upsell-server-devshowmik.vercel.app/product/${params.id}`),
                element: <UpdateProduct />
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders /></BuyerRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/buyer',
                element: <Buyer />
            },
            {
                path: '/dashboard/seller',
                element: <AdminRoute><Seller /></AdminRoute>
            },
            {
                path: '/dashboard/blogs',
                element: <AdminRoute><Blogs /></AdminRoute>
            },
            {
                path: '/dashboard/add-blog',
                element: <AdminRoute><AddBlog /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment /></BuyerRoute>,
                loader: ({ params }) => fetch(`https://upsell-server-devshowmik.vercel.app/booking/${params.id}`)
            }

        ]
    }


])