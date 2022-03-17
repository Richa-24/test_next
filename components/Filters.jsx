import React, {useState,useEffect} from "react";
import axios from "axios"

export default function Filters(){

    const [categories,setCategories]=useState()
    const [brands,setBrands]=useState()
    const [subName,setSubName]=useState()

    useEffect(()=>{
        var config={
            method: "get",
            url: "http://localhost:5000/filters"
        }

        axios(config)
        .then((res)=>{
            console.log(res.data.searchFilter.categories)
            setCategories(res.data?.searchFilter?.categories)
            setBrands(res.data?.searchFilter?.brands)
        })
        .catch((err)=>console.log(err))
    },[])

    const handleSub=(subCat)=>{
        setSubName(subCat)
    }

    const handleApplyFilters=()=>{
        
    }

    return(
        <>
            <h1>Filters</h1>
            <h3>Categories</h3>
            {categories && categories.map((item)=>(
                <>
                <div key={item.id} style={{display: "flex"}}>
                <div><input type="checkbox"/></div>
                <div onClick={()=>handleSub(item.name)} className="category">{item.name}</div>
                </div>

                {/* {subName == item.name && */}
                <div style={{paddingLeft: "20px"}}>
                {item.subCategories && item.subCategories.map((elem)=>(
                    <div key={elem.id} style={{display: "flex"}}>
                        <div><input type="checkbox"/></div>
                        <div>{elem.name}</div>
                    </div>
                ))}
                </div>
                {/* } */}
                </>
            ))}

            <h3>Brands</h3>
            {brands && brands.map((item)=>(
                <div key={item.id} style={{display: "flex"}}>
                <div><input type="checkbox"/></div>
                <div>{item.name}</div>
                </div>
            ))}

            <button onClick={()=>handleApplyFilters()}>APPLY FILTERS</button>
        </>
    )
}