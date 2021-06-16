import React from "react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
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

const Navbar = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                className={classes.title}
                color="secondary"
              >
                Treefer
              </Typography>
            </Grid>

            <Grid item xs={3} lg={1}>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item xs={3} lg={1}>
              <Link to="/new">New</Link>
            </Grid>
            {isAuthenticated && (
              <Grid item xs={3} lg={1}>
                <LogoutButton />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};

export default Navbar;
