const {Router} =require("express")

const {eventController} =require("../controllers/eventController")

const eventRouter = new Router()
module.exports= {eventRouter}

eventRouter.get("/",eventController.getAllevents)
eventRouter.post("/",eventController.addevent)