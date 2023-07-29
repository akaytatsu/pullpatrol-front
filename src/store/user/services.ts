import api from "@/common/axios";

export const getUserInfo = async () => api.get("/api/user ");

export const login = (mail: string, password: string) =>
  api.post("auth/user/login", { email: mail, password: password });
