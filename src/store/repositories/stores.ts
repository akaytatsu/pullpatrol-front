import { create } from "zustand";
import { getRepositories } from "./services";
import { IRepositories } from "./types";

export const useRepositoriesStore = create<IRepositories>((set) => ({
  data: [],
  getRepositories: () => {
    getRepositories().then((response) => {
      set({ data: response.data });
    });
  },
}));
