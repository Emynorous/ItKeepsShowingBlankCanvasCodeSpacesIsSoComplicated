import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Domů</Link></li>
        <li><Link to="/day/ponedeli">Pondělí</Link></li>
        <li><Link to="/day/utery">Úterý</Link></li>
        <li><Link to="/day/streda">Středa</Link></li>
        <li><Link to="/day/ctvrtek">Čtvrtek</Link></li>
        <li><Link to="/day/patek">Pátek</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;