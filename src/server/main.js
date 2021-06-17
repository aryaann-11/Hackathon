import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";
import UserProfileCollection from "/imports/db/UserProfileCollection";
import '../imports/api/EventsMethods';
import '../imports/api/EmailMethods';
Meteor.startup(() => {
  console.log(EventsCollection.find().count());
  process.env.MAIL_URL = 
         "smtp://postmaster@sandbox611ecd9f8e14462ebcbc4918436a5588.mailgun.org:YOUR_DEFAULT_PASSWORD@c2eb4445c3e58846a14545e44c134df7-24e2ac64-2e526ba3";
});
