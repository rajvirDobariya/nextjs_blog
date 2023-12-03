'use client'
import React from 'react'

export default function Page({params}) {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h2>Name is:{params.student}</h2>
    </div>
  )
}
