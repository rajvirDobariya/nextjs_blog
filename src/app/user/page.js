// 'use client'
import React from 'react';
import Employee from '../../components/employee';
export default function Page() {

    // const [h3Style,setH3Style] = useState({color:"blue"});

  return (
    <div>
      <h1 style={{color:"blue"}}>User Page</h1>
      <Employee/>
      {/* <h3 style={h3Style}>This is h3 tag</h3> */}
      {/* <button onClick={()=>setH3Style({color:"green"})}>On Change</button> */}
    </div>
  )
}


export function generateMetadata({params}) {
  return {
    title:"user title",
    description:"user description"
}
}
