import type { Theme } from '@mui/material/styles';

// eslint-disable-next-line max-lines-per-function
export default (theme: Theme) => `
  html {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 24px;
    font-family: ${theme.textFont};
  }

  body {
    word-break: break-word;
    background: ${theme.background.white};
    overflow: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    user-select: none;
    object-fit: cover;

    * {
      user-select: auto;
    }
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 39px;
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  div, ul {
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${alpha(theme.palette.black, 0.2)};
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${alpha(theme.palette.black, 0.4)};
    }
  }

  @media(min-width: 768px) {
    .notistack-SnackbarContainer {
      top: 115px;
      right: 53px;
    }
  }
`;
