import {Mongo} from "meteor/mongo";


const UserProfileCollection = new Mongo.Collection('Profiles');

export default UserProfileCollection;