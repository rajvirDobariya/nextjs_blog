'use client'
import React, { useEffect, useState } from 'react'

export default function Page() {

    const [products,setProducts] = useState([]);
    //use effect
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                let stringSData = JSON.stringify(data);
                console.log(data);
                console.log(data.products);
                setProducts(data.products);
            }catch(error){
                console.log("Error fetching data :",error);
            }  
        }
        fetchData();
      },[])

  return (
    <div>
        <h1>Product List </h1>
        <div>
        {products.map((item) => {
            return (
                <div key={item.id}>{item.title}</div>
            );
        })}
        </div>
    </div>
  )
}
