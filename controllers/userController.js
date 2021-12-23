const {userModel}= require("../models/userModel")

exports.userController = {

    
        getAllUsers(req,res){
            userModel.find({})
            .then(docs => {res.json(docs) })
            .catch(err => console.log(`err getting the data from db: ${err}`));
           
        },
        getUser(req,res){
            userModel.findfOne({_id:req.params.id})
                .then(docs => {res.json(docs) })
                .catch(err => console.log(`err getting the data from db: ${err}`))
    
        },
        async addUser(req,res){
    
            
            
            const newUser = new userModel(req.body)
    
            try {
                const result = await newUser.save();
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
        updateUser(req,res){
            userModel.updateOne({_id:req.params.id}, req.body)
                .then(docs => {res.json(docs) })
                .catch(err => console.log(`err updating the data from db: ${err}`))
    
        },
        deleteUser(req,res){
            userModel.deleteOne({_id:req.params.id})
                .then(docs => {res.json(docs) })
                .catch(err => console.log(`err deleting the data from db: ${err}`))
        }
    
    }

    

