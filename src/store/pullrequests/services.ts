import api from "@/common/axios";

export const getUserInfo = async () => api.get("/api/user ");
