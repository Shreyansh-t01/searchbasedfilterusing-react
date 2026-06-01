const net = require('net')
const readline = require('readline')



const client = net.createConnection({
    host:"127.0.0.1",
    port : 8080

})

const r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r.on('line',(data)=>{
    client.write(data)
})

client.on("connect",()=>{
    console.log('client is live on 8080')
})

