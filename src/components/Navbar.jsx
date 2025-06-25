import React from 'react';
import '../styles/Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">Emma Richmond</a>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li href="/" className="home">Home</li>
            <li href="/projects" className="projects">Projects</li>
            <li href="/contact" className="contact">Contact</li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;