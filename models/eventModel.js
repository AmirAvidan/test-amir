const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    ownerId: {
        type:String,
        required:true
    },
    placeId: {
        type:String,
        required:true
    },
    nameOfPlace: {
        type:String,
        required:true
    },
    eventStartDate: {
        type:String,
        required:true
    },
    eventStartTime: {
        type:String,
        required:true
    },
    eventEndDate: {
        type:String,
        required:true
    },
    eventCreated: {
        type:Date,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    admin: [Schema.Types.ObjectId],
    invitation:String,
}, {collection: 'events'});


const eventModel = model("Event",eventSchema);

exports.eventModel = eventModel;


