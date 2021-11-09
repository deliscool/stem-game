//Server
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


//Middleware (for every request)
app.use(express.json())  //Looks for request body and turns it into req.body
app.use(morgan("dev"))   //Logs requests to the console

//Connect to database
mongoose.connect("mongodb://localhost:27017/gamedb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB!")
)

//Routes
app.use("/game", require("./routes/gameRouter.js"))



app.listen(9000, () => {
    console.log("The server is running on PORT 9000!")
})