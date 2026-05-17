import PageNotFoundContainer from 'containers/PageNotFoundContainer';

const PageNotFound: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('page_not_found')}</title>
          </Helmet>
        )}
      </Translation>
      <PageNotFoundContainer />
    </>
  );
};

export default PageNotFound;
