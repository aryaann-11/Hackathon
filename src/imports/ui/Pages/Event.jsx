import React from "react";
import { useParams } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import EventsCollection from "../../db/EventsCollection";
import Navbar from "../Header/Navbar";
import Loading from "../Utils/Loading";
import Info from "./EventInfo";

const EventPage = () => {
  const { isLoading } = useAuth0();
  const { event_id } = useParams();
  const event = useTracker(() => EventsCollection.findOne({ _id: event_id }));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Navbar />
      <Info name={event.name} host={event.host} address={event.address}/>
      {/* <h4>Name: {event.name}</h4>
      <h4>Host: {event.host}</h4>
      <h4>Address: {event.address}</h4> */}
    </>
  );
};

export default withAuthenticationRequired(EventPage);
