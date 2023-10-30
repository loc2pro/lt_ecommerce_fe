import React, { useState } from 'react';
import styled from './style.module.scss';
import { ListProductMockup } from './data';
import ProductCard from '@/commons/ProductCard';
import classNames from 'classnames';

const index = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);

  const ContainerProduct = classNames({
    [styled.sectionProduct]: true,
    [styled.listLayout]: !gridLayout,
  });

  const onChangeLayout = () => {
    setGridLayout(!gridLayout);
  };
  return (
    <>
      <button onClick={onChangeLayout}>change layout</button>
      <div className={ContainerProduct}>
        {ListProductMockup.map((product) => {
          return <ProductCard product={product} gridLayout={gridLayout} />;
        })}
      </div>
    </>
  );
};

export default index;
