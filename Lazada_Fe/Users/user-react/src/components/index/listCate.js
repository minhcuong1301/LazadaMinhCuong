import { useEffect } from "react"
import { Link } from "react-router-dom"
import prodApis from "../../api/products";
import { useState } from "react";
const ListCate=()=>{
    const [cate,setCate]=useState([]);
    useEffect(()=>{
        getCate();
    },[])
    const getCate=()=>{
        (
            async () =>{
                const cateResponse = await prodApis.index();
                
                if (cateResponse.success) {
                    setCate(cateResponse.data.products);
                }
            }
        )()
       
    }
    return (
        <>
        <div className="category">
            <h3>Danh mục ngành hàng</h3>
            <div className="cate">
                {
                    cate.map((cate,index)=>{
                        return (                        
                            <div className="cate1" key={index}>
                                <Link >
                                    <img src={cate.thumbnail} alt=""/>
                                    <p>
                                    {cate.category}
                                    </p>
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
export default ListCate