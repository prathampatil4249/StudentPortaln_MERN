const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true,min:18,max:40 },
    createdAt: { type: Date, default: Date.now },
})
const user = mongoose.model("users",userSchema )
module.exports = user