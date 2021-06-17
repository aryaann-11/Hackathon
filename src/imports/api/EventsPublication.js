import { Meteor } from 'meteor/meteor';
import EventsCollection from '/imports/db/EventsCollection';

Meteor.publish('Events',function publishEvents(){
    return EventsCollection.find({});
})
