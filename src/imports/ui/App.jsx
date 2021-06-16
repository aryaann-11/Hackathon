import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import RootPage from "./Pages/Root";
import NewEventPage from "./Pages/NewEvent";
import EventPage from "./Pages/Event";

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
      </Switch>
    </ThemeProvider>
  </div>
);