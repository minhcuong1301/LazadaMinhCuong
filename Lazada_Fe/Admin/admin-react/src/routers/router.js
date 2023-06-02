import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
        // children:[
        //     {
        //         index: true,
        //         element: <Index />,
        //     },
        // ]
    }
   
]);
export default router;