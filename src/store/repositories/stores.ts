"use client";

import { z } from "zod";
import { create } from "zustand";
import {
  addRepository,
  getRepositories,
  getRepository,
  updateRepository,
} from "./services";
import { IRepositories, IRepository, IRepositoryFormState } from "./types";

export const useRepositoriesStore = create<IRepositories>((set) => ({
  data: [],

  getRepositories: () => {
    getRepositories().then((response) => {
      set({ data: response.data });
    });
  },
}));

export const useRepositoryFormStore = create<IRepositoryFormState>(
  (set, get) => ({
    formData: {
      id: 0,
      repository: "",
      label: "",
      active: true,
      driver: "",
    } as IRepository,
    loading: false,
    error: false,
    response: {},
    formValidated: {},
    getActive: () => {
      return get().formData.active.toString();
    },
    fetchRepository: (id: number) => {
      set((state) => ({ loading: true }));
      getRepository(id)
        .then((res: any) => {
          set((state) => ({
            formData: res.data,
            isLoading: false,
          }));
        })
        .finally(() => {
          set((state) => ({ loading: false }));
        });
    },
    setActive: (value: boolean) => {
      set((state) => {
        return {
          formData: { ...state.formData, active: value },
        };
      });
    },
    setFormDataItem: (key: string, value: string) => {
      set((state) => {
        return {
          formData: { ...state.formData, [key]: value },
        };
      });
    },
    save: () => {
      const schema = z.object({
        repository: z.string().url(),
        label: z.string().min(4),
        driver: z.string().nonempty(),
        active: z.boolean(),
      });

      const result = schema.safeParse({
        repository: get().formData.repository,
        label: get().formData.label,
        driver: get().formData.driver,
        active: get().formData.active,
      });

      if (!result.success) {
        set((state) => ({
          formValidated: result.error.format(),
          error: true,
        }));
        return;
      }

      if (get().formData.id > 0) {
        updateRepository(get().formData.id, get().formData).then((res: any) => {
          if (res.status == "success") {
            window.location.href = "/settings/repositories";
          }
        });
      } else {
        addRepository(get().formData)
          .then((res: any) => {
            if (res.status == "success") {
              window.location.href = "/settings/repositories";
            } else {
              set((state) => ({
                response: res.data,
                isLoading: false,
              }));
            }
          })
          .finally(() => {
            set((state) => ({ loading: false }));
          });
      }
    },
    setIsLoading: (isLoading: boolean) =>
      set((state) => ({ loading: isLoading })),
  })
);
