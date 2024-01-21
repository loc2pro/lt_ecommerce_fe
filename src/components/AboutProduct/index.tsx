'use client';
import React, { FunctionComponent } from 'react';
import styled from './style.module.scss';
import { mockupData } from './data';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CurentBox from '@/commons/CurentBox';
import Details from '@/commons/Details';
import Specs from '@/commons/Specs';
interface IsearchParams {
  idProduct: string;
  brandProduct: string;
}

export default function index() {
  const searchParams = useSearchParams()!;
  const idProduct = searchParams.get('id');
  const brandProduct = searchParams.get('brand');

  const data = { idProduct: idProduct || '', brandProduct: brandProduct || '' };
  const {
    id,
    modelName,
    imageUrl,
    company,
    operatingSystem,
    processorCompany,
    processorModel,
    graphicsCard,
    memory,
    storage,
    price,
    display,
    priceDiscount,
    colors,
    sku,
    imgSliders,
    description,
  } = mockupData[parseInt(data.idProduct)] || {};
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeOwlDot, setActiveOwlDot] = useState(0);
  const [activeOwlDotBaner, setActiveOwlDotBaner] = useState(0);
  const [activeImg, setActiveImg] = useState('');

  const addActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const addActiveOwlDot = (index: number) => {
    setActiveOwlDot(index);
  };
  const addActiveOwlDotBaner = (index: number) => {
    setActiveOwlDotBaner(index);
  };
  const [quantity, setQuantity] = useState(1);
  const onChangeQuantity = (signal: string) => {
    let curentQuantity = quantity;
    if (signal === 'UP') {
      curentQuantity++;
      setQuantity(curentQuantity);
    }
    if (signal === 'DOWN' && curentQuantity > 1) {
      curentQuantity--;
      setQuantity(curentQuantity);
    }
  };
  const getUrlMainImg = (index: number) => {
    setActiveImg(`${imgSliders[index].url}`);
  };
  // const totalProduct : number= price*quantity;

  return (
    <>
      <section className={styled.container}>
        <div className={styled.section__top}>
          <div className={styled.about_product_breadcrumb}>
            <div className={activeIndex === 0 ? styled.active : ''} onClick={() => addActiveIndex(0)}>
              About Product
            </div>
            <div className={activeIndex === 1 ? styled.active : ''} onClick={() => addActiveIndex(1)}>
              Details
            </div>
            <div className={activeIndex === 2 ? styled.active : ''} onClick={() => addActiveIndex(2)}>
              Specs
            </div>
          </div>
          <div className={styled.section__top_bill}>
            <span>
              On Sale from <b>{price}</b>
            </span>
            <div className={styled.section__top_bill_quantity}>
              <span>{quantity}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'scaleY(-1)' }}
                onClick={() => {
                  onChangeQuantity('UP');
                }}
              >
                <path d="M10 5.76923L8 7.76923L6 5.76923" stroke="black" stroke-width="1.6" stroke-linecap="round" />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  onChangeQuantity('DOWN');
                }}
              >
                <path d="M10 5.76923L8 7.76923L6 5.76923" stroke="black" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </div>
            <button>Subscribe</button>
            <button>
              <img src="\assets\icon\paypal.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styled.wrapper}>
          <div className={styled.product_detai}>
            <div className={styled.product_detai_wrapper}>
              <div className={styled.pape_breadcrumb}>
                <Link href="#">
                  <b>Home</b>
                </Link>
                <span> &gt; </span>
                <Link href="#">
                  <b>Laptops</b>
                </Link>
                <span> &gt; </span>
                <Link href="#">{modelName}</Link>
              </div>
              <h3>{modelName}</h3>
              <p>Be the first to review this product</p>

              {activeIndex === 0 ? (
                <CurentBox colors={colors} description={description} />

              ) : activeIndex === 1 ? (
                <Details  colors = {colors}
                sku ={sku}
                storage = {storage}
                memory = {memory}
                display = {display}
                graphicsCard = {graphicsCard}
                processorCompany = {processorCompany}
                processorModel = {processorModel}
                />
              ) : (
                <Specs colors={colors} description={description} />
              )}
              <div className={styled.product_detai_sku}>
                <span>
                  <b>Have a Question? </b> <Link href="#"> Contact Us </Link>
                </span>
                <span>SKU: {sku}</span>
              </div>
              <Link href="#">+ More information</Link>
            </div>
          </div>
          <div className={styled.product_image}>
            <Image
              src={activeImg === '' ? '/assets/image/ram01.png' : activeImg}
              width={250}
              height={440}
              alt="Picture of the author"
              key="index"
              className={styled.product_main_image}
            />

            <div className={styled.icon_image}>
              <img src="/assets/icon/tym.svg" alt="Tym " />
              <img src="/assets/icon/opinion.svg" alt="Frame Icon" />
              <img src="/assets/icon/mail.svg" alt="Mail Icon" />
            </div>
            <div className={styled.owl__dots}>
              {Array.isArray(imgSliders) && imgSliders.length > 0
                ? imgSliders.map((img, index) => (
                    <button
                      className={activeOwlDot === index ? styled.activeOwlDot : ''}
                      key={index}
                      onClick={() => {
                        getUrlMainImg(index);
                        addActiveOwlDot(index);
                      }}
                    >
                      <span></span>
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#0e0f10' }}>
        <div className={styled.baner_wrapper}>
          <div className={styled.title_baner}>
            <h3>Outplay the Competittion</h3>
            <span>
              Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7
              processor with the upmost computing power to bring you an unparalleled gaming experience.
            </span>
            <br />
            <br />
            <span>*Performance compared to i7-9700. Specs varies by model.</span>
          </div>
          <Image
            src="/assets/image/core.png"
            width={1000}
            height={700}
            alt="Picture of the author"
            key="index"
            className={styled.baner_img}
          ></Image>
          <div className={styled.owl__dots}>
            <button
              className={activeOwlDotBaner === 0 ? styled.activeOwlDot : ''}
              onClick={() => {
                addActiveOwlDotBaner(0);
              }}
            >
              <span></span>
            </button>
            <button
              className={activeOwlDotBaner === 1 ? styled.activeOwlDot : ''}
              onClick={() => {
                addActiveOwlDotBaner(1);
              }}
            >
              <span></span>
            </button>
            <button
              className={activeOwlDotBaner === 2 ? styled.activeOwlDot : ''}
              onClick={() => {
                addActiveOwlDotBaner(2);
              }}
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className={styled.baner_wrapper}>
          <div className={styled.input_items}>
            <div>
              <span>Product Support</span>
              <span>→</span>
            </div>
            <div>
              <span>FAQ</span>
              <span>→</span>
            </div>
            <div>
              <span>Our Buyer Guide</span>
              <span>→</span>
            </div>
          </div>
          <Image
            src="/assets/image/imgSuport.png"
            width={650}
            height={400}
            alt="Picture of the author"
            className={styled.baner_img}
          ></Image>
        </div>
      </section>
      <section style={{ background: '#0e0f10' }}>
        <div className={styled.baner_wrapper}>
          <div className={styled.featues}>
            <h3>Featues</h3>
            <span>
              The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB
              lighting control and synchronization.
            </span>
          </div>
          <ul className={styled.featues_items}>
            <li>
              <Image src="/assets/image/intel01.png" width={136} height={136} alt="Picture of the author"></Image>
              <span>
                <b>Intel® Core™ i7</b> processor with the upmost computing power to bring you an unparalleled gaming
                experience.
              </span>
            </li>
            <li>
              <Image src="/assets/image/rtx02.png" width={136} height={136} alt="Picture of the author"></Image>
              <span>
                The new <b>GeForce® RTX SUPER™</b> Series has more cores and higher clocks for superfast performance
                compared to previous-gen GPUs.
              </span>
            </li>
            <li>
              <Image src="/assets/image/ssd03.png" width={136} height={136} alt="Picture of the author"></Image>
              <span>
                Unleash the full potential with the latest <b>SSD technology</b>, the NVM Express. 6 times faster than
                traditional SATA SSD.
              </span>
            </li>
            <li>
              <Image src="/assets/image/ram04.png" width={136} height={136} alt="Picture of the author"></Image>
              <span>
                Featuring the latest <b> 10th Gen Intel® Core™ </b> processors, memory can support up to DDR4 2933MHz to
                delivers an unprecedented gaming experience.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
