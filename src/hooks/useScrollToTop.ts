import { useEffect } from "react";

/**
 * Custom hook to scroll to top when component mounts
 * Useful for ensuring users start at the top when navigating to new pages
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
};

/**
 * Custom hook to scroll to top with options
 * @param behavior - 'smooth' | 'instant' | 'auto'
 * @param delay - delay in milliseconds before scrolling
 */
export const useScrollToTopWithOptions = (
  behavior: ScrollBehavior = 'smooth',
  delay: number = 0
) => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [behavior, delay]);
};

export default useScrollToTop;
