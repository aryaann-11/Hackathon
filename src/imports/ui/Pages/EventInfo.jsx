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

export default function Info(props) {
  const classes = useStyles();
  const event = props.event;
  const name = event.name;
  const host = event.host;
  const address = event.address;
  const _id = event._id;
  const imageurl = event.picUrl;
  const { user } = useAuth0();
  const rsvpYes = () => {
    
    var attendees = EventsCollection.findOne({_id:_id}).attendees;
    var new_attendees = []
    if(!attendees){
        new_attendees = [user.email];        
    }
    else{
        for(i=0;i<attendees.length;i++){
            if(attendees[i]==user.email){
                alert("You have already RSVPd yes to this event");
                return;
            }
        }
        new_attendees = [...attendees,user.email];
    }
    EventsCollection.update(
        { _id: _id },
        { $set: { attendees: new_attendees } }
    );
    alert("You have RSVPd Yes to this event !");
  };
  return (
    <>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={3}>
          <div className={classes.root}>
            <div className={classes.section1}>
              <Typography color="textSecondary" variant="body2">
                Hosted by
              </Typography>
              <Grid container direction="row" alignItems="center">
                <Avatar src="/broken-image.jpg" className={classes.small} />
                <Grid item>
                  <Typography gutterBottom variant="h6">
                    {host}
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Typography gutterBottom variant="body2">
                Number of Attendees: 54
              </Typography>
            </div>
            <Grid container alignItems="center">
              <Grid item xs={12} className={classes.paper}>
                <Button color="secondary" variant="contained" onClick={rsvpYes}>
                  RSVP Yes!
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {/* <Divider variant="fullWidth" orientation="vertical"></Divider> */}
        <Grid item xs={12} sm={9}>
          <Container className={classes.column} maxWidth="sm">
            <img src={imageurl} width="40%" height="60%"></img>
            <Typography variant="h3" gutterBottom>
              {name}
            </Typography>
            <Typography paragraph>{address}</Typography>
            <Typography>21/08/2001 Thursday</Typography>
            <Typography gutterBottom>Description</Typography>
            <Typography paragraph>{address}</Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
