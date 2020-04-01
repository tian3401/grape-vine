import React from 'react'
import '../styles/navbarStyles.css'; 
import {
  Link
} from 'react-router-dom'; 

export default function Navbar() {
  return (
    < nav className="navbar">
      <ul>
        <li className="nav-link" id="name">
          <Link to="/" className="link">
            Grapevine
          </Link>
        </li>
      </ul>
      <ul className="vine-container">
        <li className="vine-logo">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="vine"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </li>
      </ul>
      <ul className="extra-links">
        <li className="nav-link">
          <Link to="/share" className="link">
            Share
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/explore" className="link">
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  )
}
