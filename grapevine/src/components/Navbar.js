import React from 'react'
import '../styles/navbarStyles.css'; 
import {
  Link
} from 'react-router-dom'; 

export default function Navbar() {
  return (
    < nav className="navbar">
      <ul className="navbar__links--container">
        <li className="navbar__links" id="name">
          <Link to="/" className="link">
            Grapevine
          </Link>
        </li>
      </ul>
      <ul className="vine__container">
        <li className="vine__container--logo">
          <div className="vine__container--grapes"></div>
          <div className="vine__container--grapes"></div>
          <div className="vine__container--grapes"></div>
          <div className="vine__container--vine"></div>
          <div className="vine__container--grapes"></div>
          <div className="vine__container--grapes"></div>
          <div className="vine__container--grapes"></div>
        </li>
      </ul>
      <ul className="navbar__links--container">
        <li className="navbar__links">
          <Link to="/share" className="link">
            Share
          </Link>
        </li>
        <li className="navbar__links">
          <Link to="/explore" className="link">
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  )
}
