"use client";

import { useEffect } from "react";

export const HashScroller = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.slice(1);
        const element = document.getElementById(elementId);

        if (element) {
          setTimeout(() => {
            const elementTop = element.offsetTop - 100;
            window.scrollTo({
              top: elementTop,
              behavior: "smooth",
            });
          }, 300);
        }
      }
    };

    handleHashScroll();

    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
};
