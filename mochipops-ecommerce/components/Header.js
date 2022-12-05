// components/Header.js
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
const Header = () => {
 return (
    <div className={styles.navbar}>
      <nav className={styles.navbar}>
        <Link href="/" legacyBehavior>

            <div className={styles.logo}>
              <Image
                src="/../public/images/IMG_1776.PNG"
                alt=""
                width={200}
                height={200}
                />
            </div>
        </Link>
            {/* <nav>
              <a href="/html/" className={styles.navbar_item}>About</a>
              <a href="/css/" className={styles.navbar_item}>Our product</a>
              <a href="/js/" className={styles.navbar_item}>Contact</a>
              <a href="/python/" className={styles.navbar_item}>Taste</a>
              </nav> */}
        <nav className={styles.navbar_container}>
          <Link href="/" className={styles.nav_price}>Contact</Link>
          <Link href="#about_container" className={styles.nav_price}>About us</Link>
          <Link href="/" className={styles.nav_price}>Follow</Link>
          <Link href="/" className={styles.nav_price}>Products</Link>
          <div className="nav-price snipcart-checkout">
            <span>🛒</span>
            <p className="snipcart-total-price">$0.00</p>
          </div>
        </nav>
     </nav>
   </div>
 );
};

export default Header;
