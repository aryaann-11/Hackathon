import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import EventsCollection from "../../db/EventsCollection";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Map,
} from "react-leaflet";
import * as L from "leaflet";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Utils/Loading";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
const LeafIcon = L.Icon.extend({
  options: {},
});
const greenIcon = new LeafIcon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
});

const EventsMap = () => {
  const events = useTracker(() => EventsCollection.find({}).fetch());
  const { isLoading } = useAuth0();
  const count = events.length;
  const classes = makeStyles({
    root: {
      maxWidth: 145,
      spacing: 4,
    },
    media: {
      height: 70,
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15}
        scrollWheelZoom={false}
        className="lg-map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => {
          console.log(event);
          return (
            <Marker
              position={[event.position[0], event.position[1]]}
              key={event._id}
              icon={greenIcon}
            >
              <Popup>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src={event.picUrl}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography variant="body2" component="p" gutterBottom>
                        <Link to={"/event/" + event._id}>{event.name}</Link>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default EventsMap;
