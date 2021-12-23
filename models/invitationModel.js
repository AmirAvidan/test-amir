const { Schema, model } = require("mongoose");

const invitationSchema  = new Schema({
    eventId: {
        type:Number,
        required:true
    },
    userId: {
        type:Number,
        required:true
    },
    attendance: {
        type:Number, // Number because there are 3 possible options
        required:true  
    },
    smoker: {
        type:Boolean
    },
    time: {
        type:Date,
        required:true
    },
    seatingPreference: {
        type:Boolean
    },
}, {collection:'invitations'});

const invitationModel  = model("Invitation",invitationSchema);

module.exports = invitationModel;