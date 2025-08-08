import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FOOD APP 🍔</div>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li> {/* ✅ This works now */}
        <li><Link to="/contact">Contact</Link></li>
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
