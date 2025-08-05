import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FOOD APP 🍔</div>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className={styles.icons}>
        <FaShoppingCart className={styles.cartIcon} />
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
