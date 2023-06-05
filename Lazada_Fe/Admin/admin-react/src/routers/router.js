import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages";
import UserIndex from "../pages/users";
import UserCreate from "../pages/users/create";
import UserEdit from "../pages/users/edit";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Index/>
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <UserIndex />,
                    },
                    {
                        path: "create",
                        element: <UserCreate />,
                    },
                    {
                        path: ":userId/edit",
                        element: <UserEdit />,
                    },
                ]
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ]
    }
   
]);
export default router;