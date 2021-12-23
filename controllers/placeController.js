const { placeModel } = require("../models/placeModel")
const axios = require('axios');

exports.placeController = {
    
    getAllplacesNearby(req, res) {


        let getPlaceByAutocomplete = {
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.place}, Tel Aviv-Yafo&types=geocode&key=${process.env.API_KEY}`,
            headers: {}
        };
        axios(getPlaceByAutocomplete)
            .then(function (response) {
                place_id = response.data["predictions"][0]["place_id"];
                let extractPositionByUsingPlaceId = {
                    method: 'get',
                    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.API_KEY}`,
                    headers: {}
                };
                axios(extractPositionByUsingPlaceId)
                .then(function (response) {
                    let lat = response.data["result"]["geometry"]["viewport"]["northeast"]["lat"];
                    let lng = response.data["result"]["geometry"]["viewport"]["northeast"]["lng"];
                    let getNearyByPlaces = {
                        method: 'get',
                        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.API_KEY}&location=${lat},${lng}&radius=5000&type=restaurant`,
                        headers: {}
                    };
                    axios(getNearyByPlaces)
                    .then(function (response) {
                        let dataFromJson = response.data["results"];
                        res.json(dataFromJson)
                    })
                    .catch(function (error) {
                        console.log(error);
                        res.status(400).json({msg:"Error with the geometry location."})
                    });
                })
                .catch(function(error){
                    console.log(error);
                    res.status(400).json({msg:"Error with the place id."})
                })
            })
            .catch(function (error) {
                console.log(error);
                res.status(400).json({msg:"Error with the name of the place."})
            });
    },
}