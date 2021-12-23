const {Router} =require("express")

const {invitationController} =require("../controllers/invitaionController")

const invitationRouter = new Router()
module.exports= {invitationRouter}

invitationRouter.get("/",invitationController.getAllinvitations)
invitationRouter.get("/:id",invitationController.getinvitation)
invitationRouter.post("/",invitationController.addinvitation)
invitationRouter.put("/:id",invitationController.updateinvitation)
invitationRouter.delete("/:id",invitationController.deleteinvitation)