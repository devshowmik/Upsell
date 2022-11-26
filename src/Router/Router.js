import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/Components/Products/AddProduct/AddProduct";
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
            }
        ]
    }


])