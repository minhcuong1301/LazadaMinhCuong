import Header from "../../components/common/header"
import Slide from "../../components/index/slide"
import Footer from "../../components/common/footer"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}