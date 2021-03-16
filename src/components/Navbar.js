import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="logo">ITEMS</div>
          <ul className="nav-links">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/Sign"> Sign</Link>
            </li>
            <li>
              <Link to="/Contacts"> Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
