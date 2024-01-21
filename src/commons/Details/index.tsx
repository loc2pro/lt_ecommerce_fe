import styled from './style.module.scss';
import { useState } from 'react';

interface ChildComponentProps {
  colors: string[];
  sku: string;
  storage: string;
  memory: string;
  display: string | string[] | undefined;
  graphicsCard: string | string[] | undefined;
  processorCompany: string;
  processorModel: string | string[] | undefined;

}
const index: React.FunctionComponent<ChildComponentProps> = ({
  colors,
  sku,
  storage,
  memory,
  display,
  graphicsCard,
  processorCompany,
  processorModel,
}) => {
  const [activeColor, setActiveColor] = useState(0);
  const addActiveColor = (index: number) => {
    setActiveColor(index);
  };
  console.log(2);
  return (
    <div className={styled.product_detai_box}>
      <ul>
        <li>{colors}</li>
        <li>{processorModel}</li>
        <li>{sku}</li>
        <li>{storage}</li>
        <li>{memory}</li>
        <li>{graphicsCard}</li>
        <li>{display}</li>
        <li>{processorCompany}</li>
      </ul>
    </div>
  );
};
export default index;
