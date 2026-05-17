export const MasterLayout = styled(MUIBox)(({ theme }) => ({
  fontFamily: theme.textFont,
  width: '100vw',
  height: '100vh',

  [theme.breakpoints.down('md')]: {
    width: '100dvw',
    height: '100dvh',
  },
}));

export const GuestLayout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const GuestIntro = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(8),
  background: `linear-gradient(145deg, ${theme.palette.smalt} 0%, ${theme.palette.persianBlue} 100%)`,
  color: theme.palette.white,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const GuestIntroTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.white,
  fontSize: 40,
  lineHeight: '48px',
}));

export const GuestIntroText = styled('p')(({ theme }) => ({
  maxWidth: 420,
  fontSize: 16,
  lineHeight: '28px',
  opacity: 0.92,
}));

export const GuestFeatureList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: 0,
  listStyle: 'none',

  li: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: 14,
    lineHeight: '22px',
  },
}));

export const GuestContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.whisper,
}));

export const DashboardLayout = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '260px 1fr',
  height: '100%',
}));

export const DashboardSidebar = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.smalt,
  color: theme.palette.white,
}));

export const SidebarBrand = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${alpha(theme.palette.white, 0.2)}`,

  h3: {
    color: theme.palette.white,
    fontSize: 18,
    fontWeight: 700,
  },

  span: {
    fontSize: 12,
    opacity: 0.8,
  },
}));

export const SidebarNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  flex: 1,
}));

export const SidebarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.25, 1.5),
  borderRadius: 8,
  color: theme.palette.white,
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 500,
  transition: 'background-color 0.2s ease',

  '&.active': {
    backgroundColor: alpha(theme.palette.white, 0.16),
  },

  '&:hover': {
    backgroundColor: alpha(theme.palette.white, 0.1),
  },
}));

export const SidebarFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  marginTop: 'auto',
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${alpha(theme.palette.white, 0.2)}`,
}));

export const UserBadge = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),

  strong: {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: '18px',
  },

  span: {
    display: 'block',
    fontSize: 12,
    opacity: 0.8,
    lineHeight: '16px',
    wordBreak: 'break-all',
  },
}));

export const SignOutButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  width: '100%',
  padding: theme.spacing(1.25, 1.5),
  border: `1px solid ${alpha(theme.palette.white, 0.25)}`,
  borderRadius: 8,
  background: 'transparent',
  color: theme.palette.white,
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: alpha(theme.palette.white, 0.1),
  },
}));

export const DashboardMain = styled('main')(({ theme }) => ({
  minWidth: 0,
  backgroundColor: theme.palette.athensGray,
  overflow: 'hidden',
}));