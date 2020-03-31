import React from 'react'
import '../styles/navbarStyles.css'; 
import {
  Link
} from 'react-router-dom'; 

export default function Navbar() {
  return (
    < nav class="navbar">
      <ul>
        <li class="nav-link" id="name">
          <Link to="/" class="link">
            Grapevine
          </Link>
        </li>
      </ul>
      <ul class="vine-container">
        <li class="vine-logo">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="vine">
          </div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </li>
      </ul>
      <ul class="extra-links">
        <li class="nav-link">
          <Link to="/share" class ="link">
            Share
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/explore" class ="link">
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  )
}
