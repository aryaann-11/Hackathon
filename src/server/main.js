import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";
import UserProfileCollection from "/imports/db/UserProfileCollection";
import '../imports/api/EventsMethods';

Meteor.startup(() => {
  console.log(EventsCollection.find().count());
});
