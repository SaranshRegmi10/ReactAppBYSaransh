import React from 'react'
import "../Navbar/Navbar.css"

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                     <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to="/calulator" className='nav-link'>Calculator</Link>
                </li>
            </ul>
        </nav>
    )
}
