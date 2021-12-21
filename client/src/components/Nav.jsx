import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Andale Mono' }}>Home</Link><br />
      <Link to="/map" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Andale Mono' }}>Map</Link>    </nav>
  );
}

export default Nav;