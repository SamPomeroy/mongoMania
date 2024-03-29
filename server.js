const mongoose = require('mongoose')
const app = require('./app')

const port = 3001

mongoose
    .connect("mongodb://127.0.0.1:27017/express-mongodb-intro")
    .then(()=>{
        app.listen(port, ()=>{
            console.log('server started')
            console.log("MONGO DB CONNECTED")
        })
    }).catch((error) =>{
        console.log(error)
    })