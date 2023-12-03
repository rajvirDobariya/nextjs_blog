'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
      //router
const router = useRouter();

    return (
      <div className="login-container">
        <h1>Login Page</h1>
        {/* Your login page content */}
        <Link href="/login/loginstudent">Go to login student page</Link>
        <br />
        <br />
        <button onClick={() => router.push('/login/loginteacher')}>
          Go to login teacher page
        </button>
      </div>
    );
  }
  