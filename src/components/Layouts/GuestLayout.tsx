import { appName } from 'config/constants';
import * as Styled from './styled';

const GuestLayout: FunctionComponent<App.LayoutComponent<ReactNode>> = ({
  children,
}) => {
  const { t } = useTranslation();

  return (
    <MasterLayout>
      <Styled.GuestLayout>
        <Styled.GuestIntro>
          <Styled.GuestIntroTitle>{appName}</Styled.GuestIntroTitle>
          <Styled.GuestIntroText>{t('app_tagline')}</Styled.GuestIntroText>
          <Styled.GuestFeatureList>
            <li>
              <CheckCircleIcon size={18} weight="fill" />
              {t('feature_routing')}
            </li>
            <li>
              <CheckCircleIcon size={18} weight="fill" />
              {t('feature_state')}
            </li>
            <li>
              <CheckCircleIcon size={18} weight="fill" />
              {t('feature_api')}
            </li>
          </Styled.GuestFeatureList>
        </Styled.GuestIntro>
        <Styled.GuestContent>{children}</Styled.GuestContent>
      </Styled.GuestLayout>
    </MasterLayout>
  );
};

export default GuestLayout;
