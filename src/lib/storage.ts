import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StorageType {
  theme: string;
  changeTheme: () => void;
}

const themeChecker = () => {
  const isBrowserDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const initTheme = isBrowserDarkMode ? "dark" : "light";

  return initTheme;
};

export const useLocalStorage = create<StorageType>()(
  persist(
    (set, get) => ({
      theme: themeChecker(),
      changeTheme: () =>
        set({ theme: get().theme === "light" ? "dark" : "light" }),
    }),
    {
      name: "theme", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
    }
  )
);
