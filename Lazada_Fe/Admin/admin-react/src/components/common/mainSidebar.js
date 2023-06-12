import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { faAngleLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from 'react';
export default function MainSidebar() {
    useEffect(()=>{
        document.querySelectorAll(".main-sidebar .nav-sidebar >.nav-item").forEach((e)=>{
            e.querySelector('.nav-link').addEventListener('click', function (item) {
                if (e.classList.contains('menu-is-opening') && e.classList.contains('menu-open')) {
                    e.classList.remove('menu-is-opening');
                    e.classList.remove('menu-open');
                } else {
                    e.classList.add('menu-is-opening');
                    e.classList.add('menu-open');
                }
            })
        })
        // const [auth, setAuth] = useState([]);
    })
    return (
        <>
            <div className="main-sidebar sidebar-dark-primary">
                <a href="http://localhost:3000/" className="brand-link">
                    <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                    <span className="brand-text fw-light">Base Admin</span>
                </a>
                <div className="sidebar">
                    <div className="sidebar-content">
                        {/* Sidebar User Panel */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="/images/AdminLTELogo.png" className="img-circle elevation-2" alt="User" />
                            </div>
                            <div className="info">
                                <NavLink
                                    to={'profile'}
                                    className={"nav-link"}
                                    end
                                >
                                    Cuong
                                </NavLink>
                            </div>
                        </div>

                        {/* Sidebar menu */}
                        <nav className="mt-2 sidebar-menu">
                            <ul className={"nav nav-pills nav-sidebar flex-column"} data-widget="treeview" role="menu" data-accordion="false">
                                <li className={"nav-item menu-open menu-is-opening"}>
                                    <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                        <FontAwesomeIcon icon={faUsers} className={"nav-icon"} />
                                        <p>
                                            Quản lý Users
                                            <FontAwesomeIcon icon={faAngleLeft} className={"right"}/>
                                        </p>
                                    </a>
                                    <ul className={"nav nav-treeview"}>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'users'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Danh sách Users
                                                </p>
                                            </NavLink>
                                        </li>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'users/create'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Thêm mới User
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}