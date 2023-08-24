import api from "@/common/axios";
import { IRepository } from "./types";

export const getRepositories = async () => api.get("/api/repository");

export const getRepository = async (id: number) =>
  api.get(`/api/repository/${id}`);

export const addRepository = async (data: IRepository) =>
  api.post("/api/repository", data);

export const updateRepository = async (id: number, data: IRepository) =>
  api.put(`/api/repository/${id}`, data);
