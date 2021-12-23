const {eventModel}= require("../models/eventModel");

exports.eventController = {

    getAllevents(req,res){
        eventModel.find({})
        .then(docs => {res.json(docs) })
        .catch(err => console.log(`err getting the data from db: ${err}`));
    },
    getevent(req,res){
        eventModel.findOne({id})
            .then(docs => {res.json(docs) })
            .catch(err => console.log(`err getting the data from db: ${err}`))
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
    updateevent(req,res){
        eventModel.updateOne({id}, {firstName}, {lastName}, {phone}, {email})
            .then(docs => {res.json(docs) })
            .catch(err => console.log(`err updating the data from db: ${err}`))

    },
    deleteevent(req,res){
        eventModel.deleteOne({id})
            .then(docs => {res.json(docs) })
            .catch(err => console.log(`err deleting the data from db: ${err}`))

    }

}