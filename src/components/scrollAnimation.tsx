// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollAnimation: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to top
      });
  }, [pathname]);

  return null;
};

export default scrollAnimation;
