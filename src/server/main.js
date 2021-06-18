import { Meteor } from "meteor/meteor";
import EventsCollection from "/imports/db/EventsCollection";
import UserProfileCollection from "/imports/db/UserProfileCollection";
import '../imports/api/EventsMethods';
import '../imports/api/EmailMethods';
import '../imports/api/EventsPublication';


Meteor.startup(() => {
  console.log(EventsCollection.find().count());
  process.env.MAIL_URL = 
  "smtps://treeferwithackathon:Singhania2017@smtp.gmail.com:465/"
  // process.env.MONGO_URL = Meteor.settings.MONGO_URL;
  // process.env.MONGO_URL = "mongodb+srv://aryaann_11:aryan@cluster0.nkbg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
});
