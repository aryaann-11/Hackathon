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
import axios from "axios";
import Navbar from "../Header/Navbar";
import * as L from "leaflet";

const LeafIcon = L.Icon.extend({
  options: {},
});
const greenIcon = new LeafIcon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
});

function LocationMarker() {
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      document.getElementById("latitude").value = e.latlng.lat;
      document.getElementById("longitude").value = e.latlng.lng;
      axios
        .get(
          "https://nominatim.openstreetmap.org/reverse?lat=" +
            e.latlng.lat +
            "&lon=" +
            e.latlng.lng +
            "&format=json"
        )
        .then((resp) => {
          console.log(resp.data.display_name);
          document.getElementById("address").value = resp.data.display_name;
        })
        .catch((err) => {
          alert(err);
        });
    },
  });
  return <></>;
}

const NewEventPage = () => {
  const { user, isLoading } = useAuth0();
  let events = useTracker(() => EventsCollection.find({}));
  const submitNewEvent = (event) => {
    event.preventDefault();
    const lat = parseFloat(event.target.latitude.value);
    const lng = parseFloat(event.target.longitude.value);
    const event_name = event.target.event_name.value;
    const position = [lat, lng];
    const address = event.target.address.value;
    const newEvent = {
      position: position,
      name: event_name,
      host: user.email,
      address: address,
    };
    console.log(newEvent);
    EventsCollection.insert(newEvent);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Navbar/>
      <div>
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
            <input type="hidden" className="form-control" id="latitude" />
          </div>
          <div className="mb-3">
            <input type="hidden" className="form-control" id="longitude" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea className="form-control" id="address" />
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
