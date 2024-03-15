import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import styled from './style.module.scss';
import { mockupData } from './data';
import ProductCard from '@/commons/ProductCard';
import Pagination from '@/commons/Pagination';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { wrap } from 'module';

interface Pagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}
const index = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  const [postList, setPostList] = useState([]);
  // mẪU pagination
  const [pagination, setPagination] = useState<Pagination>({
    _page: 1,
    _limit: 25,
    _totalRows: 30,
  });
  const [filters, setFilters] = useState({
    _limit: 25,
    _page: 1,
  });
  // call API
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        // limit=25&_page=1
        const requestUrl = '';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.massage);
      }
    }
    fetchPostList();
  }, [filters]);
  const handlePageChange = (newPage: number) => {
    console.log('New page', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };
  const ContainerProduct = classNames({
    [styled.sectionProduct]: true,
    [styled.listLayout]: !gridLayout,
  });
  const onChangeLayout = (signal: string) => {
    signal === 'grid' ? setGridLayout(true) : setGridLayout(!gridLayout);
  };
  const [activeColor, setActiveColor] = useState(1);
  const addActiveColor = (index: number) => {
    setActiveColor(index);
  };
  return (
    <div className={styled.main}>
      <div className={styled.banner}>
        <img src="\assets\image\bannerAsus.jpg" alt="" />
      </div>
      <div className={styled.pape_breadcrumb}>
        <Link href="#">
          <span>Home</span>
        </Link>
        <span> &gt; </span>
        <Link href="#">
          <span>Laptops</span>
        </Link>
        <span> &gt; </span>
        <Link href="#">Everyday Use Notebooks </Link>
        <span> &gt; </span>
        <Link href="#">MSI Prestige Series</Link>
        <span> &gt; </span>
        <Link href="#">MSI WS Series</Link>
      </div>
      <section className={styled.wrapper}>
        <h2>MSI PS Series (20)</h2>
        <div className={styled.content}>
          <div className={styled.left__content}>
            <button className={styled.left__content_backIcon}>&lt; Back</button>
            <div className={styled.left__content_filters}>
              <h3>Filters</h3>
              <button>Clear Filters</button>
              <div className={styled.left__content_filters_category}>
                <ul>
                  <li>
                    <span>Category</span>
                    <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                  </li>
                  <li>
                    <span>CUSTOM PCS </span>
                    <span>15</span>
                  </li>
                  <li>
                    <span>MSI ALL-IN-ONE</span>
                    <span>45</span>
                  </li>
                  <li>
                    <span>HP/COMPAQ PCS</span>
                    <span>1</span>
                  </li>
                </ul>
              </div>
              <div className={styled.left__content_filters_price}>
                <ul>
                  <li>
                    <span>Price</span>
                    <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                  </li>
                  <li>
                    <span>$0.00 - $1,000.00</span>
                    <span>15</span>
                  </li>
                  <li>
                    <span>$1,000.00 - $2,000.00</span>
                    <span>45</span>
                  </li>
                  <li>
                    <span>$2,000.00 - $3,000.00</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>$3,000.00 - $4,000.00</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span> $4,000.00 - $5,000.00</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>$5,000.00 - $6,000.00</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>$6,000.00 - $7,000.00 </span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>$7,000.00 And Above</span>
                    <span>1</span>
                  </li>
                </ul>
              </div>
              <div className={styled.left__content_filters_color}>
                <ul>
                  <li>
                    <span>Color</span>
                    <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                  </li>
                  <div>
                    <li>
                      <span style={{ background: `black` }}></span>
                    </li>
                    <li>
                      <span style={{ background: `blue` }}></span>
                    </li>
                  </div>
                </ul>
              </div>
              <div className={styled.left__content_filters_name}>
                <ul>
                  <li>
                    <span>Filter Name</span>
                    <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                  </li>
                  <button>Apply Filters (2)</button>
                </ul>
              </div>
            </div>
            <div className={styled.left__content_brands}>
              <h3>Brands</h3>
              <button>All Brands</button>
              <div className={styled.left__content_brands_imgs}>
                <img src="\assets\image\image 33-1.jpg" alt="" />
                <img src="\assets\image\image 33-2.jpg" alt="" />
                <img src="\assets\image\image 33-3.jpg" alt="" />
                <img src="\assets\image\image 33-4.jpg" alt="" />
                <img src="\assets\image\image 33-5.jpg" alt="" />
                <img src="\assets\image\image 33.jpg" alt="" />
              </div>
              <div className={styled.left__content_brands_compare_products}>
                <h3>Compare Products</h3>
                <span>You have no items to compare.</span>
              </div>
              <div className={styled.left__content_brands_my_list}>
                <h3>My Wish List</h3>
                <span>You have no items in your wish list.</span>
              </div>
              <img src="\assets\image\image 49.jpg" alt="" />
            </div>
          </div>
          <div className={styled.right__content}>
            <div className={styled.sort_bar}>
              <span>Items 1-35 of 61</span>
              <div className={styled.right_sort_bar}>
                <div>
                  <span>
                    Sort By: <b>Position</b>
                  </span>
                  <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                </div>
                <div>
                  <span>
                    Show: <b> 35 per page</b>
                  </span>
                  <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                </div>
                <div className={styled.icon_change_layout}>
                  <img src="/assets/icon/iconGirdLayout.svg" alt="" onClick={() => onChangeLayout('grid')} />
                  <br />
                  <img src="/assets/icon/iconColumnsLayout2.svg" alt="" onClick={() => onChangeLayout('column')} />
                </div>
              </div>
            </div>
            <div className={styled.total_product}>
              <div>
                <b>
                  CUSTOM PCS <span>(24)</span>
                </b>
                <img src="/assets/icon/cancel.svg" alt="ICON CANCEL" />
              </div>
              <div>
                <b>
                  HP/COMPAQ PCS <span>(24)</span>
                </b>
                <img src="/assets/icon/cancel.svg" alt="ICON CANCEL" />
              </div>
              <button>Clear All</button>
            </div>
            <div className={ContainerProduct}>
              {mockupData.map((product) => {
                return <ProductCard product={product} gridLayout={gridLayout} />;
              })}
            </div>
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
            <div className={styled.description}>
              <span>
                MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color
                accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the
                display profile to best fit their computing needs. There are six different screen profiles, which are
                tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines,
                reducing harmful blue light, and optimizing contrast for watching movies. Given the various display
                profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work
                as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or
                for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for
                which contrast is increased. Home users or students can benefit from the "anti-blue" and the "office
                mode" options, both of which are designed to reduce eye strain. This is helpful when working on the
                computer for extended periods of time. Additionally, in their down time, students can also use the
                "gamer mode" to increase the screen brightness.
              </span>
              <div className={styled.blur_text}></div>
              <button>More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default index;
