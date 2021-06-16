import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import RootPage from "./Pages/Root";
export const App = () => (
  <div>
      <Switch>
        <Route path="/" exact>
          <RootPage/>
        </Route>
      </Switch>
  </div>
);