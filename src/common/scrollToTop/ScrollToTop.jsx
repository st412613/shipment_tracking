import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnPageChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top on page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTopOnPageChange;
