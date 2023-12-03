'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles1 from './component.module.css';
import styles2 from './component2.module.css';
import styles3 from '@/styles/outside.module.css';
import { Roboto } from 'next/font/google';
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
 * Rendering-Client side('use client'), Server side(default), SEO,
 * Fetch API in client Component, Call API in Server Component, Both combine(Events works only in client Components)[in react js only use client side components]
 * Style-Global(import in layout page), Inline, CSS Module,
 * Image & props Optimization-Image Component(add domain in next.config.js), img Tag,
 * Font (next store in catch),
 * generate Metadata(Help in SEO-title, description, responsice-viewport),
 * Dynamic Metadata(Page wise Metadata),
 * ...Script Conponent,
 * Loader, 
 * Static [Assets-file]-js, image, css-SEO configuration, globally used files->put in public folder,
 * Production Build-Prod(build), Dev,
 * ...Static HTML Page with build,
 * Static Site Generation,
 * 
 *  
 */ 
  //roboto font
  const roboto=Roboto({
    subsets: ['latin'], 
    weight:'500'
  })

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
      {/* <h2>State Name is {name}</h2>
      <InnerConponent/>
      <User name='Anil' age='26'/>
      <button onClick={()=>apple("200")}>Click me</button>
      <br/><br/>
      <Link href='/login'>Go to login Page</Link>      
      <br/><br/>
      <Link href='/about'>Go to about Page</Link>
      <br/><br/>
      <button onClick={()=>router.push("/login")}>Go to login page</button> */}
      <Link href='/productlist'>Go to Product List</Link>      
      <h1 className='main'>Main Testing</h1>
      <h1 className={styles1.main}>h2 tag</h1>
      <h1 className={styles2.main}>h2 tag</h1>
      <h1 className={styles3.main}>Restarting the server to apply the changes...</h1>
      <h1 style={{fontFamily:'Roboto'}}>Restarting the server to apply the changes...</h1>
      <h1 className={roboto.className}>Restarting the server to apply the changes...</h1> 
      <p>P Tag</p>
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
