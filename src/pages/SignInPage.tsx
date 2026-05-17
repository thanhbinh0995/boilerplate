import { withGuestZone } from 'components/HOC';
import SignInContainer from 'containers/SignInContainer';

const SignInPage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('login')}</title>
          </Helmet>
        )}
      </Translation>
      <SignInContainer />
    </>
  );
};

export default withGuestZone()(SignInPage);
