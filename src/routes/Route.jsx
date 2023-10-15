import { createBrowserRouter } from "react-router-dom";
import AddItem from "../components/add-item/AddItem";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/add-item',
                element: <AddItem />
            }
        ]
    },
    {
        path: '*',
        element: <p>This is error</p>
    }
]);
export default router;