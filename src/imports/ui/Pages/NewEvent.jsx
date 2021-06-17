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
import Header from "../Header/Header";
import * as L from "leaflet";
import theme from "../Utils/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { Button, CssBaseline, TextField } from "@material-ui/core";
import { Widget } from "@uploadcare/react-widget";

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
  let picUrl = "";
  const onImageUpload = (file) => {
    if (file) {
      file.done((info) => {
        console.log(info.cdnUrl);
        picUrl = info.cdnUrl;
      });
    }
  };

  let events = useTracker(() => EventsCollection.find({}));
  const submitNewEvent = (event) => {
    event.preventDefault();
    const lat = parseFloat(event.target.latitude.value);
    const lng = parseFloat(event.target.longitude.value);
    const event_name = event.target.event_name.value;
    const position = [lat, lng];
    const address = event.target.address.value;
    const caption = event.target.pic_caption.value;
    const description = event.target.description.value;
    const starting_date = event.target.starting_date.value;
    const ending_date = event.target.ending_date.value;
    const links = event.target.links.value;
    const newEvent = {
      position: position,
      name: event_name,
      host: user.email,
      address: address,
      picUrl: picUrl,
      pic_caption: caption,
      attendees: [],
      description:description,
      starting_date:starting_date,
      ending_date:ending_date,
      links:links
    };
    console.log(newEvent);
    EventsCollection.insert(newEvent, function (err) {
      if (err) {
        alert(err);
      } else {
        alert("Event added successfully !");
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
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
            <div className="col-md-7">
              <form onSubmit={submitNewEvent}>
                <div className="mb-3">
                  <input type="hidden" className="form-control" id="latitude" />
                </div>
                <div className="mb-3">
                  <input
                    type="hidden"
                    className="form-control"
                    id="longitude"
                  />
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
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    cols="30"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="links" className="form-label">
                    Important Links
                  </label>
                  <textarea className="form-control" id="links" cols="30" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pic_caption" className="form-label">
                    Caption
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pic_caption"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="starting_date" className="form-label">
                    Starting Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="starting_date"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ending_date" className="form-label">
                    Ending Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="ending_date"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="imageWidget">
                    Add picture for event
                  </label>
                  <div id="imageWidget">
                    <Widget
                      publicKey="ab442d8ac60feea75f87"
                      id="file"
                      onFileSelect={(file) => {
                        onImageUpload(file);
                      }}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default withAuthenticationRequired(NewEventPage);
