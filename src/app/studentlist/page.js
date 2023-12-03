import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Student List</h1>
        <ul>
            <Link href='/studentlist/Bhaskar'>Bhaskar</Link><br></br>
            <Link href='/studentlist/Anil'>Anil</Link><br></br>
            <Link href='/studentlist/Sam'>Sam</Link><br></br>
        </ul>
    </div>
  )
}
