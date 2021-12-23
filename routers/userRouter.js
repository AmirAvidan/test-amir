const {Router} =require("express")

const {userController} =require("../controllers/userController")

const userRouter = new Router()
module.exports= {userRouter}

userRouter.get("/",userController.getAllUsers)
userRouter.get("/:id",userController.getUser)
userRouter.post("/",userController.addUser)
userRouter.put("/:id",userController.updateUser)
userRouter.delete("/:id",userController.deleteUser)