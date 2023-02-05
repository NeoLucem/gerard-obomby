import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="container-fluid bg-dark">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
            <svg className="bi me-2" width={40} height={32}></svg>
            <span className="fs-4">GERARD OBOMBY</span>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className="nav-link " aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        </header>
    </div>
  )
}

export default Header