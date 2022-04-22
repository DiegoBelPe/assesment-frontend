import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.Navbar__container}>
      <NavLink className={styles.text} to="/">
        Home
      </NavLink>
      <NavLink className={styles.text} to="/about">
        About
      </NavLink>
    </div>
  );
}

export default Navbar;
