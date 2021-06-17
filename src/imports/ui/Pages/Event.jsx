import React from "react";
import { useParams } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import EventsCollection from "../../db/EventsCollection";
import Header from "../Header/Header";
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
import Info from "./EventInfo";

const EventPage = () => {
  const { isLoading } = useAuth0();
  const { event_id } = useParams();
  const event = useTracker(() => EventsCollection.findOne({ _id: event_id }),[]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if(!event){
    <>
    <Header/>
    <h1>Event does not exist</h1>
    </>
  }
  return (
    <>
      <Header />
      <Info event={event}/>
    </>
  );
};

export default withAuthenticationRequired(EventPage);
