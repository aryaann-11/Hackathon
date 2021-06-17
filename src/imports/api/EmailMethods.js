import { check } from 'meteor/check';
import {Meteor} from 'meteor/meteor';
import {Email} from 'meteor/email';

Meteor.methods({
    'Email.send'(to,text){
        const from = 'treeferwithackathon@gmail.com';
        check(to,String);
        check(text,String);
        Email.send({to,from,text},function(err){
            if(err){
                console.log(err);
            }
        });
    }
})