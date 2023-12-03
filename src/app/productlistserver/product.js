'use client'
import React from 'react'

// export default function Product(props) {
export default function Product({price}) {
  return (
    <div>
      <button onClick={()=>alert(`Price is :${price}`)}>Check Price</button>
      {/* <div>{props.price}</div> */}
    </div>
  )
}
