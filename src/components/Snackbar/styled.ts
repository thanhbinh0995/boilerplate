import { MaterialDesignContent } from 'notistack';

export const NotificationStyled = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '&.notistack-MuiContent': {
      fontSize: 16,
      fontWeight: 700,
      maxWidth: 500,
      lineHeight: '28px',
      border: '1px solid',
      padding: '12px 16px',
      flexWrap: 'nowrap',
      boxShadow: `0px 1px 1px 0px ${theme.background.blackTransparent08}`,
      svg: { fontSize: 20 },
      '& > div': { gap: 12, padding: 0 },
    },
    '&.notistack-MuiContent-success': {
      backgroundColor: theme.background.orinoco,
      borderColor: theme.palette.vidaLoca,
      color: theme.palette.oracle,
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: theme.background.watusi,
      borderColor: theme.palette.alizarinCrimson,
      color: theme.palette.froly,
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: theme.palette.magnolia,
      borderColor: theme.palette.persianBlue,
      color: theme.palette.royalBlue,
    },
  }),
);
