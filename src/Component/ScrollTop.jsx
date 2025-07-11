import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // It doesn't render anything
};

export default ScrollToTop;
