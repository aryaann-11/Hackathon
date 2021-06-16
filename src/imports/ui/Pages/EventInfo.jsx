import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Style";
import { Button, Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import EventsCollection from "../../db/EventsCollection";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Utils/Loading";

export default function Info(props) {
  const classes = useStyles();
  const event = props.event;
  const name = event.name;
  const host = event.host;
  const address = event.address;
  const _id = event._id;
  const imageurl = event.picUrl;
  const attendees = event.attendees;
  const { user, isLoading } = useAuth0();
  const rsvpYes = () => {
    var attendees = EventsCollection.findOne({ _id: _id }).attendees;
    var new_attendees = [];
    if (!attendees) {
      new_attendees = [user.email];
    } else {
      for (i = 0; i < attendees.length; i++) {
        if (attendees[i] == user.email) {
          alert("You have already RSVPd yes to this event");
          return;
        }
      }
      new_attendees = [...attendees, user.email];
    }
    EventsCollection.update(
      { _id: _id },
      { $set: { attendees: new_attendees } }
    );
    alert("You have RSVPd Yes to this event !");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Typography variant="h2">{name}</Typography>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <Typography variant="h6" gutterBottom>
              Host
            </Typography>
            <Typography variant="body1">{host}</Typography>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <Typography variant="h6">Attendees</Typography>
            <Typography variant="body1">{attendees.length}</Typography>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <Typography variant="h6">Venue</Typography>
            <Typography variant="body1">{address}</Typography>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <Typography variant="h6">Starting Date</Typography>
            <Typography variant="body1">{event.starting_date}</Typography>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <Typography variant="h6">Ending Date</Typography>
            <Typography variant="body1">{event.ending_date}</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <img
              src={event.picUrl}
              alt={event.pic_caption}
              style={{ width: "100%", marginBottom: "40px" }}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Typography variant="body1">{event.description}</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Typography variant="body1">{event.links}</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Button variant="contained" color="secondary" onClick={rsvpYes}>
              RSVP Yes
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
