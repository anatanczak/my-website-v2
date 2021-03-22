import { useState, useEffect } from 'react';

function useDetectClick(clickHandler: (ev: Event) => void) {
  const [clickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    const handleClick = (event: Event) => {
      clickHandler(event);
    };
    window.addEventListener('click', handleClick, false);
    return () => window.removeEventListener('click', handleClick, false);
  }, []);
}

export default useDetectClick;
