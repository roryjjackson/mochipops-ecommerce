// components/Header.js
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
const Header = () => {
 return (
    <nav className={styles.navbar}>
       <nav className={styles.navbar_container_one}>
       <div className={styles.logo}>
          <Image
            src="/../public/images/IMG_1776.PNG"
            alt=""
            width={80}
            height={80}
          />
        </div>
        <div className="nav-price snipcart-checkout">
          <span>🛒</span>
          <p className="snipcart-total-price">$0.00</p>
        </div>
      </nav>
      <Link href="/" legacyBehavior>
        <div className={styles.logo}>
          <Image
            src="/../public/images/IMG_1776.PNG"
            alt=""
            width={300}
            height={120}
          />
        </div>
      </Link>
      <nav className={styles.navbar_container_two}>
        <Link href="/" className={styles.nav_price}>Contact</Link>
        <Link href="#about_container" className={styles.nav_price}>About us</Link>
        <Link href="/" className={styles.nav_price}>Follow</Link>
        <Link href="/" className={styles.nav_price}>Products</Link>
      </nav>
    </nav>
 );
};

export default Header;
