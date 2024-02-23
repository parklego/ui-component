import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StorageType {
  theme: string;
  isUserSelectedTheme: boolean;
  setTheme: (mode: string) => void;
  setIsUserSelectedTheme: () => void;
}

export const persistLocalStorage = create<StorageType>()(
  persist(
    (set) => ({
      theme: "light",
      isUserSelectedTheme: false,
      setTheme: (mode) => set({ theme: mode }),
      setIsUserSelectedTheme: () => set({ isUserSelectedTheme: true }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
