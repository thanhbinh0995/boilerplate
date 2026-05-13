import { SnackbarProvider } from 'notistack';
import { NotificationStyled } from './styled';
import CloseButton from './CloseButton';

const Snackbar: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <SnackbarProvider
    autoHideDuration={3000}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    Components={{
      success: NotificationStyled,
      error: NotificationStyled,
      info: NotificationStyled,
    }}
    iconVariant={{
      info: false,
      success: false,
      error: false,
      warning: false,
    }}
    action={(key) => <CloseButton snackbarKey={key} />}
  >
    {children}
  </SnackbarProvider>
);

export default Snackbar;
