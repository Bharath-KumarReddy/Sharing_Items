import React from 'react'
import { Link } from 'react-router-dom'
import PostItems from '../pages/postitem'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <Link className="navbar-brand" to="/" style={{color :"white"}}>Artifacts</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/userpage" style={{color : "white"}}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/getall" style={{color:"white"}}>Get Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/postitem" style={{color:"white"}}>Post Items</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
