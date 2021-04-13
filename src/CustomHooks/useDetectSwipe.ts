import { useState, useEffect, MutableRefObject, RefObject } from 'react';

function useDetectSwipe(
  swipedElement: RefObject<HTMLImageElement | null>,
  moveSlides: (newValue: number) => void,
  oldValue: RefObject<number>,
  maxAllowedValue: number
) {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;

  useEffect(() => {
    const handleGesture = () => {
      if (touchendX <= touchstartX) {
        //console.log('Swiped left');
        if (oldValue) {
          const newValue = oldValue.current! + 1;
          if (newValue < maxAllowedValue) {
            moveSlides(newValue);
          }
        }
      }

      if (touchendX >= touchstartX) {
        // console.log('Swiped right');
        if (oldValue) {
          const newValue = oldValue.current! - 1;

          if (newValue >= 0) {
            moveSlides(newValue);
          }
        }
      }
      if (touchendY <= touchstartY) {
        // console.log('Swiped up');
      }

      if (touchendY >= touchstartY) {
        // console.log('Swiped down');
      }

      if (touchendY === touchstartY) {
        // console.log('Tap');
      }
    };
    if (swipedElement.current) {
      swipedElement.current.addEventListener(
        'touchstart',
        function (event) {
          touchstartX = event.changedTouches[0].screenX;
          touchstartY = event.changedTouches[0].screenY;
        },
        false
      );

      swipedElement.current.addEventListener(
        'touchend',
        function (event) {
          touchendX = event.changedTouches[0].screenX;
          touchendY = event.changedTouches[0].screenY;
          handleGesture();
        },
        false
      );

      return () => {
        if (swipedElement.current) {
          swipedElement.current.removeEventListener(
            'touchstart',
            function (event) {
              touchstartX = event.changedTouches[0].screenX;
              touchstartY = event.changedTouches[0].screenY;
            },
            false
          );
          swipedElement.current.removeEventListener(
            'touchend',
            function (event) {
              touchendX = event.changedTouches[0].screenX;
              touchendY = event.changedTouches[0].screenY;
              handleGesture();
            },
            false
          );
        }
      };
    }
  }, []);
}

export default useDetectSwipe;
