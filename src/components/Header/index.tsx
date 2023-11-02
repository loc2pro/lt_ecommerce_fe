import React from 'react';
import styles from './style.module.scss';
import dataHeader from './dataHeader';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/commons/Nav';
const Header = () => {
  const { openHours, address, contact, logoTitle, logoUrl, navItems, avataUserUrl, titleUser } = dataHeader[0];

  return (
    <header className={`${styles.header} ${styles.max_width}`}>
      <div className={styles.header__top}>
        <ul>
          <li>
            Mon-Thu : <span>{openHours}</span>
            <Image
              src="/assets/icon/down.svg"
              alt="Down Icon"
              width={16}
              height={14}
              className={styles.header__top_iconDown}
              priority
            />
          </li>
          <li>
            Visit our showroom in {address} <a href="tel:0987556203"> Contact Us </a>
          </li>
          <li>
            Call Us: {contact}
            <div className={styles.wrap_icon_fb_instag}>
              <a href="https://www.facebook.com" target="_blank" rel="">
                <Image
                  src="/assets/icon/facebook.svg"
                  alt="Facebook Icon"
                  width={20}
                  height={20}
                  className={styles.header__top_iconFacebook}
                  priority
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="">
                <Image
                  src="/assets/icon/instagram.svg"
                  alt="Instagram Icon"
                  width={20}
                  height={20}
                  className={styles.header__top_iconInstagram}
                  priority
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.header__last} ${styles.max_width}`}>
        <div className={styles.header__last__container}>
          <Link href={'/'}>
            <Image src={logoUrl} alt={logoTitle} width={84} height={68} className={styles.header__logo} priority />
          </Link>
          <nav className={styles.nav}>
            <ul>
              {navItems.map((item) => {
                return <Nav item={item} />;
              })}
            </ul>
          </nav>
          <div className={styles.header__last__cartUser}>
            <div>
              <img src="/assets/icon/gg_search.svg" alt="Icon Search" width={20} height={20} />
            </div>
            <div>
              <img src="/assets/icon/shopping-cart.svg" alt="Icon art" width={32} height={32} />
            </div>
            <div>
              <Image src={avataUserUrl} alt={titleUser} width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
