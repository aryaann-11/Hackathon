import React from "react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import { Grid } from "@material-ui/core";
import Drawer from "../Navigation/Drawer";
import Navbar from "../Header/Navbar";
import "./navbar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
        <Toolbar>
            <div style={{marginTop:'50px'}}>
            <Drawer/>
            </div>
         
        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};

export default Header;
