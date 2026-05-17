export const FormCard = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const FormHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  color: theme.palette.blueCharcoal,
  fontWeight: 600,
}));

export const FormSubtitle = styled('p')(({ theme }) => ({
  color: theme.palette.lynch,
  fontSize: 14,
  lineHeight: '22px',
}));

export const FormFields = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(16),
}));

export const DemoHint = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: 8,
  backgroundColor: theme.palette.zumthor,
  color: theme.palette.smalt,
  fontSize: 13,
  lineHeight: '20px',
  marginBottom: 24,

  strong: {
    fontWeight: 600,
  },
}));
