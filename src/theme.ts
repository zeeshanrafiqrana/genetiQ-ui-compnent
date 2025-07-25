import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;

    xls: true; // ✅ Add custom breakpoint
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xls: 1500,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#0974FB",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default theme;
