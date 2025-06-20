const palette = {
  // Simple Colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  orange: "#ffa500",
  purple: "#800080",
  pink: "#ffc0cb",
  brown: "#a52a2a",
  gray: "#808080",
  cyan: "#87ceeb",

  lightRed: "#ff7f7f",
  lightGreen: "#90ee90",
  lightBlue: "#add8e6",
  lightYellow: "#ffffe0",
  lightOrange: "#ffe4b5",
  lightPurple: "#dda0dd",
  lightPink: "#ffb6c1",
  lightBrown: "#cd853f",
  lightGray: "#d3d3d3",

  deepRed: "#8b0000",
  darkGray: "#a9a9a9",
  darkBlue: "#00008b",
  darkGreen: "#006400",
  darkPurple: "#4b0082",

  skyBlue: "#6975f3",
  offWhite: "#dadcf0",

  gradients: {
    redSunset: "linear-gradient(to right, #ff512f, #dd2476)",
    oceanBlue: "linear-gradient(to right, #2193b0, #6dd5ed)",
    nightSky: "linear-gradient(to right, #141e30, #243b55)",
    limeGreenFade: "linear-gradient(to right, #76ba29, #cde67d)",
  },

  navyBlue: {
    darkest: "#0A2E65",
    darker: "#173EA5",
    dark: "#2B53D0",
    base: "#517CED", // default
    light: "#7497F4",
    lighter: "#9AB5F7",
    lightest: "#E7EDFD",
  },

  limeGreen: {
    darkest: "#3F6615",
    dark: "#609F22",
    base: "#94DB38",
    light: "#B2E769",
    lightest: "#F2F9DB",
  },

  crimsonRed: {
    darkest: "#7D0F0F",
    dark: "#AD2323",
    base: "#F14329",
    light: "#FAA98D",
    lightest: "#FDE7DB",
  },

  goldenYellow: {
    darkest: "#9A6500",
    dark: "#C78600",
    base: "#FFC12A",
    light: "#FFE07E",
    lightest: "#FFF5C9",
  },

  cornflowerBlue: {
    darkest: "#153E8E",
    dark: "#2666E2",
    base: "#53A3FF",
    light: "#A7D1FF",
    lightest: "#EBF5FF",
  },

  steelGray: {
    darkest: "#24282E",
    dark: "#3B414C",
    base: "#575F6F",
    light: "#A0A6B0",
    lightest: "#E3E5E8",
  },
};

const colors = {
  textColor: {
    black: palette.black,
    white: palette.white,
    gray: palette.gray,
    blue: palette.cornflowerBlue.base,
    red: palette.crimsonRed.base,
  },
  background: {
    lightGray: palette.lightGray,
    white: palette.white,
    blueTint: palette.cornflowerBlue.lightest,
    navy: palette.navyBlue.lightest,

    darkGray: palette.steelGray.darkest,
  },
  border: {
    gray: palette.lightGray,
    blue: palette.cornflowerBlue.light,
    red: palette.crimsonRed.light,
    green: palette.limeGreen.light,
    yellow: palette.goldenYellow.light,
  },
  button: {
    blue: palette.navyBlue.base,
    blueHover: palette.navyBlue.dark,
    red: palette.crimsonRed.base,
    redHover: palette.crimsonRed.dark,
    yellow: palette.goldenYellow.base,
    yellowHover: palette.goldenYellow.dark,
    green: palette.limeGreen.base,
    greenHover: palette.limeGreen.dark,
    gray: palette.steelGray.base,
    grayHover: palette.steelGray.dark,
  },
  gradients: palette.gradients,
};

export default colors;
