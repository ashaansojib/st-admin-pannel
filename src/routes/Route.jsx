import { createBrowserRouter } from "react-router-dom";
import AddItem from "../components/add-item/AddItem";
import Dashboard from "../layout/Dashboard";
import AllProducts from "../components/all-products/AllProducts";
import UserLists from "../components/admin/UserLists";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/add-product',
                element: <AddItem />
            },
            {
                path: '/all-products',
                element: <AllProducts />
            },
            {
                path: '/admin/manage-users',
                element: <UserLists />
            }
        ]
    },
    {
        path: '*',
        element: <p>This is error</p>
    }
]);
export default router;