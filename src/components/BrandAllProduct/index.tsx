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
      ... filters,
      _page : newPage,
    })
  };
  const ContainerProduct = classNames({
    [styled.sectionProduct]: true,
    [styled.listLayout]: !gridLayout,
  });
  const onChangeLayout = (signal: string) => {
    signal === 'grid' ? setGridLayout(true) : setGridLayout(!gridLayout);
  };
  const [activeColor, setActiveColor] = useState(0);
  const addActiveColor = (index: number) => {
    setActiveColor(index);
  };
  return (
    <div>
      <div className={styled.banner}>
        <img src="\assets\image\bannerAsus.jpg" alt="" />
      </div>
      <div className={styled.pape_breadcrumb}>
        <Link href="#">
          <b>Home</b>
        </Link>
        <span> &gt; </span>
        <Link href="#">
          <b>Laptops</b>
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
        <div className={styled.left__content}>
          <button>&lt; Back</button>
          <div>
            <h3>Filters</h3>
            <button>Clear Filters</button>
            <div>
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
            <div>
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
            <div>
              <ul className={styled.product_detai_color}>
                <li key={1} className={activeColor === 1 ? styled.activeColor : ''} onClick={() => addActiveColor?.(1)}>
                  <span style={{ background: 'black' }}></span>
                </li>
                <li key={2} className={activeColor === 2 ? styled.activeColor : ''} onClick={() => addActiveColor?.(2)}>
                  <span style={{ background: 'while' }}></span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span>Filter Name</span>
                  <img src="/assets/icon/down.svg" alt="DOWN ICON" />
                </li>
                <button>Apply Filters (2)</button>
              </ul>
            </div>
          </div>
          <div>
            <h3>Brands</h3>
            <button>All Brands</button>
            <div>
              <img src="\assets\image\image 33-1.jpg" alt="" />
              <img src="\assets\image\image 33-2.jpg" alt="" />
              <img src="\assets\image\image 33-3.jpg" alt="" />
              <img src="\assets\image\image 33-4.jpg" alt="" />
              <img src="\assets\image\image 33-5.jpg" alt="" />
              <img src="\assets\image\image 33.jpg" alt="" />
            </div>
            <div>
              <h3>Compare Products</h3>
              <span>You have no items to compare.</span>
            </div>
            <div>
              <h3>My Wish List</h3>
              <span>You have no items in your wish list.</span>
            </div>
            <img src="\assets\image\image 49.jpg" alt="" />
          </div>
        </div>
        <div className={styled.right__content}>
          <div>
            <input type="text" placeholder="Items 1-35 of 61" />
            <div>
              <span> Sort By: Position </span>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            <div>
              <span>Show: 35 per page </span>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            <div>
              <img src="/assets/icon/iconiconGirdLayout.svg" alt="" onClick={() => onChangeLayout('grid')} />
              <br />
              <img src="/assets/icon/iconColumnsLayout2.svg" alt="" onClick={() => onChangeLayout('column')} />
            </div>
          </div>
          <div>
            <div>
              <span>CUSTOM PCS (24)</span>
              <img src="/assets/icon/cancel.svg" alt="ICON CANCEL" />
            </div>
            <div>
              <span>HP/COMPAQ PCS (24)</span>
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
        </div>
      </section>
    </div>
  );
};
export default index;
