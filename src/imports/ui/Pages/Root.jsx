import React from "react"
import Navbar from "../Header/Navbar";
import {useAuth0} from "@auth0/auth0-react";
import AllEventsMap from "../Maps/AllEvents";
import { Home } from "./home";
import { CssBaseline } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
import '@fontsource/roboto';
// import useStyles from "./Style";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ecf0f1'
    },
    secondary: {
      main: '#16a085',
    },
  },
});


export const Root = () => {
    const {isLoading,isAuthenticated} = useAuth0();
    // const classes = useStyles();


    if(isLoading){
        return(
            <>
                <h1>Loading, please wait</h1>
            </>
        )
    }
    if(!isAuthenticated){
        return(
            <>
            <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar/>
            <Home/>
            </ThemeProvider>
            </>
        )
    }
    return(
        <>
        <CssBaseline/>
            <Navbar/>
            <AllEventsMap/>
        </>
    )
}
export default Root;