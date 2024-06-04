import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div><span className="logo">Logo</span></div>
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header