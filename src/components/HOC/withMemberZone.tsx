import { getUserInfo, getAccessToken, isAuthenticated } from 'utils/cookie';
import { useIsLoggedIn } from 'hooks/use-is-logged-in';
import useAuthStore from 'stores/auth';

export default () =>
  (WrappedComponent: ComponentType<App.LayoutComponent<ReactNode>>) =>
  (props: App.LayoutComponent<ReactNode>) => {
    const navigate = useNavigate();
    const isLoggedIn = useIsLoggedIn();
    const setUserData = useAuthStore.use.setUserData();

    useEffect(() => {
      const userInfo = getUserInfo();
      const accessToken = getAccessToken();
      if (userInfo) {
        setUserData({ user: userInfo, accessToken });
        navigate('/');
      }
      if (!isAuthenticated() && !isLoggedIn) {
        navigate('/sign-in');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    if (isLoggedIn || isAuthenticated()) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
