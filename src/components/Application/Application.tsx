import { StrictMode } from 'react';
import 'config/i18n';
import theme from 'styles/theme';
import Snackbar from 'components/Snackbar';
import router from './AppRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
});

const Application: FunctionComponent = () => (
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Snackbar>
            <RouterProvider router={createBrowserRouter(router)} />
          </Snackbar>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);

export default Application;
