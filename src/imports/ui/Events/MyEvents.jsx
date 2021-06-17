import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import EventsCollection from "../../db/EventsCollection";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import Loading from "../Utils/Loading";
import {Meteor} from "meteor/meteor";
const MyEvents = () => {
  const { user, isLoading } = useAuth0();
  const isContentLoading = false;
  const my_events = useTracker(() => {
    const handler = Meteor.subscribe("Events");
    if(!handler.ready){
      isContentLoading = true;
    }
    const events= EventsCollection.find({$or:[{ attendees: user.email },{host:user.email}]}).fetch();
    console.log(events);
    return events;
  });
  const classes = makeStyles({
    root: {
      maxWidth: 345,
      spacing: 4,
    },
    media: {
      height: 100
    },
  });
  if (isLoading || isContentLoading) {
    return <Loading />;
  }
  return (
    <>
      {!my_events ? (
        <h1>No events </h1>
      ) : (
          <>
          <Typography variant="h4" gutterBottom>Your events</Typography>
          <Grid spacing={4} container align="center">
          {my_events.map((event) => {
              console.log(event);
            return (
                
                <Grid item xs={12} lg={3} key={event._id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia component="img" src={event.picUrl} className={classes.media} />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        <Link to={"/event/"+event._id}>{event.name}</Link>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
                
              
            );
          })}
        </Grid>
          </>
        
      )}
    </>
  );
};

export default MyEvents;
