import { persistLocalStorage } from "@/lib/storage";
import { useEffect } from "react";

export const useThemeListener = () => {
  const { isUserSelectedTheme, setTheme } = persistLocalStorage();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const mediaQueryListener = () => {
      if (!isUserSelectedTheme) {
        const isDarkMode = mediaQuery.matches;
        setTheme(isDarkMode ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", mediaQueryListener);

    mediaQueryListener();

    return () => mediaQuery.removeEventListener("change", mediaQueryListener);
  }, [isUserSelectedTheme, setTheme]);
};
