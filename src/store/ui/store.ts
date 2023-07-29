import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUIStore {
  actualRoute: string;
  setActualRoute: (route: string) => void;
}

export const useUIStore = create<IUIStore>()(
  persist(
    (set, get) => ({
      actualRoute: "/",
      setActualRoute: (route: string) => set({ actualRoute: route }),
    }),
    {
      name: "ui-store",
    }
  )
);
