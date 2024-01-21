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
  console.log(3)

  return (
    <div className={styled.product_detai_box}>
      <table>
          <tr>
            <td>CPU</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>Featured</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>I/O Ports</td>
            <td>NaN</td>
          </tr>
      </table>
    </div>
  );
};
export default index;