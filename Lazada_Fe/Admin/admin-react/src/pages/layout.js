import Navigation from "../components/common/navigation"
import MainSidebar from "../components/common/mainSidebar"
import Footer from "../components/common/footer"
import { Outlet } from "react-router-dom"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import profileApis from "../api/baseAdmin/profile";
import { createAuthUser } from "../features/auth/authSlice";
export default function Layout(){
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['user_token']);
    let navigate = useNavigate();

    useEffect( () => {
        if (!cookies.user_token) {
            navigate('/login');
        }
        if (!auth.user) {
            (
                async () => {
                    const profileResponse = await profileApis.show();

                    if (profileResponse.success) {
                        dispatch(createAuthUser(profileResponse.data))
                    }
                }
            )()
        }
    }, [cookies]);
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