import api from "@/common/axios";

export const getRepositories = async () => api.get("/api/repository ");
