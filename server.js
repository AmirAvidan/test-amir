const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {userRouter} = require("./routers/userRouter")
const {eventRouter} = require("./routers/eventRouter")
const {placeRouter} = require("./routers/placeRouter")



app.use("/api/users",userRouter)
app.use("/api/events",eventRouter)
app.use("/api/places",placeRouter)


app.all("*",(req, res) => {
    res.status(404).json({msg:"page not found"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})