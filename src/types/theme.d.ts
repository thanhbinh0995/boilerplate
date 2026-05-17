import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      smalt: string;
      white: string;
      cornflowerBlue: string;
      cinnabar: string;
      selectiveYellow: string;
      black: string;
      whisper: string;
      gallery: string;
      pattensBlue: string;
      silverChalice: string;
      silverChaliceExtra: string;
      midnightBlue: string;
      athensGray: string;
      hawkesBlue: string;
      orinoco: string;
      watusi: string;
      zumthor: string;
      blackTransparent08: string;
      blackTransparent37: string;
      blackTransparent75: string;
      blackTransparent80: string;
      grayTransparent04: string;
      grayTransparent10: string;
      grayTransparent29: string;
      whiteTransparent80: string;
      ebonyClayTransparent14: string;
    };
    textFont: string;
  }

  interface Palette {
    transparent: string;
    smalt: string;
    persianBlue: string;
    alizarinCrimson: string;
    froly: string;
    vidaLoca: string;
    white: string;
    lynch: string;
    amaranth: string;
    athensGray: string;
    fountainBlue: string;
    danube: string;
    gray: string;
    emperor: string;
    mineShaft: string;
    blueCharcoal: string;
    fiord: string;
    black: string;
    sirocco: string;
    silver: string;
    gallery: string;
    mercury: string;
    doveGray: string;
    oracle: string;
    magnolia: string;
    pattensBlue: string;
    royalBlue: string;
    cornflowerBlue: string;
    anakiwa: string;
    hawkesBlue: string;
    selectiveYellow: string;
    athensGrayExtra: string;
    comet: string;
    dustyGray: string;
    silverChalice: string;
    alto: string;
    deepSapphire: string;
    mystic: string;
    dodgerBlue: string;
    antiqueBronze: string;
    buttercup: string;
    easternBlue: string;
    rose: string;
    oxfordBlue: string;
    zumthor: string;
    midGray: string;
    ebonyClay: string;
    cobalt: string;
    snuff: string;
    whisper: string;
    kimberly: string;
    whiteLilac: string;
    whiteLilacSecond: string;
  }

  interface PaletteOptions extends Partial<Palette> {}

  interface ThemeOptions extends Partial<Theme> {}
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}
