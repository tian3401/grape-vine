import React from 'react'
import '../styles/navbarStyles.css'; 
import {
  Link
} from 'react-router-dom'; 

export default function Navbar() {
  return (
    < nav class="navbar">
      <ul>
        <li class="nav-link" id="logo">Grapevine</li>
      </ul>
      <ul class="extra-links">
        <li class="nav-link">
          <Link to="/share">
            Share
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/explore">
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  )
}
