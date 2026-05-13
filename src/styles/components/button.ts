const buttonStyles: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: () => ({
      borderRadius: 8,
      fontWeight: 600,
    }),
    contained: ({ theme }) => ({
      '&.Mui-disabled': {
        background: theme.background.pattensBlue,
        color: theme.palette.cornflowerBlue,
      },
    }),
    containedSecondary: ({ theme }) => ({
      color: theme.palette.royalBlue,
      '&:hover': {
        background: theme.background.pattensBlue,
      },
    }),
    outlined: () => ({
      border: '1px solid',
    }),
    outlinedSecondary: ({ theme }) => ({
      border: '1px solid',
      borderColor: theme.palette.pattensBlue,
      background: theme.palette.white,
      color: theme.palette.royalBlue,
    }),
    sizeLarge: () => ({
      height: 56,
      fontSize: 16,
    }),
    sizeMedium: () => ({
      height: 40,
      fontSize: 14,
    }),
    sizeSmall: () => ({
      height: 30,
      fontSize: 14,
      borderRadius: 4,
    }),
  },
};

const iconButtonStyles: Components<Theme>['MuiIconButton'] = {
  styleOverrides: {
    colorPrimary: ({ theme }) => ({
      background: theme.background.smalt,
      color: theme.palette.white,
      '&:hover': {
        background: theme.background.midnightBlue,
      },
    }),
  },
};

export { buttonStyles, iconButtonStyles };
