import React,{useState} from "react";
import { Drawer, Divider, IconButton } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ReorderIcon from "@material-ui/icons/Reorder";
import HomeIcon from "@material-ui/icons/Home";
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
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </Link>
          <Link to="/new" style={styles.link}>
            <List>
              <ListItem button key="New Event">
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="New Event" />
              </ListItem>
            </List>
          </Link>
          {isAuthenticated && (
              <Link to="#" style={styles.link}>
              <LogoutButton/>
            </Link>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default MaterialDrawer;
