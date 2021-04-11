import { FunctionComponent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import LeftArrow from '../../../assets/icons/left_arrow_carousel_icon.svg';
import RightArrow from '../../../assets/icons/right_arrow_carousel_icon.svg';

import './styles.scss';

type CarouselProps = {
  images: Array<string>;
};

const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
  const { t }: { t: any } = useTranslation();
  const slider = useRef<HTMLDivElement | null>(null);
  let counter = 0;

  const style = {
    translate: '-100%'
  };

  const handleLeftArrowClick = () => {
    if (slider) {
      if (counter > 0) {
        counter--;
        console.log('moving left ' + counter);
        slider.current!.style.transform = `translateX(-${100 * counter}%)`;
        console.log(`translateX  (${100 * counter}%)`);
      }
    }
  };
  const handleRightArrowClick = () => {
    if (slider) {
      if (counter < images.length - 1) {
        counter++;
        console.log('moving right ' + counter);
        slider.current!.style.transform = `translateX(-${100 * counter}%)`;
        console.log(`translateX(-${100 * counter}%)`);
      }
    }
  };

  return (
    <div className="CarouselContainer">
      <button
        onClick={handleLeftArrowClick}
        className="CarouselContainer-Button CarouselContainer-ButtonLeft"
      >
        <img src={LeftArrow} alt="left arrow" />
      </button>
      <div className="CarouselContainer-SliderContainer">
        <div ref={slider} className="CarouselContainer-SliderContainer-Slider">
          {images.map((image, index) => {
            return (
              <div
                className="CarouselContainer-SliderContainer-Slider-ImageContainer"
                key={image + index}
              >
                <img
                  className="CarouselContainer-SliderContainer-Slider-ImageContainer-Image"
                  src={image}
                />
                {/* <p className="CarouselContainer-Slider-ImageContainer-Caption">
                Legend 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p> */}
              </div>
            );
          })}
        </div>
      </div>

      <button
        className="CarouselContainer-Button CarouselContainer-ButtonRight"
        onClick={handleRightArrowClick}
      >
        <img src={RightArrow} alt="right arrow" />
      </button>

      <div className="CarouselContainer-Nav">
        {images.map((image, index) => {
          return (
            <div
              className="CarouselContainer-Nav-Indicator"
              key={image + index + 'nav'}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
