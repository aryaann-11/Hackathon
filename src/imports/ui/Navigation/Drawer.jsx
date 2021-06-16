import React,{useState} from "react";
import { Drawer, Divider, IconButton } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth/LogoutButton";


const styles = {
  sideNav: {
    marginTop: "-60px",
    zIndex: 3,
    marginLeft: "0px",
    position: "fixed",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
};

const MaterialDrawer = () => {
  const [ isDrawerOpened, setIsDrawerOpened ] = useState(false);
  const { isAuthenticated } = useAuth0();
  const toggleDrawerStatus = () => {
    setIsDrawerOpened(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };
  return (
    <>
      <div>
        <div style={styles.sideNav}>
          <IconButton onClick={toggleDrawerStatus}>
            {!isDrawerOpened ? <ReorderIcon /> : null}
          </IconButton>
        </div>
        <Divider />
        <Drawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={closeDrawer}
        >
          <Link to="/" style={styles.link}>
            <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </Link>
          <Link to="/new" style={styles.link}>
            <List>
              <ListItem button key="New Event">
                <ListItemIcon>
                  <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="New Event" />
              </ListItem>
            </List>
          </Link>
          <Link to="/new" style={styles.link}>
            <List>
              <ListItem button key="Logout button">
                {isAuthenticated && <LogoutButton />}
              </ListItem>
            </List>
          </Link>
        </Drawer>
      </div>
    </>
  );
};

export default MaterialDrawer;
