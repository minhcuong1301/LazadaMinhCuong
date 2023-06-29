import { useEffect } from "react"
import { Link } from "react-router-dom"
import prodApis from "../../api/products";
import { useState } from "react";

    const Product=()=>{
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
                 <div className="product" id="listproduct">
                {
                    products.map((prod,index)=>{
                        
                        return(
                            <div className="pro1" key={index}>
                                <Link to={'products/'+prod.id +"/detail"}>
                                    <img  src={prod.thumbnail} alt=""/>
                                    <div className="textt">
                                        <p>{prod.description}</p>
                                        <span className="x">{prod.price}.000 ₫ </span>
                                        <section>
                                            <span className="y">{prod.price}.000 ₫ </span>
                                            <p>-{prod.discountPercentage}%</p>
                                        </section>
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
    export default Product