const {Router} =require("express")

const {placeController} =require("../controllers/placeController")

const placeRouter = new Router()
module.exports= {placeRouter}

placeRouter.get("/:place",placeController.getAllplacesNearby)
placeRouter.get("/:id",placeController.getplace)
placeRouter.post("/",placeController.addplace)
placeRouter.put("/:id",placeController.updateplace)
placeRouter.delete("/:id",placeController.deleteplace)