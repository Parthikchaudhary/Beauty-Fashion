import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Scrool = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jab bhi route change hoga, scroll top ho jaayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

