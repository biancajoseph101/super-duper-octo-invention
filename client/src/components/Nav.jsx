import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Copperplate, Papyrus, fantasy' }}>Home</Link><br />
      <Link to="/map" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Copperplate, Papyrus, fantasy' }}>Map</Link>    </nav>
  );
}

export default Nav;