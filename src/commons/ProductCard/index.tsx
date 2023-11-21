import React, { FunctionComponent, useContext , useEffect} from 'react';
import classNames from 'classnames';
import styled from './style.module.scss';
import Image from 'next/image';
import IconStar from 'public/assets/icon/IconStart';
import { addProduct, deleteProduct } from '../../productStore/actions';
import { store, dispatchIns } from '../../productStore/index';
interface IProductCard {
  id: number;
  image: string;
  title: string;
  price: number;
  priceDiscount: number;
  inStock: number;
  reviews: number;
}
const index: FunctionComponent<{ product: IProductCard; gridLayout?: boolean }> = ({ product, gridLayout }) => {
  const { id, image, title, price, priceDiscount, inStock, reviews } = product;
  const { state } = useContext(store);
  
  useEffect(() => {
    // console.log(state);
  }, [state]);

  const wrapProductCard = classNames({
    [styled.productCard]: true,
    [styled.listLayout]: !gridLayout,
  });
  const handleAddToCart = (product: IProductCard) => {
    dispatchIns(addProduct(product));
  };
  const onClickProduct = (id: number) => {
    window.location.href = `/productdetai/${id}`;
  };
  const ReviewSection = () => {
    let listStar = new Array(5).fill('').map((_, i) => i + 1);
    return (
      <div>
        {listStar.length &&
          listStar.map((index) => {
            return <IconStar check={reviews >= index} />;
          })}
      </div>
    );
  };

  return (
    <div className={wrapProductCard} onClick={() => handleAddToCart(product)}>
      <div className={styled.pseudo}>
        <div className={styled.btnAction}>
          <button className={styled.btnBuy}>Mua</button>
          <button className={styled.btnAddCart}>Giỏ Hàng</button>
        </div>
      </div>
      <div className={styled.inStock}>
        <img src="/assets/icon/check.svg" alt="Icon Check" width={12} height={12} />
        in stock
      </div>
      <div className={styled.thumbnail}>
        <Image src={image} alt={title} width={160} height={160} />
      </div>
      <div className={styled.reviews}>
        <ReviewSection />
        <p> reviews ({reviews})</p>
      </div>
      <h3 className={styled.title}>{title}</h3>
      <div className={styled.priceSection}>
        <span className={styled.priceDiscount}>
          {priceDiscount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
        </span>
        <span className={styled.price}>{price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
      </div>
    </div>
  );
};

export default index;
