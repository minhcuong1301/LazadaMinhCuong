import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/layout/layout"
import Index from "../pages"
import Detail from "../pages/products/detail"
// import Detail from "../pages/products/productDetail"
import Login from "../pages/auth/login"
import SignIn from "../pages/auth/signin"

const router=createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />, //trang san pham chung
            },
            {
                path:"products",
                children:[
                    {
                        path:":productId/detail",
                        element: <Detail />,
                    }
                ]
            },
            {
                path:"login",
                element: <Login />
            },
            {
                path:"signin",
                element: <SignIn />
            }
        ]
    }
])

export default router