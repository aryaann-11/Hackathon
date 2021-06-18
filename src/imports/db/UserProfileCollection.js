import {Mongo} from "meteor/mongo";

const ProfileCollection = new Mongo.Collection("Profiles");

export default ProfileCollection;