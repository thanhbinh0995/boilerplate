import useAuthStore from 'stores/auth';
import { appName } from 'config/constants';
import * as Styled from './styled';

const DashboardContainer: FunctionComponent = () => {
  const { t } = useTranslation();
  const userInfo = useAuthStore.use.userInfo();

  return (
    <Styled.Page>
      <Styled.WelcomeCard>
        <Styled.WelcomeTitle>
          {t('welcome_back', { name: userInfo?.fullName || t('guest') })}
        </Styled.WelcomeTitle>
        <Styled.WelcomeText>
          {t('home_description', { appName })}
        </Styled.WelcomeText>
        <Styled.UserMeta>
          <Styled.MetaRow>
            <span>{t('full_name')}</span>
            <strong>{userInfo?.fullName || '—'}</strong>
          </Styled.MetaRow>
          <Styled.MetaRow>
            <span>{t('email')}</span>
            <strong>{userInfo?.email || '—'}</strong>
          </Styled.MetaRow>
          <Styled.MetaRow>
            <span>{t('username')}</span>
            <strong>{userInfo?.username || '—'}</strong>
          </Styled.MetaRow>
        </Styled.UserMeta>
      </Styled.WelcomeCard>
      <Styled.StatsGrid>
        <Styled.StatCard>
          <h4>{t('stat_projects')}</h4>
          <p>12</p>
        </Styled.StatCard>
        <Styled.StatCard>
          <h4>{t('stat_tasks')}</h4>
          <p>48</p>
        </Styled.StatCard>
        <Styled.StatCard>
          <h4>{t('stat_team')}</h4>
          <p>6</p>
        </Styled.StatCard>
      </Styled.StatsGrid>
    </Styled.Page>
  );
};

export default DashboardContainer;
