import {Mongo} from "meteor/mongo";

const EventsCollection = new Mongo.Collection("Events");

export default EventsCollection;