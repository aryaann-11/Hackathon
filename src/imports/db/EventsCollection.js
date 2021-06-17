import {Mongo} from "meteor/mongo";

const EventsCollection = new Mongo.Collection('Events');
export const UserProfileCollection = new Mongo.Collection('UserProfiles');

export default EventsCollection;
