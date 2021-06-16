import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import RootPage from "./Pages/Root";
import NewEventPage from "./Pages/NewEvent";
export const App = () => (
  <div>
      <Switch>
        <Route path="/" exact>
          <RootPage/>
        </Route>
        <Route path="/new" exact>
          <NewEventPage/>
        </Route>
      </Switch>
  </div>
);