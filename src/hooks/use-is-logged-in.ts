import useAuthStore from 'stores/auth';

export const useIsLoggedIn = () => {
  const accessToken = useAuthStore.use.accessToken();
  const userInfo = useAuthStore.use.userInfo();

  const isLoggedIn = useMemo(
    () => Boolean(userInfo && accessToken),
    [accessToken, userInfo],
  );

  return isLoggedIn;
};
