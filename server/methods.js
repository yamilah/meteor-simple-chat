Meteor.methods({
    createMessage: function(user, message) {
        Messages.insert({user: user, message: message});
    }
});
