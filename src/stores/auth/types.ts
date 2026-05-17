export type State = {
  userInfo: Auth.User;
  accessToken: string;
};

export type Actions = {
  signIn: (credentials: Auth.UserCertificate) => Promise<void>;
  logOut: () => Promise<void>;
  setUserData: (data: Auth.UserData) => void;
  updateUserInfo: (data: Partial<Auth.User>) => void;
};

export type SetState<T extends State> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
    actionName?: string,
  ): void;
}['_'];
