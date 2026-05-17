import GlobalStyles from '@mui/material/GlobalStyles';
import appStyle from 'styles/global';
// import fontIconStyle from 'styles/font-icon';
import * as Styled from './styled';

const MasterLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Styled.MasterLayout>
      {/* <Favicon /> */}
      {children}
      <GlobalStyles styles={appStyle} />
      {/* <GlobalStyles styles={fontIconStyle} /> */}
    </Styled.MasterLayout>
  );
};

export default MasterLayout;
