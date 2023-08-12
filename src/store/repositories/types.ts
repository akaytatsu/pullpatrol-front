export interface IRepositories {
  data: IRepository[];
  getRepositories: () => void;
}

export interface IRepository {
  active: boolean;
  id: number;
  repository: string;
  label: string;
  user_id: number;
  driver: string;
  created_at: string;
  updated_at: string;
}
