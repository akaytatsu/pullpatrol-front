import { action, makeAutoObservable } from "mobx";
import { IRootStore } from "..";
import * as services from "./services";
import { IUserInfo } from "./types";

export default class UserStore {
  rootStore: IRootStore;

  isLogged: boolean = false;
  isLoading: boolean = false;
  token: string | null = null;
  refreshToken: string | null = null;
  info: IUserInfo = {} as IUserInfo;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  isAuthenticared = () => localStorage.getItem("isLogged") === "logado";

  setToken = (token: string | null, refreshToken: string | null) => {
    this.token = token;
    this.refreshToken = refreshToken;

    localStorage.setItem("token", token || "");
    localStorage.setItem("refreshToken", refreshToken || "");
  };

  fetchUserInfo = () => {
    this.isLoading = true;
    services.getUserInfo().then(
      action((response) => {
        this.info = response.data;
      })
    );
  };

  login = (mail: string, password: string) => {
    services.login(mail, password).then(
      action((response: any) => {
        console.log(response);
      })
    );
  };

  hydrate(data: any) {
    if (!data) return;
  }
}
