import DashboardContainer from 'containers/DashboardContainer';

const DashboardPage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('home')}</title>
          </Helmet>
        )}
      </Translation>
      <DashboardContainer />
    </>
  );
};

export default DashboardPage;
