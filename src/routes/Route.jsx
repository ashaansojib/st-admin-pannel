import { createBrowserRouter } from "react-router-dom";
import AddItem from "../components/add-item/AddItem";
import Dashboard from "../layout/Dashboard";
import AllProducts from "../components/all-products/AllProducts";

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
            }
        ]
    },
    {
        path: '*',
        element: <p>This is error</p>
    }
]);
export default router;