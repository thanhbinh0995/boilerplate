import { useToast } from 'hooks/use-toast';
import GuestLayout from 'components/Layouts/GuestLayout';
import Input from 'components/FormUI/Input';
import Button from 'components/FormUI/Button';
import { MOCK_CREDENTIALS } from 'mocks/mock-user';
import { getErrorMessage } from 'utils/helpers';
import useAuthStore from 'stores/auth';
import * as Styled from './styled';

const SignInContainer: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const signIn = useAuthStore.use.signIn();
  const { control, handleSubmit } = useForm<App.Any>({
    defaultValues: {
      email: MOCK_CREDENTIALS.email,
      password: MOCK_CREDENTIALS.password,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: Auth.UserCertificate): Promise<void> => {
    setIsSubmitting(true);
    try {
      await signIn(values);
      showSuccess(t('sign_in_success'));
      navigate('/');
    } catch (error) {
      showError(getErrorMessage(error as App.ResponseError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GuestLayout>
      <Styled.FormCard>
        <Styled.FormHeader>
          <Styled.FormTitle>{t('sign_in')}</Styled.FormTitle>
          <Styled.FormSubtitle>{t('sign_in_subtitle')}</Styled.FormSubtitle>
        </Styled.FormHeader>
        <Styled.DemoHint>
          <strong>{t('demo_account')}:</strong> {MOCK_CREDENTIALS.email} /{' '}
          {MOCK_CREDENTIALS.password}
        </Styled.DemoHint>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Styled.FormFields>
            <Input
              control={control}
              name="email"
              type="email"
              label={t('email')}
              placeholder={t('email_placeholder')}
              hideClear
              rules={{
                required: t('email_required'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('email_invalid'),
                },
              }}
            />
            <Input
              control={control}
              name="password"
              type="password"
              label={t('password')}
              placeholder={t('password_placeholder')}
              hideClear
              rules={{
                required: t('password_required'),
                minLength: {
                  value: 6,
                  message: t('password_min_length'),
                },
              }}
            />
            <Button
              type="submit"
              label={t('sign_in')}
              color="primary"
              fullWidth
              loading={isSubmitting}
            />
          </Styled.FormFields>
        </form>
      </Styled.FormCard>
    </GuestLayout>
  );
};

export default SignInContainer;
