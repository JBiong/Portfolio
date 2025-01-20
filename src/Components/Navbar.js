import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {sections.map((section) => (
            <li key={section.path}>
              <Link
                to={section.path}
                onClick={() => setMenuOpen(false)}
                className={location.pathname === section.path ? 'active' : ''}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/joshua-biong-b5330133b/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/JBiong" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
