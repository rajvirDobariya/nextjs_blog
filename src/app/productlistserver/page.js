import React from 'react'
import Product from './product';

async function productlist() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products; // Ensure that the property name matches the data structure
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error accordingly
  }
}

export default async function page() {
  const productList = await productlist();
  // console.log(productList);

  return (
    <div>
        <h1>Server Product List </h1>
        <div>
        {productList.map((item) => {
  return (
    <div key={item.id}> {/* Apply the 'key' prop here */}
      <div>{item.title}</div>
      <Product price={item.price} />
    </div>
  );
})}
        </div>
    </div>
  )
}
