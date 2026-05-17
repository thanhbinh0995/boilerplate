/* eslint-disable react-hooks/rules-of-hooks */
import { signIn, logOut } from 'api/auth';
import {
  revokeUser,
  setAccessToken,
  setRefreshToken,
  setUserInfo,
  getAccessToken,
  getRefreshToken,
} from 'utils/cookie';
import type { SetState, Actions, State } from './types';

const createAction = (
  set: SetState<State>,
  get: () => State & Actions,
): Actions => ({
  signIn: async (credentials: Auth.UserCertificate) => {
    const response = await signIn(credentials);
    set(() => ({
      accessToken: response.token.accessToken,
      userInfo: response.user,
    }));
    setAccessToken(response.token.accessToken);
    setRefreshToken(response.token.refreshToken);
    const user = response.user as Auth.User;
    setUserInfo(user);
  },
  logOut: async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    await logOut({ accessToken, refreshToken });
    revokeUser();
    set(() => ({ accessToken: null, userInfo: null }));
  },
  setUserData: (data) => {
    set(() => ({
      accessToken: data.accessToken,
      userInfo: data.user,
    }));
  },
  updateUserInfo: (data) => {
    const userInfo = { ...get().userInfo, ...data };
    setUserInfo(userInfo);
    set(() => ({ userInfo }));
  },
});

export default createAction;
