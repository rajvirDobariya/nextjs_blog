'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  
  //router
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>router.push("/about/aboutstudent")}>Go to about student page</button>
      <br/><br/>
      <Link href='/about/aboutcollage'>Go to about collage Page</Link>
    </div>
  )
}
