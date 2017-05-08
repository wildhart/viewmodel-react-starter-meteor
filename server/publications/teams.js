Meteor.publish("teams", function () {
    return teamsCollection.find();
});
