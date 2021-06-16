import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";
import CustomAuthProvider from "../imports/ui/Auth/CustomAuthProvider";
import { BrowserRouter } from "react-router-dom";

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <CustomAuthProvider>
        <App />
      </CustomAuthProvider>
    </BrowserRouter>,
    document.getElementById("react-target")
  );
});
