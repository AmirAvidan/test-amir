const {eventModel}= require("../models/eventModel");

exports.eventController = {

    getAllevents(req,res){
        eventModel.find({})
        .then(docs => {res.json(docs) })
        .catch(err => console.log(`err getting the data from db: ${err}`));
    },
    async addevent(req,res){

        const newEvent = new eventModel(req.body)
    
            try {
                const result = await newEvent.save();
                if (result){
                        res.json(result)
                    }
                    else {
                        res.send("x");
                    }
            } catch (error) {
                console.log(error);
                res.status(400).send("err")
            }

    },

}