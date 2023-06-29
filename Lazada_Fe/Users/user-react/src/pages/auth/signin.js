import { Link } from "react-router-dom"

const SignIn=()=>{
    return(
        <>
         <div className="content_signin ">
        <div className="header_sign">
            <h3>Tạo tài khoản Lazada</h3>
            <p>Bạn đã là thành viên?
                <span>
                    <Link to={"/login"}>Đăng nhập</Link>
                </span>
                tại đây
            </p>
        </div>
        <form action="" className="section "  onsubmit="return validateForm()" name="signin">
            <section className="section1">
                <div className="mb-3  ">
                    <label for="" className="form-label color-text">Số điện thoại*</label>
                    <input  type="" name="phone" className="form-control" id="phone" placeholder="Nhập số điện thoại của bạn"/>
                    <span id="errPhone"></span>
                </div>
                <div className="sms">
                    <a href="#">
                        <img src="images/sms.jpg" alt=""/>
                    </a>
                </div>
               
                <div className="mb-3" >
                    <label  for="" className="form-label color-text">Mật Khẩu*</label>
                    <div className="da-son">
                        <input  type="password" name="pass" className="form-control" id="pass" placeholder="Tối thiểu 8 ký tự với số, chữ cái và ký tự."  />
                        
                        <div onclick="showPassWord()" className="eye">
                            <i id="showPass"className=" fas fa-eye"></i>
                           
                            <i id="hidePass" className="fas fa-eye-slash"></i>
                            
                        </div>
                    </div>
                    <span id="errPassWord"></span>
                
                   
                    
                </div>
                <div className="text-date-gender">
                   <span>Ngày sinh</span>
                   <span className="ml">Giới tính</span>
                    
                </div>
                <div className="datetime">
                    <select className="form-select setform " aria-label="Default select example">
                        <option selected>Tháng</option>
                        <option value="1 ">tháng 1  </option>
                        <option value="2 ">tháng 2  </option>
                        <option value="3 ">tháng 3  </option>
                        <option value="4 ">tháng 4  </option>
                        <option value="5 ">tháng 5  </option>
                        <option value="6 ">tháng 6  </option>
                        <option value="7 ">tháng 7  </option>
                        <option value="8 ">tháng 8  </option>
                        <option value="9 ">tháng 9  </option>
                        <option value="10">tháng 10 </option>
                        <option value="11">tháng 11 </option>
                        <option value="12">tháng 12 </option>
                    </select>
                    <select className="form-select setformday " aria-label="Default select example">
                        <option selected>ngày</option>
                        <option value="1 ">1  </option>
                        <option value="2 ">2  </option>
                        <option value="3 ">3  </option>
                        <option value="4 ">4  </option>
                        <option value="5 ">5  </option>
                        <option value="6 ">6  </option>
                        <option value="7 ">7  </option>
                        <option value="8 ">8  </option>
                        <option value="9 ">9  </option>
                        <option value="10">10 </option>
                        <option value="11">11 </option>
                        <option value="12">12 </option>
                    </select>
                    <select className="form-select setformday " aria-label="Default select example">
                        <option selected>năm</option>
                        <option value="1 ">năm 2023 </option>
                        <option value="2 ">năm 2022 </option>
                        <option value="3 ">năm 2021 </option>
                        <option value="4 ">năm 2020 </option>
                        <option value="5 ">năm 2019 </option>
                        <option value="6 ">năm 2018 </option>
                    
                    </select>
                    <select className="form-select setformgender " aria-label="Default select example">
                        <option selected>chọn</option>
                        <option value="1 ">nam  </option>
                        <option value="2 ">nữ  </option>
                    
                    </select>
                </div>
                
            </section>
            <section className="section2">
                <div className="mb-3 ">
                    <label for="" className="form-label color-text">Họ tên*</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Họ tên"/>
                    <span id="errName"></span>
                </div>
                <div className="check">
                    <input type="checkbox" className="incheck"/>
                    <span>Tôi muốn cập nhật thông tin ưu đãi qua SMS</span>
                </div>
                
                <button type="submit" value="submit" className="btn-sign">ĐĂNG KÍ</button>
                <div className="text-policy">
                    <p>Tôi đã đọc và đồng ý với 
                        <span> <a href="">Điều Khoản Sử Dụng</a> </span>  
                        và 
                        <span> <a href="">Chính Sách Bảo Mật của Lazada</a>
                            
                        </span>
                      của Lazada, bao gồm quyền thu thập, sử dụng, và tiết lộ dữ liệu cá nhân của tôi theo pháp luật quy định</p>
                </div>
                <div className="text-policy">
                    <p>Hoặc Đăng kí với</p>
                </div>
                <button className="btn-signemail">Đăng ký bằng Email</button>
                <div className="fa-go">
                    <button className="fa">
                        <i className="fab fa-facebook-f" style={{color: "#fff;"}}></i>
                        <span>Facebook</span>
                    </button>
                    <button className="fa fa-back">
                        <i className="fab fa-google-plus-g fa-lg" style={{color: "#fff;"}}></i>
                        <span>Google</span>
                    </button>
                        
                    
                </div>
            </section>
        </form>
        <div >

        
            
        </div>
      
    </div>
        </>
    )
}
export default SignIn