import httpRequest from './http-request';

export const signIn = async (
  data: Auth.UserCertificate,
): Promise<Auth.UserAuthentication> =>
  httpRequest.post<Auth.UserCertificate, Auth.UserAuthentication>(
    '/authentications/login',
    data,
  );

export const logOut = (data: Auth.LogoutParams): Promise<void> =>
  httpRequest.post('/authentications/logout', data);
