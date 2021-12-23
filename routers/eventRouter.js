const {Router} =require("express")

const {eventController} =require("../controllers/eventController")

const eventRouter = new Router()
module.exports= {eventRouter}

eventRouter.get("/",eventController.getAllevents)
eventRouter.get("/:id",eventController.getevent)
eventRouter.post("/",eventController.addevent)
eventRouter.put("/:id",eventController.updateevent)
eventRouter.delete("/:id",eventController.deleteevent)