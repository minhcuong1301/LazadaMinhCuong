import Product from "./product"
const Deal=()=>{
    return(
        <>
            <div className="deal ">
                <h3>Deal Chớp Nhoáng</h3>
                <div className="top-deal">
                    <div className="left-deal">
                        <p>Đang bán</p>
                        <span>Kết thúc trong</span>
                        <div className="timer">
                            <div className="red-box">
                                <p className="hours">03</p>
                            </div>
                            <div>:</div>
                            <div className="red-box">
                                <p className="minutes">53</p>
                            </div>
                            <div>:</div>
                            <div className="red-box">
                                <p className="seconds">27</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-deal">
                        <a href="#">
                            MUA SẮM TOÀN BỘ SẢN PHẨM
                        </a>
                    </div>
                </div>
                
                <Product></Product>
            </div>
            
        </>
    )
}
export default Deal