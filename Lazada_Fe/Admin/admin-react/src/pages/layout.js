import Navigation from "../components/common/navigation"
import MainSidebar from "../components/common/mainSidebar"
import Footer from "../components/common/footer"
import { Outlet } from "react-router-dom"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {useEffect} from "react";
export default function Layout(){
    
    return (
        <>
             <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    <Navigation />
                    <MainSidebar />
                    <div className="content-wrapper">
                            <Outlet />
                    </div>
                    <Footer/>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        style={{ width: "400px" }}
                    />
                </div>
             </div>
        </>
    )
}