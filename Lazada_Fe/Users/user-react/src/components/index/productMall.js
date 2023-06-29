import { useEffect } from "react"
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import prodApis from "../../api/products";
import { useState } from "react";
const ProductMall=()=>{
    const [products, setProducts] = useState([]);
        useEffect(()=>{
            getProducts();
        },[])
        const getProducts=()=>{
            (
                async () =>{
                    const productsResponse = await prodApis.index();
                    if (productsResponse.success) {
                        setProducts(productsResponse.data.products);
                    }
                }
            )()
           
        }
    return(
        <>
         <div className="product">
            {
                products.map((prod,index)=>{
                    return(
                        <div className="pro1" key={index}>
                            <Link to={'products/'+1 +"/detail"}>
                                <img src={prod.thumbnail}  alt=""/>
                                    <div className="lazm">
                                        <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png" alt=""/>
                                    </div>
                                <div className="textt">
                                    <p>{prod.description}</p>
                                    <span className="x">{prod.price}.000 ₫ </span>
                                    <section>
                                        <span className="y">{prod.price}.000 ₫ </span>
                                        <p>-{prod.discountPercentage}%</p>
                                    </section>

                                </div>
                                <div className="star">
                                    <div className="star-icon">
                                    <AiFillStar style={{color:"#faca53"}}></AiFillStar>
                                    </div>
                                    <div className="number">
                                        (213)
                                    </div>
                                </div>
                            </Link>
                    </div> 
                    )
                })
            }
                            
            </div>
        </>
    )
}
export default ProductMall