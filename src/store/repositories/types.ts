export interface IRepositories {
  data: IRepository[];
  getRepositories: () => void;
}

export interface IRepositoryFormState {
  formData: IRepository;
  loading: boolean;
  error: boolean;
  response: any;
  formValidated: any;
  setFormDataItem: (key: string, value: string) => void;
  getActive: () => string;
  setActive: (value: boolean) => void;
  save(): void;
  setIsLoading(isLoading: boolean): void;
  fetchRepository(id: number): void;
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
