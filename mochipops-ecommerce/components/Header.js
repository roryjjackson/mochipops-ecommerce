// components/Header.js

import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
const Header = () => {
 return (
    <nav className={styles.navbar}>
       <Link href="/">

          <div className={styles.logo}>
             <p>
                PLANTS <span className={styles.logo_span}>☘</span>
             </p>
          </div>

       </Link>
       <nav className="navbar container">

        <div className="nav-price snipcart-checkout">
          <span>🛒</span>
          <p className="snipcart-total-price">$0.00</p>
        </div>
      </nav>
  </nav>
 );
};

export default Header;
