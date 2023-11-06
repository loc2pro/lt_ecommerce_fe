import React from 'react';
import styled from './style.module.scss';
import footer from './data';
import Image from 'next/image';


const index = () => {
  return (
    <footer className={styled.footer}>
      <section className={styled.widget__footer}>
        {footer.widgetsHeader.map((widget, index) => {
          return (
            <div key={index}>
              <img src={widget.urlImg} alt={widget.title} />
              <span>{widget.title}</span>
              <p>{widget.context}</p>
            </div>
          );
        })}
      </section>
      <div className={styled.footer__container}>
        <div className={styled.footer__central_wrap}>
          <div className={styled.footer__central__top}>
            <div>
              <h2>Sign Up To Our Newsletter</h2>
              <span>Be the first to hear about the latest offers</span>
            </div>
            <div>
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className={styled.footer__central__last}>
            {footer.headerCenter.map((item, index) => {
              return (
                <ul key={index}>
                  <span>{item.title}</span>
                  {item.parts.map((part, index) => {
                    return (
                      <li key={index}>
                        <a href={part.url}>{part.partTitle}</a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
            <ul>
              <span>Address</span>
              <li>{footer.address.address}</li>
              <li>{footer.address.phones}</li>
              <li>{footer.address.open}</li>
              <li>{footer.address.friday}</li>
              <li>{footer.address.saturday}</li>
              <li>{footer.address.eMail}</li>
            </ul>
          </div>
        </div>
        <div className={styled.footer__last}>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="">
              <Image src="/assets/icon/facebook.svg" alt="Facebook Icon" width={20} height={20} priority />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="">
              <Image src="/assets/icon/instagram.svg" alt="Instagram Icon" width={20} height={20} priority />
            </a>
          </div>
          <div>
            {footer.payment.map((item) => {
              return <Image src={item.urlImg} alt="Payment" width={34} height={20} priority />;
            })}
          </div>
          <span>Copyright © 2020 Shop Pty. Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default index;
