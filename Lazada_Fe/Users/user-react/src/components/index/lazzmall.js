import { useEffect } from "react"
import { Link } from "react-router-dom"
import prodApis from "../../api/products";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
const LazzMall=()=>{
    const [brand,setBrand]=useState([]);
    useEffect(()=>{
        getBrand();
    },[])
    const getBrand=()=>{
        (
            async () =>{
                const brandResponse = await prodApis.index();
                
                if (brandResponse.success) {
                    setBrand(brandResponse.data.products);
                }
            }
        )()
       
    }
    return (
        <>
         <div className="lazmall ">
            <div className="header-lazzmall">
                <h3>Lazzmall</h3>
                <Link >Xem thêm
                   <AiOutlineRight></AiOutlineRight>
                </Link>
            </div>
            <div className="content-lazzmall">
                {
                     brand.map((brand,index)=>{
                        return(
                            <div className="lazz" key={index}>
                                <Link >
                                    <img src={brand.thumbnail} alt=""/>
                                    <div className="overlay"></div>
                                    <img className="setimg" src="https://lzd-img-global.slatic.net/g/shop/85843141db5651c3e46c8c63072e9bb9.jpeg_120x120q80.jpg_.webp" alt=""/>
                                    <span> {brand.brand} </span>
                                    <p> {brand.brand} </p>
                                </Link>
                            </div>
                        )
                     })
                }
                
            </div>
        </div>
        </>
    )
}
export default LazzMall