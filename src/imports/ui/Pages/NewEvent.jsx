import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import EventsCollection from "../../db/EventsCollection";
import Loading from "../Utils/Loading";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Map,
} from "react-leaflet";
import { useTracker } from "meteor/react-meteor-data";

function LocationMarker() {
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      document.getElementById("latitude").value = e.latlng.lat;
      document.getElementById("longitude").value = e.latlng.lng;
    },
  });
  return <></>;
}

const NewEventPage = () => {
  const { user, isLoading } = useAuth0();
  const events = useTracker(() => EventsCollection.find({}));
  const submitNewEvent = (event) => {
    event.preventDefault();
    lat = parseFloat(event.target.latitude.value);
    lng = parseFloat(event.target.longitude.value);
    event_name = event.target.event_name.value;
    position = [lat, lng];
    let newEvent = { position: position, name: event_name, host: user.email };
    console.log(newEvent);
    EventsCollection.insert(newEvent);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={15}
          scrollWheelZoom={false}
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
              >
                <Popup>{event.name}</Popup>
              </Marker>
            );
          })}
          <LocationMarker />
        </MapContainer>
      </div>
      <div>
        <h4>(click on the map to load latitude and longitude)</h4>
        <form onSubmit={submitNewEvent}>
          <div className="mb-3">
            <label htmlFor="latitude" className="form-label">
              Latitude
            </label>
            <input type="text" className="form-control" id="latitude" />
          </div>
          <div className="mb-3">
            <label htmlFor="longitude" className="form-label">
              Longitude
            </label>
            <input type="text" className="form-control" id="longitude" />
          </div>
          <div className="mb-3">
            <label htmlFor="event_name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="event_name" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default withAuthenticationRequired(NewEventPage);
