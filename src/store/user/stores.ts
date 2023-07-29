import { create } from "zustand";
import { IUserLogin } from "./types";
import { z } from "zod";
import { login as userLogin } from "./services";

export const useUserLogin = create<IUserLogin>()((set, get) => ({
  isLoading: false,
  email: "",
  password: "",
  response: {},
  formValidated: {},
  login: () => {
    set((state) => ({ isLoading: true }));

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(4),
    });

    const result = schema.safeParse({
      email: get().email,
      password: get().password,
    });

    if (!result.success) {
      set((state) => ({
        formValidated: result.error.format(),
        isLoading: false,
      }));
      return;
    }

    userLogin(get().email, get().password)
      .then((res: any) => {
        if (res.status == "success") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          window.location.href = "/";
        } else {
          set((state) => ({
            response: res.data,
            isLoading: false,
          }));
        }
      })
      .finally(() => {
        set((state) => ({ isLoading: false }));
      });
  },
  setMail: (email: string) => set((state) => ({ email: email })),
  setPassword: (password: string) => set((state) => ({ password: password })),
  setIsLoading: (isLoading: boolean) =>
    set((state) => ({ isLoading: isLoading })),
}));
