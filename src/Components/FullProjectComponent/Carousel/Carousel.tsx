import { NONAME } from 'node:dns';
import {
  createRef,
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';

import LeftArrow from '../../../assets/icons/left_arrow_carousel_icon.svg';
import RightArrow from '../../../assets/icons/right_arrow_carousel_icon.svg';
import useDetectSwipe from '../../../CustomHooks/useDetectSwipe';

import './styles.scss';

type CarouselProps = {
  images: Array<string>;
};

const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
  const { t }: { t: any } = useTranslation();
  const slider = useRef<HTMLDivElement | null>(null);
  const [leftArrowIsVisible, setLeftArrowIsVisible] = useState(false);
  const [rightArrowIsVisible, setRightArrowIsVisible] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  let counter = useRef(0);
  const swipableCover = useRef<HTMLImageElement | null>(null);

  const moveSlides = (newValue: number) => {
    counter.current = newValue;
    setActiveButtonIndex(counter.current);
    slider.current!.style.transform = `translateX(-${100 * counter.current}%)`;

    if (slider) {
      if (counter.current === images.length - 1) {
        setRightArrowIsVisible(false);
      } else {
        if (!rightArrowIsVisible) {
          setRightArrowIsVisible(true);
        }
      }
      if (counter.current <= 0) {
        setLeftArrowIsVisible(false);
      } else {
        if (!leftArrowIsVisible) {
          setLeftArrowIsVisible(true);
        }
      }
    }
  };

  useDetectSwipe(swipableCover, moveSlides, counter, images.length);

  const invisible = {
    opacity: '0.3'
  };
  const visible = {
    opacity: '1'
  };
  const activeBulletButton = {
    backgroundColor: '#a3d0cb'
  };
  const inActiveBulletButton = {
    backgroundColor: '#dedede'
  };

  useEffect(() => {
    if (images.length > 1) {
      setRightArrowIsVisible(true);
    }
  }, []);

  const handleLeftArrowClick = () => {
    const newValue = counter.current - 1;
    if (newValue >= 0) {
      moveSlides(newValue);
    }
  };

  const handleRightArrowClick = () => {
    const newValue = counter.current + 1;
    if (newValue < images.length) {
      moveSlides(newValue);
    }
  };

  const handleBulletButtonClick = (currentSlideIndex: number) => {
    moveSlides(currentSlideIndex);
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
        <div
          className="CarouselContainer-SliderContainer-SwipableCover"
          ref={swipableCover}
        ></div>
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
              style={
                activeButtonIndex === index
                  ? activeBulletButton
                  : inActiveBulletButton
              }
              key={image + index + 'nav'}
              onClick={() => {
                handleBulletButtonClick(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
