import { useToast } from 'hooks/use-toast';
import { appName } from 'config/constants';
import useAuthStore from 'stores/auth';
import * as Styled from './styled';

const DashboardLayout: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showSuccess } = useToast();
  const userInfo = useAuthStore.use.userInfo();
  const logOut = useAuthStore.use.logOut();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async (): Promise<void> => {
    setIsSigningOut(true);
    try {
      await logOut();
      showSuccess(t('sign_out_success'));
      navigate('/sign-in');
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <MasterLayout>
      <Styled.DashboardLayout>
        <Styled.DashboardSidebar>
          <Styled.SidebarBrand>
            <h3>{appName}</h3>
            <span>{t('home')}</span>
          </Styled.SidebarBrand>
          <Styled.SidebarNav>
            <Styled.SidebarLink to="/" end>
              <HouseIcon size={18} />
              {t('home')}
            </Styled.SidebarLink>
          </Styled.SidebarNav>
          <Styled.SidebarFooter>
            <Styled.UserBadge>
              <UserCircleIcon size={32} />
              <div>
                <strong>{userInfo?.fullName}</strong>
                <span>{userInfo?.email}</span>
              </div>
            </Styled.UserBadge>
            <Styled.SignOutButton
              type="button"
              disabled={isSigningOut}
              onClick={handleSignOut}
            >
              <SignOutIcon size={18} />
              {t('sign_out')}
            </Styled.SignOutButton>
          </Styled.SidebarFooter>
        </Styled.DashboardSidebar>

        <Styled.DashboardMain>{children}</Styled.DashboardMain>
      </Styled.DashboardLayout>
    </MasterLayout>
  );
};

export default DashboardLayout;
