import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";

function insertEvent(event){
  EventsCollection.insert(event);
}

Meteor.startup(() => {
  console.log(EventsCollection.find().count());
  if (EventsCollection.find().count() === 0) {
    [
      {
        position: [51.505, -0.09],
        name: "event1",
      },
      {
        position: [51.505, -0.1],
        name: "event2",
      },
      {
        position: [51.505, -0.08],
        name: "event3",
      },
      {
        position: [51.605, -0.08],
        name: "event4",
      },
      {
        position: [51.405, -0.08],
        name: "event5",
      },
    ].forEach(insertEvent);
  }
});
