export interface IUserLogin {
  isLoading: boolean;
  email: string;
  password: string;
  response: any;
  formValidated: any;
  setMail(email: string): void;
  setPassword(password: string): void;
  setIsLoading(isLoading: boolean): void;
  login(): void;
}

export interface IUserInfo {
  email: string;
  name: string;
  profile_image: null;
  groups: string[];
  is_superuser: boolean;
}
