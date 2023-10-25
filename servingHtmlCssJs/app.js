const bodyParser = require("body-parser")
const express = require("express")
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const path = require("path")

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use("/admin",adminRouter)
app.use(shopRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})




app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})