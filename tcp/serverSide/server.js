const net = require('net')


const socket = net.createServer(socket=>{
    console.log("tcp server is running ")
     
    socket.write("hello")
    socket.on("data",data=>{
        console.log(data.toString())
    })
})


socket.listen(8080)