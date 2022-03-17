import React, { useState } from "react"
import axios from "axios"

export default function Products(props){
    
    const [products,setProducts]=useState(props && props.products)
    console.log(products)


    return(
        <>
        <div>Products</div>
        {products && products.map((item)=>{
            <div>
                <div>abcd</div>
                <div>{item.title}</div>
            </div>
        })}
        </>
    )
}

export const getServerSideProps=()=>{
    var config={
        method: "get",
        url: "http://localhost:5000/products"
    }
    var product = axios(config)
    .then((res)=>{
        console.log(res,"result")
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })

    return { props: product }
}
