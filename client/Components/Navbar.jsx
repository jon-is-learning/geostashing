import React from 'react';

const Navbar = (props) => (
  <nav className="teal">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Geostashing</a>
      <ul className="right hide-on-med-and-down">
        <li className={
            props.page === 'find'
            ? 'active'
            : ''}>
          <a onClick={props.gotoFind} href="#find">find stash</a>
        </li>
        <li className={
            props.page === 'create'
            ? 'active'
            : ''}>
          <a onClick={props.gotoCreate} href="#add">new stash</a>
        </li>
        <li>account...</li>
      </ul>
      <ul data-activates="mobile-demo" className="right hide-on-large-only">
        <li onClick={props.gotoFind} className={
            props.page === 'find'
            ? 'active'
            : ''}>
          <a href="#find"><i className="material-icons">search</i></a>
        </li>
        <li onClick={props.gotoCreate} className={
            props.page === 'create'
            ? 'active'
            : ''}>
          <a href="#add"><i className="material-icons">add</i></a>
        </li>
        <li onClick={props.signOut} className={
            props.page === 'create'
            ? 'active'
            : ''}> account...</li>
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  page: React.PropTypes.string,
  gotoCreate: React.PropTypes.func,
  gotoFind: React.PropTypes.func
};

export default Navbar;
