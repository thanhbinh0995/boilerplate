import { useSnackbar } from 'notistack';
import type { OptionsObject } from 'notistack';

export const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = (msg: string, options?: OptionsObject) => {
    enqueueSnackbar(msg, options);
  };

  const showSuccess = (msg: string, options?: OptionsObject) => {
    showToast(msg, { ...options, variant: 'success' });
  };

  const showWarning = (msg: string, options?: OptionsObject) => {
    showToast(msg, { ...options, variant: 'warning' });
  };

  const showInfo = (msg: string, options?: OptionsObject) => {
    showToast(msg, { ...options, variant: 'info' });
  };

  const showError = (msg: string, options?: OptionsObject) => {
    showToast(msg, { ...options, variant: 'error' });
  };

  return {
    showInfo,
    showError,
    showWarning,
    showSuccess,
    closeSnackbar,
  };
};
