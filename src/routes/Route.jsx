import { createBrowserRouter } from "react-router-dom";
import AddItem from "../components/add-item/AddItem";
import Dashboard from "../layout/Dashboard";
import AllProducts from "../components/all-products/AllProducts";
import UserLists from "../components/admin/UserLists";
import AddCustomer from "../components/customerLists/AddCustomer";
import ManageCustomer from "../components/admin/ManageCustomer";
import Login from "../components/authentication/Login";
import PrivetRoute from "./PrivetRoute";
import Register from "../components/authentication/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path: '/add-product/:id',
                element: <AddItem />
            },
            {
                path: '/all-products/:id',
                element: <AllProducts />,
                loader: ({ params }) => fetch(`https://st-development.vercel.app/specifiq-product-list/${params.id}`)
            },
            {
                path: '/create-customer',
                element: <AddCustomer />
            },
            {
                path: '/manage-customer',
                element: <ManageCustomer />
            },
            {
                path: '/admin/manage-users',
                element: <UserLists />
            }
        ]
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
        path: '*',
        element: <p>This is error</p>
    }
]);
export default router;