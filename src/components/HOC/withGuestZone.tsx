import { getUserInfo, isAuthenticated } from 'utils/cookie';
import { useIsLoggedIn } from 'hooks/use-is-logged-in';

export default () =>
  (WrappedComponent: FunctionComponent) =>
  (props: App.Any) => {
    const navigate = useNavigate();
    const isLoggedIn = useIsLoggedIn();

    useEffect(() => {
      if (isLoggedIn || isAuthenticated()) {
        navigate('/');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    if (!isLoggedIn || !isAuthenticated()) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
