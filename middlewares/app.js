const http = require("http")
const express = require("express")

const app = express()

app.use((req ,res ,next)=>{
    console.log("first middleware")
    next()
})

app.use((req ,res ,next)=>{
    console.log("second middleware")
    res.send("<h1>Hello from node js</h2>")
})

const server = http.createServer(app)

server.listen(3000, ()=>{
    console.log("server is running at port 3000")
})