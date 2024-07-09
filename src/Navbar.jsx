// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav style={{ fontFamily: 'Arial, sans-serif', marginLeft: '20px'}}> 
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          <NavLink
            to="/home"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
          >
            <FaHome style={{ marginRight: '5px' }} />
            Home
          </NavLink>
        </li>
        <li style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          <NavLink
            to="/about"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <IoPersonCircleSharp style={{ marginRight: '5px' }}/>
            About
          </NavLink>
        </li>
        <li style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          <NavLink
            to="/faq"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <FaQuestion style={{ marginRight: '5px' }}/>
            FAQ
          </NavLink>
        </li>
        <li style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          <NavLink
            to="/contact"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <BsFillTelephoneFill style={{ marginRight: '5px' }}/>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
