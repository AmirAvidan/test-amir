const {Router} =require("express")

const {placeController} =require("../controllers/placeController")

const placeRouter = new Router()
module.exports= {placeRouter}

placeRouter.get("/:place",placeController.getAllplacesNearby)
