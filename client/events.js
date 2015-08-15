Template.body.events({
    "submit form": function(event) {
        var message = event.target.message;
        Meteor.call("createMessage", message.value);
        message.value = "";
        return false;
    }
});
