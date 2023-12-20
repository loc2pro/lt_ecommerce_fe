import styled from './style.module.scss';
import { useState } from 'react';

interface ChildComponentProps  {
  description: string;
  colors: string[];
}
  const index: React.FunctionComponent<ChildComponentProps> = ({ colors, description }) => {
  const [activeColor, setActiveColor] = useState(0);
  const addActiveColor = (index: number) => {
    setActiveColor(index);
  };
  console.log(2)
  return (
    <div className={styled.product_detai_box}>
      <span className={styled.product_detai_description}>{description}</span>
      <ul className={styled.product_detai_color}>
        {Array.isArray(colors) && colors.length > 0
          ? colors.map((color, index) => (
              <li
                key={index}
                className={activeColor === index ? styled.activeColor : ''}
                onClick={() => addActiveColor?.(index)}
              >
                <span style={{ background: `${color}` }}></span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
export default index;