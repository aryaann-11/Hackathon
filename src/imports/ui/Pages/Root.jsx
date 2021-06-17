import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AllEventsMap from "../Maps/AllEvents";
import Loading from "../Utils/Loading";
import { Home } from "./home";
import { CssBaseline } from "@material-ui/core";
import Header from "../Header/Header";
import { Typography } from '@material-ui/core';
import "@fontsource/roboto";
// import useStyles from "./Style";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MyEvents from "../Events/MyEvents";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ecf0f1",
    },
    secondary: {
      main: "#16a085",
    },
  },
});

export const Root = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  // const classes = useStyles();


  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
    
  }
  if (!isAuthenticated) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Navbar /> */}
         
          <Home />
        </ThemeProvider>
      </>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Navbar /> */}
        <Header/>
        <div style={{marginTop:"50px", marginBotton:"50px"}}>
          <Typography variant="h2" align="center">Upcoming Events</Typography>
        </div>
        <AllEventsMap />
        <div style={{marginTop:"100px"}}>
        <MyEvents/>
        </div>
        
      </ThemeProvider>
    </>
  );
};
export default Root;
