import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StorageType {
  theme: string;
  setTheme: (mode: string) => void;
}

export const persistLocalStorage = create<StorageType>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (mode) => set({ theme: mode }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
