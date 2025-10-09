const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/projectUserDB").then(()=>{
    console.log("Connected............")
})