import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaRulerHorizontal } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import prodApis from "../../api/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Detail=()=>{
    const urlParams = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct();
    }, [urlParams])
    const getProduct=()=>{
        (
            async () => {
                const productResponse = await prodApis.show(urlParams.productId);
                if (productResponse.success) {
                    setProduct(productResponse.data)
                   document.getElementsByClassName("img-show")[0].src=productResponse.data.thumbnail;
                }
            }
        )()
    }
    console.log(product);
    return(
        <>
         <div className="content-details">
            <div className="cover-detail">
                <div className="img-detail">
                    <div className="left-detail">
                        
                        <img className="img-show" src="" alt=""/>
                        
                        <div className="img-mini" >
                            {
                                product.images && product.images.map((image,index)=>{
                                    if (index === 0) {
                                        return (
                                            <img className="img active" src={image} alt="" key={index}/>
                                        )
                                    }
                                    return(
                                        <img className="img" src={image} alt="" key={index}/>
                                    )
                                })
                            }
                        </div>
                        <div className="iconimg">
                            <div className="pre-icon">
                                
                                <AiOutlineLeft style={{color:"#bdc4d1"}}></AiOutlineLeft>
                            </div>
                            <div className="next-icon">
                              
                                <AiOutlineRight style={{color:"#bdc4d1"}}></AiOutlineRight>
                            </div>
                        </div>
                    </div>

                    <div className="center-detail">
                        <img src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01Ir7cAE1tWpT1x30qx_!!6000000005910-2-tps-187-52.png" alt=""/>
                        <p id="title"></p>
                        <div className="star">
                            <div className="star-icon">
                               
                                <AiFillStar style={{color:"#faca53"}}></AiFillStar>
                                <span>
                                    648 đánh giá
                                </span>
                            </div>
                            <img src="/images/sharelove.jpg" alt=""/>
                            
                        </div>
                        <div className="origin">
                            <p>Thương hiệu:</p>
                            <span>No Brand</span>
                            <p>|</p>
                            <span>Xem thêm Giày nam của No Brand</span>
                        </div>
                        <div className="style-color">
                            <span id="price-after"> </span><span> {product.price}.000 ₫</span>
                            <div className="style">
                                <span id="sale-price">
                                    <span id="sale-price-after">
                                    
                                    </span> 
                                    <span> {product.price}.000 ₫</span>
                                </span>
                                
                                <span className="space">-</span>
                                <p id="counter">{product.discountPercentage0}</p>
                                <span className="space-after">%</span>
                            </div>
                            
                        </div>
                        <div className="voucher">
                            <p>Ưu đãi</p>
                            <img src="/images/voucher.jpg" alt=""/>
                        </div>
                        <div className="color voucher">
                            <p>Màu Sắc</p>
                            <div className="colr-text">
                                <p id="text-dem">Loang Đen</p>
                                <div className="img-color ">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="size voucher">
                            <p>Size</p>
                            <div>
                                <div className="size-value">
                                    <p id="text-size">42</p>
                                <span id="open-table">Bảng quy đổi kích thước
                               
                                    <FaRulerHorizontal></FaRulerHorizontal>
                                </span>

                                </div>
                                
                                <div className="box-size">
                                    <div className="box-key">
                                        <p className="sizee">39</p>
                                    </div>
                                    <div className="box-key">
                                        <p className="sizee">40</p>
                                    </div>
                                    <div className="box-key">
                                        <p className="sizee">41</p>
                                    </div>
                                    <div className="box-key active-key">
                                        <p  className="sizee">42</p>
                                    </div>
                                    <div className="box-key">
                                        <p className="sizee">43</p>
                                    </div>
                                    <div className="box-key">
                                        <p className="sizee">Ngẫu nhiên</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="number-products voucher">
                            <p>Số lượng</p>
                            <button className="minus" id="minus">
                              
                                <AiOutlineMinus style={{color:"#9297a0"}}></AiOutlineMinus>
                            </button>
                            <p id="number-pr">1</p>
                            <button type="button" className="minus " id="plus" >
                         
                                <AiOutlinePlus style={{color:"#9297a0"}}></AiOutlinePlus>
                            </button>
                            
                        </div>
                        <div className="goto">
                            <button className="buy">
                                <p>Mua ngay</p>
                            </button>
                            <button className="buy add">
                                <p>Thêm vào
                                    giỏ hàng</p>
                            </button>
                        </div>
                        
                    </div>

                    <div className="right-detail">
                        <p>Tuỳ chọn giao hàng</p>
                        <div className="location">
                           
                            <FaMapMarkerAlt style={{color:"#c3c6cb"}}></FaMapMarkerAlt>
                            <div id="hcm">Hồ Chí Minh, Quận 1, Phường Phạm Ngũ Lão</div>
                            <p>THAY ĐỔI
                            </p>
                        </div>
                        <div className="delevery">
                            
                            <FaTruckMoving style={{color:"#a2a7ae"}}></FaTruckMoving>
                            <div className="gh">
                                <p>GH tiêu chuẩn</p>
                                <span>Nhận vào 17-19 thg 4</span>
                            </div>
                            <span>23.600 ₫</span>
                        </div>
                        <div className="money">
                            
                            <CiMoneyCheck1 style={{color:"#b6b7b9"}}></CiMoneyCheck1>
                            <p>Thanh toán khi nhận hàng. (Không được đồng kiểm)</p>
                        </div>
                        <img className="protect" src="/images/protect.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Detail