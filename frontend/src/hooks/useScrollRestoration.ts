// hooks/useScrollRestoration.ts
import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const key = location.key || location.pathname;

    // Restore previous scroll position if available
    const savedScroll = sessionStorage.getItem(`scroll-${key}`);
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    // Save scroll position on route change (cleanup)
    return () => {
      sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
    };
  }, [location]);
};
