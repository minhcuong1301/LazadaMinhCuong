import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
            <div className="wrap-contain">
            
                <div className="banner text-center">
                    <img src="https://icms-image.slatic.net/images/ims-web/ce72daf1-739c-4718-a749-dad336fc233b.png" alt=""/>
                    <AiFillCloseCircle id="off"></AiFillCloseCircle>
                </div>
                <div className="text-center navv">
                    <a href="" style={{visibility:'hidden'}}>Inner feedback</a>
                    <a href=""  >TIẾT KIỆM HƠN VỚI ỨNG DỤNG</a>
                    <a href="">BÁN HÀNG CÙNG LAZADA</a>
                    <a href="">CHĂM SÓC KHÁCH HÀNG</a>
                    <a href="">KIỂM TRA ĐƠN HÀNG</a>
                    <Link to={"/login"}>ĐĂNG NHẬP</Link>
                    <Link to={"/signin"}>ĐĂNG KÝ</Link>
                    <a href="">CHANGE LEAGUE</a>
                </div>
                <div className=" header-top ">
            <a href="http://localhost:3000" className="logo-start">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt=""/>
            </a>
            <div className="search">
                <div className="search-input">
                    <input id="menuSearch"  type="text" placeholder="Tìm kiếm trên lazada"/>
                </div>
                <div className="search-icon">
                <button></button>
                </div>
            </div>
            <div className="shop-card">
                <a href="" className="cart-icon">
                    <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png" alt=""/>
                </a>
            </div>
            <div className="logo-end">
                <a href="">
                    <img src="https://icms-image.slatic.net/images/ims-web/a44ecdc4-807d-4707-abfd-61841f444a29.png"
                        alt=""/>
                </a>
            </div>
        </div>
            </div>
        </>
    )
}
export default Header