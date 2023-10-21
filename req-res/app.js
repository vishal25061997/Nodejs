const http = require("http")

 const server=http.createServer((req, res)=>{
    const url = req.url
    if(url==="/"){
        console.log("Welcome Home")
    }else if(url==="/about"){
        console.log("welcome to about page")
    }else {
        console.log("welcome to node page")
    }
 })


 server.listen(8080, ()=>{
    console.log("server is running at port 8080, welcome vishal")
 })