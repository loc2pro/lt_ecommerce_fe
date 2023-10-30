import React from 'react';
import styles from './style.module.scss';
import dataHeader from '../../views/layout/Header/data';
import Image from 'next/image';
const Header = () => {
  return (
    <div className={`${styles.header} ${styles.max_width}`}>
      <div className={styles.header__top}>
        <ul>
          <li>
            Mon-Thu : <span>{dataHeader.openHours}</span>
            <Image src="/icon/homePages/down.svg" alt="down icon" width={16} height={14} className={styles.header__top_iconDown} priority />
          </li>
          <li>Visit our showroom in  {dataHeader.address} <a href='tel:0987556203'> Contact Us </a></li>
          <li>
            Call Us:{dataHeader.contact}
            <a href="https://www.facebook.com" target="_blank" rel="">
              <Image src="/icon/homePages/facebook.svg" alt="facebook icon" width={20} height={20} className={styles.header__top_iconFacebook} priority />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="">
              <Image src="/icon/homePages/instagram.svg" alt="instagram icon" width={20} height={20} className={styles.header__top_iconInstagram} priority />
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
