import Link from 'next/link'
import React from 'react'
import { CiCalendar } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo">VILLA</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/property">Properties</Link>
            <Link href="/contact">Contact</Link>
            <span className='nav-logo'><CiCalendar className="calendar-logo" /><Link href="/" >Schedule a visit</Link></span>
        </nav>
    </header>
  )
}

export default Header
