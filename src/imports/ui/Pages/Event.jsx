import React from "react";
import { useParams } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import EventsCollection from "../../db/EventsCollection";
import Navbar from "../Header/Navbar";
import Loading from "../Utils/Loading";
import { Typography, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ecf0f1",
    },
    secondary: {
      main: "#16a085",
    },
  },
});

const EventPage = () => {
  const { isLoading } = useAuth0();
  const { event_id } = useParams();
  const event = useTracker(() => EventsCollection.findOne({ _id: event_id }));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <img src={event.picUrl} alt={event.pic_caption} style={{width:"30%"}}></img>
          <Typography variant="h6">Name: {event.name}</Typography>
          <Typography variant="h6">Host: {event.host}</Typography>
          <Typography variant="p">Address: {event.address}</Typography>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default withAuthenticationRequired(EventPage);
