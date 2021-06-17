import { check } from 'meteor/check';
import EventsCollection from '../db/EventsCollection';
import {Meteor} from 'meteor/meteor';


Meteor.methods({
    'Events.insert'(new_event){
 
        check(new_event,{
            name:String,
            address:String,
            starting_date:String,
            ending_date:String,
            picUrl:String,
            pic_caption:String,
            host:String,
            links:String,
            position:Array,
            description:String,
            attendees:Array
        });
        EventsCollection.insert(new_event);
    },
    'Event.delete'(id,current_user_email){
        check(id,String);
        const event = EventsCollection.findOne({_id:id});
        if(event.host != current_user_email){
            throw new Meteor.Error("Not authorized");
        }
        EventsCollection.remove({_id:id});
    },
    'Event.rsvpYes'(event_id,new_attendees){
        check(new_attendees,Array);
        EventsCollection.update({_id:event_id},{$set:{attendees:new_attendees}});
    }
    
})