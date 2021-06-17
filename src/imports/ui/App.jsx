import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import RootPage from "./Pages/Root";
import NewEventPage from "./Pages/NewEvent";
import EventPage from "./Pages/Event";
import UserProfilePage from "./Pages/UserProfile/UserProfile";

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from "./Navigation/Drawer";
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

export const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <RootPage />
        </Route>
        <Route path="/new" exact>
          <NewEventPage />
        </Route>
        <Route path="/event/:event_id" exact>
          <EventPage />
        </Route>
        <Route path="/profile" exact>
          <UserProfilePage/>
        </Route>
      </Switch>
    </ThemeProvider>
  </div>
);