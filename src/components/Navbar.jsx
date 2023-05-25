import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo2 from './images/logo2.png';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <nav className="navbar">
        <a href="" className="logo">
          <img src={logo2} alt="logo" />
        </a>

        <div className="button1">Iniciar session</div>
        <div className="button1">Registro</div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={50} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menue active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>

          <li className="nav-item">
            <a href="/">Nosotros</a>
          </li>

          <li className="nav-item">
            <a href="/">Trading</a>
          </li>

          <li className="nav-item">
            <a href="/">Educación</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
