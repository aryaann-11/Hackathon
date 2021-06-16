import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";

Meteor.startup(() => {
  console.log(EventsCollection.find().count());
});
