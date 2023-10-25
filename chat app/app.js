const express = require("express")

const app = express()

const bodyParser = require("body-parser")
const loginRoute = require("./routes/login")
const messageRoutes = require("./routes/messages")

app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRoute)
app.use(messageRoutes)

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})