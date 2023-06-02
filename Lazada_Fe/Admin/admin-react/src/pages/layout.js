import Navigation from "../components/common/navigation"
import MainSidebar from "../components/common/mainSidebar"
import Footer from "../components/common/footer"
import { Outlet } from "react-router-dom"
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
                </div>
             </div>
        </>
    )
}