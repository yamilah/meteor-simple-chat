Meteor.methods({
    createMessage: function(message) {
        if (Meteor.user() !== null) {
            Messages.insert({user: Meteor.user().emails[0].address, message: message});
        }
    }
});
