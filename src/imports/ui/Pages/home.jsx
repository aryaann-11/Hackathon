import React from "react";
import { Container } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import "@fontsource/roboto";
import useStyles from "./Style";
import LoginButton from "../Auth/LoginButton";

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4} align="center">
            <Typography
              align="left"
              variant="h1"
              fontSize="24"
              color="secondary"
              gutterBottom
            >
              TREEFER
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} align="center">
            <Typography align="center" variant="body1" component="p">
              A place to find 'green-minded' people and events from all around
              the world. A place where you can take your first step and initiate
              a drive to make our Earth a better place to live in!
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} align="center">
            <LoginButton/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
