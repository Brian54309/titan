import logo from "/logo.png"
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ background: 'linear-gradient(90deg, #E6E0FF 0%, #D8E4FF 100%)' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ height: '70px' }} className="me-2" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            Product
            </a>
            <ul className="dropdown-menu" aria-labelledby="productDropdown">
              <li><Link className="dropdown-item" to="/kvision">Kvision</Link></li>
              <li><Link className="dropdown-item" to="/nex">Nex</Link></li>
              <li><Link className="dropdown-item" to="/matrix">Matrix</Link></li>
              <li><Link className="dropdown-item" to="/broco">Broco</Link></li>
            </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
