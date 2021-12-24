import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({
  palette: {
    primary: { main: indigo[500] },
    secondary: { main: teal[100]},
  },
  typography: { useNextVariants: true },
});
 
export default function UXPinWrapper({ children }) {
  
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}