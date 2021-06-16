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

const EventsMap = () => {
  const events = useTracker(() => EventsCollection.find({}).fetch());
  const count = events.length;
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
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
              background-color="green"
            >
              <Popup>{event.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default EventsMap;
