import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#575757",
      white: "#ffffff",
    },
    primary: {
      main: "#FFDA56",
      contrastText: "#373737",
    },
    grey: {
      "400": "#EEEEEE",
      "500": "#F2F2F2",
      "600": "#C9C9C9",
      "700": "#707070",
      "800": "#474747", // 가장 짙은 회색
    },
    info: {
      main: "#1bb2f1",
    },
    success: {
      main: "#FFDA56",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "NanumSquare",
  },
  zIndex: {
    appBar: 999,
  },
});

export default theme;
