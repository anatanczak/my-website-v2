import { useState, useEffect } from 'react';

function useOnScroll() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleOnScroll = (event: Event) => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleOnScroll, false);
    return () => window.removeEventListener('scroll', handleOnScroll, false);
  }, []);
  return [position];
}

export default useOnScroll;
