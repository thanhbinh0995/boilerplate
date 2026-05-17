export const Page = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  height: '100%',
  overflow: 'auto',
}));

export const WelcomeCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  borderRadius: 12,
  backgroundColor: theme.palette.white,
  border: `1px solid ${theme.palette.mystic}`,
  boxShadow: '0 8px 24px rgba(1, 18, 34, 0.06)',
}));

export const WelcomeTitle = styled('h2')(({ theme }) => ({
  color: theme.palette.blueCharcoal,
  fontWeight: 600,
}));

export const WelcomeText = styled('p')(({ theme }) => ({
  color: theme.palette.lynch,
  fontSize: 15,
  lineHeight: '24px',
}));

export const UserMeta = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5),
  borderRadius: 8,
  backgroundColor: theme.palette.whisper,
}));

export const MetaRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  fontSize: 14,
  lineHeight: '22px',

  span: {
    color: theme.palette.lynch,
  },

  strong: {
    color: theme.palette.blueCharcoal,
    fontWeight: 600,
    textAlign: 'right',
  },
}));

export const StatsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: theme.spacing(2),
}));

export const StatCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: 10,
  backgroundColor: theme.palette.zumthor,
  border: `1px solid ${theme.palette.pattensBlue}`,

  h4: {
    color: theme.palette.smalt,
    fontSize: 13,
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },

  p: {
    color: theme.palette.blueCharcoal,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.2,
  },
}));
