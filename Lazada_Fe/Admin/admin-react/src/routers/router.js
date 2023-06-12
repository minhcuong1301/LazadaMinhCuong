import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages";
import UserIndex from "../pages/users";
import UserCreate from "../pages/users/create";
import UserEdit from "../pages/users/edit";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/login";
import ProfileIndex from "../pages/profile";
import ChangePassword from "../pages/auth/changePassword";
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
            },
            {
                path: "profile",
                children: [
                    {
                        index: true,
                        element: <ProfileIndex />
                    }
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
            {
                path: "/confirm-account",
                element: <ChangePassword />,
            }
        ]
    }
   
]);
export default router;