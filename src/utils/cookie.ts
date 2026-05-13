import UniversalCookie from 'universal-cookie';
import { convertTimestampToDate } from 'utils/date';

const cookie = new UniversalCookie();

export function setUserInfo(data: Auth.User): void {
  const user = {
    ...pick(data, [
      'id',
      'username',
      'phoneCode',
      'phoneNumber',
      'email',
      'fullName',
      'gender',
      'role',
    ]),
    avatar: pick(data.avatar, ['url']),
  };
  cookie.set('userInfo', user, {
    path: '/',
  });
}

export function getUserInfo(): Auth.User {
  return cookie.get('userInfo');
}

export function setAccessToken(token: string): void {
  cookie.set('token', token, {
    path: '/',
  });
}

export function setRefreshToken(token: string): void {
  cookie.set('refreshToken', token, {
    path: '/',
  });
}

export function getAccessToken(): string {
  return cookie.get('token');
}

export function getRefreshToken(): string {
  return cookie.get('refreshToken');
}

export function setExpireTime(expireAt: number): void {
  cookie.set('expireAt', expireAt, {
    path: '/',
    expires: convertTimestampToDate(expireAt),
  });
}

export function isAuthenticated(): boolean {
  const userInfo = getUserInfo();
  const token = getAccessToken();
  return !!userInfo && !!token;
}

export function revokeUser(): void {
  const options = {
    path: '/',
  };
  cookie.remove('userInfo', options);
  cookie.remove('token', options);
  cookie.remove('refreshToken', options);
  cookie.remove('expireAt', options);
}
