import Product from "./product"
import { useEffect, useState } from "react"
import { useRef } from "react";
const Deal=()=>{
    
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    useEffect(() => {
    const countdownDate = new Date(); // Ngày giờ hiện tại

    countdownDate.setHours(23);
    countdownDate.setMinutes(17);
    countdownDate.setSeconds(25);
     //countdownDate sau khi set giá trị
    const interval = setInterval(() => {
      const now = new Date().getTime();//thời gian hiện tại =mili giây
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        // Đã hết thời gian đếm ngược
        clearInterval(interval);
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      } else {
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setHours(h < 10 ? `0${h}` : h.toString());
        setMinutes(m < 10 ? `0${m}` : m.toString());
        setSeconds(s < 10 ? `0${s}` : s.toString());
      }
    }, 1000);

    return () => {
        clearInterval(interval);
        };
  }, []);
    
   
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
                                <p className="hours">{hours}</p>
                            </div>
                            <div>:</div>
                            <div className="red-box">
                                <p className="minutes">{minutes}</p>
                            </div>
                            <div>:</div>
                            <div className="red-box">
                                <p className="seconds">{seconds}</p>
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

