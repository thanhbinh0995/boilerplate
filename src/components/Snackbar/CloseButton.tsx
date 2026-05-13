import { useSnackbar } from 'notistack';
import { IconButton } from 'components/FormUI/Button';
import type { SnackbarKey } from 'notistack';

const CloseButton: FunctionComponent<{ snackbarKey: SnackbarKey }> = ({
  snackbarKey,
}) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)} icon={<XIcon />} />
  );
};

export default CloseButton;
