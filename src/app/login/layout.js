'use client'
import React from 'react';
import Link from 'next/link';
import './login.css';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="login-container">
      {pathName !== '/login/loginteacher' ? (
        <React.Fragment>
          <ul className="login-links">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/login/loginstudent">Student Login</Link>
            </li>
            <li>
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
          </ul>
          <h1>Login Layout</h1>
        </React.Fragment>
      ) : (
        <Link href='/login'>Go to login page</Link>
      )}
      {children}
    </div>
  );
}
