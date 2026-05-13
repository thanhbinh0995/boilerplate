export default {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      height: ownerState.size === 'large' ? 56 : 48,
      background: theme.background.white,
      borderRadius: 4,
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.royalBlue,
      },
    }),
    input: ({ theme }) => ({
      paddingTop: 12,
      paddingBottom: 12,
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 30px ${theme.background.white} inset`,
      },
      '::-webkit-inner-spin-button': {
        display: 'none',
      },
      '::-webkit-input-placeholder': {
        opacity: 1,
        color: theme.palette.fiord,
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.anakiwa,
    }),
    multiline: () => ({
      height: 'auto',
      paddingTop: 0,
      paddingBottom: 0,
    }),
  },
} as Components<Theme>['MuiOutlinedInput'];
