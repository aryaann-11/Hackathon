import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";
import UserProfileCollection from "/imports/db/UserProfileCollection";
import '../imports/api/EventsMethods';
import '../imports/api/EmailMethods';
Meteor.startup(() => {
  console.log(EventsCollection.find().count());
  process.env.MAIL_URL = 
  "smtps://treeferwithackathon:Singhania2017@smtp.gmail.com:465/"
});
