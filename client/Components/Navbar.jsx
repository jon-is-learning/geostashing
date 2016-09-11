import React from 'react';

const Navbar = () => (
  <nav className="teal">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"> Geostashing</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#add">find stash</a></li>
        <li><a href="#find">new stash</a></li>
        <li>account...</li>
      </ul>
      <ul data-activates="mobile-demo" className="right hide-on-large-only">
        <li>
          <a href="#add"><i className="material-icons">search</i></a>
        </li>
        <li><a href="#find"><i className="material-icons">add</i></a></li>
        <li>account...</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
