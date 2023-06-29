import { Link } from "react-router-dom"
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import authApis from "../../api/auth";
import moment from "moment";
const Login =()=>{
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm();
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user_token']);
    const login = async (data) => {
        const loginResponse = await authApis.login(data);
        console.log(loginResponse);
        if (loginResponse.success) {
            setCookie('user_token', loginResponse.data.user_token, { path: '/' , expires: moment().add(1, 'months').toDate()})
            navigate('/');

            return;
        }

        loginResponse.errors.forEach((error) => {
            console.log(error);
            const [key, value] = Object.entries(error)[0]
            setError(key, {
                type: 'server',
                message: value.message
            })
        })
    }
    return(
        <>
         <div className="contentlogin">
            <div className="header_log">
                <h3>Chào mừng đến với Lazada. Đăng nhập ngay!</h3>
                <p>Thành viên mới?
                    <span>
                        <Link to={"/signin"}>Đăng kí </Link>
                    </span>
                    tại đây
                </p>
            </div>
            <form className="section-login " name="login" onsubmit={handleSubmit(login)}>   
           

                <section className="section1-login">                
                    <div className="mb-3 ">
                        <label for="" className="form-label color-text">Số điện thoại hoặc email*</label>
                        <input type="" className="form-control" id="phone" placeholder="Vui lòng nhập số điện thoại hoặc email của bạn" name="phone"
                         {...register('phone', {
                            required:'Số điện thoại không được để trống',
                            maxLength: {
                                value: 12,
                                message: "Số điện thoại không được lớn hơn 12 ký tự"
                            },
                            minLength: {
                                value: 11,
                                message: "Số điện thoại không được ít hơn 11 ký tự"
                            }
                        })}
                        />
               
                        {errors.phone && <p className={'text-danger fw-bold'}>{errors.phone.message}</p>}
                    </div>
                    
                    <div className="mb-3  ">
                        <label for="" className="form-label color-text">Mật Khẩu*</label>
                        <div className="da-son-login">
                            <input name="pass"  type="password" className="form-control" id="pass" placeholder="Vui lòng nhập mật khẩu của bạn"
                             {
                                ...register('password', {
                                    required: 'Mật khẩu không được để trống',
                                    maxLength: {
                                        value: 20,
                                        message: "Mật khẩu không được lớn hơn 20 ký tự"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Mật khẩu không được ít hơn 6 ký tự"
                                    }
                                })
                            }  />
                            <div  className="eye">
                                <i id="showPass"className=" fas fa-eye"></i>
                               
                                <i id="hidePass" className="fas fa-eye-slash"></i>
                                
                            </div>
                        </div>   
                        <span id="errPassWord"></span>
                    </div>  
                    <div className="forgotpass">
                        
                            <span>
                                <a href="../Lazada/signin.html">Quên mật khẩu?</a>
                            </span>
                         
                       
                    </div>
                </section>
                <section className="section2-login">
                  
                    
                    <button type="submit" value="submit"  className="btn-sign-login">ĐĂNG NHẬP</button>
                    <div className="text-policy-login">
                        <p>Hoặc, đăng nhập bằng</p>
                    </div>
                    
                    <div className="fa-go-login">
                        <button className="fa-login">
                            <i className="fab fa-facebook-f" style={{color: "#fff;"}}></i>
                            <span>Facebook</span>
                        </button>
                        <button className="fa-login fa-back-login">
                            <i className="fab fa-google-plus-g fa-lg" style={{color: "#fff;"}}></i>
                            <span>Google</span>
                        </button>
                            
                        
                    </div>
                </section>
            </form>
        </div>
        </>
    )
}
export default Login