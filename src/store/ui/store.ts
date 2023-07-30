import { create } from "zustand";

interface IUIStore {
  actualRoute: string;
  setActualRoute: (route: string) => void;
}

export const useUIStore = create<IUIStore>()((set, get) => ({
  actualRoute: "/",
  setActualRoute: (route: string) => set({ actualRoute: route }),
}));
