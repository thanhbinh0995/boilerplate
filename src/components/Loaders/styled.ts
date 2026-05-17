interface PreLoaderProps {
  readonly width?: string;
  readonly height?: string;
}

interface DotElementProps {
  readonly size?: string;
}

export const PreLoader = styled('div')<PreLoaderProps>(
  ({ theme, height, width }) => `
  background-color: ${theme.background.white};
  height: ${height};
  width: ${width};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,
);

const DotsAnimation = keyframes`
  0% { transform: translateY(-23%); }
  50% { transform: translateY(23%); }
  100% { transform: translateY(-23%); }
`;

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const DotElement = styled('div')<DotElementProps>(
  ({ theme, size }) => css`
    border-radius: 100%;
    float: left;
    height: ${size};
    width: ${size};
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-name: ${DotsAnimation};
    transform: translateY(-23%);

    &:nth-of-type(1) {
      animation-delay: calc(1 * 0.15s);
      background: ${theme.background.cornflowerBlue};
    }

    &:nth-of-type(2) {
      animation-delay: calc(2 * 0.15s);
      background: ${theme.background.cinnabar};
    }

    &:nth-of-type(3) {
      animation-delay: calc(1 * 0.15s);
      background: ${theme.background.selectiveYellow};
    }

    &:not(:last-child) {
      margin-right: 16px;
    }
  `,
);

export const SpinLoading = styled(MUIBox, {
  shouldForwardProp: (prop) => prop !== 'spinColor',
})<{
  size: number;
  spinColor: keyof Theme['palette'];
}>(({ theme, size, spinColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:after': {
    content: '""',
    display: 'block',
    width: size,
    height: size,
    borderColor: `transparent ${theme.palette[spinColor]} ${theme.palette[spinColor]} transparent`,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: '50%',
    backfaceVisibility: 'hidden',
    transform: 'rotate(0deg)',
    animation: `${SpinAnimation} 0.5s linear infinite`,
  },
}));
