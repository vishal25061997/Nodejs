 const http = require("http")

 const server=http.createServer((req, res)=>{
    res.end("hello vishal yadav")
 })


 server.listen(8080, ()=>{
    console.log("server is running at port 8080, welcome vishal")
 })