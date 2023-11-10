import styles from './style.module.scss';
import dataHeader from './dataHeader';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/commons/Nav';
import React, { useEffect, useState } from 'react';
// import ProductInCard form 
interface IHeader {
  openHours: string;
  address: string;
  phone: string;
  email: string;
  logoTitle: string;
  logoUrl: string;
  navItems: string;
  avataUserUrl: string;
  titleUser: string;
}

const Header = () => {
  const { openHours, address, phone, email, logoTitle, logoUrl, navItems, avataUserUrl, titleUser } = dataHeader[0];
  const [isSearch, setIsSearch] = useState<boolean>(true);
  const [mountShopInfo, setMountShopInfo] = useState<boolean>(false);
  const onClickSearchIcon = () => {
    setIsSearch(isSearch ? false : true);
  };
  const handleShopInfo = () => {
    setMountShopInfo(mountShopInfo ? false : true);
  };
  return (
    <header className={`${styles.header} ${styles.max_width}`}>
      <div className={styles.header__top}>
        <div className={styles.header__top_wrap}>
          <div>
            <span>
              Mon-Thu: <span style={{ color: 'white' }}>{openHours}</span>
            </span>
            <Image
              src="/assets/icon/down.svg"
              alt="Down Icon"
              width={20}
              height={20}
              className={`${styles.header__top_iconDown} ${
                mountShopInfo ? styles.transformIconDown : styles.transformIconUp
              }`}
              onClick={() => handleShopInfo()}
              priority
            />
            <div className={`${styles.shop__info} ${mountShopInfo ? styles.opacity__1 : styles.opacity__0}`}>
              <div>
                <Image
                  src="/assets/icon/time.svg"
                  alt="Time Icon"
                  width={35}
                  height={35}
                  priority
                  style={{ top: '8px' }}
                />
                <span>We are open:</span>
                <span style={{ color: '#A2A6B0' }}>
                  Mon-Thu: <span>{openHours}</span>
                </span>
                <span style={{ color: '#A2A6B0' }}>
                  Fr: <span> 9:00 AM - 6:00 PM</span>
                </span>
                <span style={{ color: '#A2A6B0' }}>
                  Sat: <span> 11:00 AM - 5:00 PM</span>
                </span>
              </div>
              <hr></hr>
              <div>
                <Image src="/assets/icon/map.svg" alt="Map Icon" width={35} height={35} priority />
                <span>{address}</span>
              </div>
              <hr></hr>
              <div>
                <span>
                  Phone :{' '}
                  <a style={{ color: '#0156FF' }} href={`tel:${phone}`}>
                    {' '}
                    {phone}
                  </a>
                </span>
                <span>
                  Email :{' '}
                  <a style={{ color: '#0156FF' }} href={`mailto:${email}`}>
                    {' '}
                    {email}
                  </a>
                </span>
              </div>
              <span className={styles.arrow__up}></span>
            </div>
          </div>
          <div>
            Visit our showroom in {address} <a href={`tel:${phone}`}>Contact Us</a>
          </div>
          <div>
            Call Us: {phone}
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
          </div>
        </div>
      </div>
      <div className={`${styles.header__last} ${styles.max_width}`}>
        <div className={styles.header__last__container}>
          <Link href={'/'}>
            <Image src={logoUrl} alt={logoTitle} width={84} height={68} className={styles.header__logo} priority />
          </Link>
          {isSearch ? (
            <nav className={styles.nav}>
              {navItems.map((item) => {
                return <Nav item={item} />;
              })}
            </nav>
          ) : (
            <div className={styles.search__wrap}>
              <input type="text" placeholder="Search entiere store here..." />
              <img
                src="/assets/icon/gg_search.svg"
                alt="Icon Search"
                width={20}
                height={20}
                style={{ cursor: 'pointer' }}
              />
            </div>
          )}
          <div className={styles.header__last__cartUser}>
            <div onClick={() => onClickSearchIcon()}>
              {isSearch ? (
                <img
                  src="/assets/icon/gg_search.svg"
                  alt="Icon Search"
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <img
                  src="/assets/icon/close.svg"
                  alt="Icon Close"
                  width={19}
                  height={19}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </div>
            <div>
              <img src="/assets/icon/shopping-cart.svg" alt="Icon Cart" width={32} height={32} />
              <span>{}</span>
            </div>
            <div>
              <Image src={avataUserUrl} alt={titleUser} width={36} height={36} />
              {/* <div className={`${styles.shop__info} ${mountShopInfo ? styles.opacity__1 : styles.opacity__0}`}>
                <span>
                  <Link href={'/'}>My Account</Link>
                </span>
                <span>
                  <Link href={'/'}>My Wish List (0)</Link>
                </span>
                <span>
                  <Link href={'/'}>Compare (0)</Link>
                </span>
                <span>
                  <Link href={'/'}>Create an Account</Link>
                </span>
                <span>
                  <Link href={'/'}>Sign In</Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
