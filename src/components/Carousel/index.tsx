import React, { useEffect, useState } from 'react';
import styled from './style.module.scss';
import { DataCarousel } from './data';

interface ICarousel {
  id?: number;
  image: string;
}
const index: React.FunctionComponent<{ dataCarousel?: ICarousel[] }> = ({ dataCarousel }) => {
  const [people, setPeople] = useState(dataCarousel || DataCarousel);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className={styled.carousel}>
      {people.map((person, personIndex) => {
        const { id, image } = person;
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return (
          <article key={id} className={position}>
            <img src={image} className={styled.imageSlider} />
          </article>
        );
      })}
      <button className={styled.prev} onClick={() => setIndex(index - 1)}>
        <img src="/assets/icon/arrow.svg" alt="Icon Prev" />
      </button>
      <button className={styled.next} onClick={() => setIndex(index + 1)}>
        <img src="/assets/icon/arrow.svg" alt="Icon Next" />
      </button>
    </div>
  );
};

export default index;
