import { NONAME } from 'node:dns';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
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
  const [leftArrowIsVisible, setLeftArrowIsVisible] = useState(false);
  const [rightArrowIsVisible, setRightArrowIsVisible] = useState(false);
  //const [stateCounter, setStateCounter] = useState(0);
  let counter = useRef(0);

  const invisible = {
    opacity: '0.3'
  };
  const visible = {
    opacity: '1'
  };

  useEffect(() => {
    if (images.length > 1) {
      setRightArrowIsVisible(true);
    }
  }, []);

  const handleLeftArrowClick = () => {
    if (slider) {
      if (counter.current > 0) {
        if (!rightArrowIsVisible) {
          setRightArrowIsVisible(true);
        }
        counter.current--;
        slider.current!.style.transform = `translateX(-${
          100 * counter.current
        }%)`;
      }
      if (counter.current <= 0) {
        setLeftArrowIsVisible(false);
      }
    }
  };

  const handleRightArrowClick = () => {
    if (slider) {
      if (counter.current < images.length - 1) {
        if (!leftArrowIsVisible) {
          setLeftArrowIsVisible(true);
        }
        counter.current++;
        slider.current!.style.transform = `translateX(-${
          100 * counter.current
        }%)`;
      }
    }
    if (counter.current === images.length - 1) {
      setRightArrowIsVisible(false);
    }
  };

  return (
    <div className="CarouselContainer">
      <button
        onClick={handleLeftArrowClick}
        className="CarouselContainer-Button CarouselContainer-ButtonLeft"
        style={leftArrowIsVisible ? visible : invisible}
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
        style={rightArrowIsVisible ? visible : invisible}
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
