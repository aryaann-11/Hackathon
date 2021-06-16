import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <List>
        <ListItem button key="Logout" onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
};

export default LogoutButton;
