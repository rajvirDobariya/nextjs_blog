'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
/**
 * Components, Props, Event, State, Function, File, Folder, 
 * Types Components->by default-server, 'use client'-event-ui-client,
 * Routing- Pages-file base routing- Pattern-src/login/page.js,
 * Linking and Navigation-Button,
 * Nested Routing- Pattern-src/about/aboutcollage/page.js,
 * Common Layout, Conditional Layout,
 * Dynamic Routes, 700 crr user,
 * Catch-all Segments of  Route,
 * 404 not found -global, route specific,
 * Middleware-Authentication,
 * Rendering,
 * 
 * 
 */
export default function Home() {
  //router
  const router = useRouter();
  //state
  const [name,setName]= useState('Enter your name');
  //function
  const apple=(item)=>{
    alert("Apple "+item);
    setName('Sidhu');
  }

  const InnerConponent=()=>{
    return (
    <div>
      <h1>Inner Component</h1>
    </div>
      )
  }
  return (
    <main>
      <h1>Home Page</h1>
      <h2>State Name is {name}</h2>
      <InnerConponent/>
      <User name='Anil' age='26'/>
      <button onClick={()=>apple("200")}>Click me</button>
      <br/><br/>
      <Link href='/login'>Go to login Page</Link>      
      <br/><br/>
      <Link href='/about'>Go to about Page</Link>
      <br/><br/>
      <button onClick={()=>router.push("/login")}>Go to login page</button>
    </main>
  )
}

const User = (props)=>{
  return (
    <div>
      <h1>User name is {props.name} and age is {props.age}</h1>
    </div>
  )
}
