'use client'
import React from 'react'

export default function Page({params}) {
    console.log(params.lecture);
  return (
    <div>
      <h2>{params.lecture[0]}</h2>
      <h2>{params.lecture[1]}</h2>
      <h2>{params.lecture[2]}</h2>
      <h2>{params.lecture[3]}</h2>
      <h2>{params.lecture[4]}</h2>
    </div>
  )
}
