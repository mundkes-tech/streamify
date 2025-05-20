import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'lightblue',  padding: '16px 0'}}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="navbar-brand"  style={{fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-movie" className="navbar-brand"  style={{fontSize: '20px' }}>Add Movie</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;