const express  = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',function(req,res){
     const jobs = Math.floor(Math.random()*101);
     const notification = Math.floor(Math.random()*101);
     const message = Math.floor(Math.random()*101)
     const home = Math.floor(Math.random()*101);

     res.status(201).send({
        message:"data received ",
        information:{
            jobs,
            notification,
            message,
            home
        }
     })
})
app.listen(3000,function(){
    console.log("backend running on 3000")
})