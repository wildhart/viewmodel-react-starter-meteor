import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!teamsCollection.findOne()) {
    console.log('added team to teamsCollection');
    teamsCollection.insert({name:'Team 1'});
  }
});
