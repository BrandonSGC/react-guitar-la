import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHome = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  return {
    isHome,
  };
};
