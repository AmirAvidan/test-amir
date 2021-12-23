const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
    lng:{type:Number},
    lat:{type:Number}
});

const placeSchema = new Schema({
    // Not the mongodb id , but the id from the api!!!!
    placeId: {
        type:Number,
        required:true
    },
    location: 
        [addressSchema]
    ,
    placeName: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
}, {collection:'places'});

const placeModel  = model("Place",placeSchema);

exports.placeModel = placeModel;