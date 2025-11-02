const mongoose = require('mongoose')
 
const dbschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
         type: String,
         required: true,
         
    },
     role: {
        type: String, 
        required: true,
        enum: ['admin', 'manager', 'user']
     }
} , {timestamps: true})

module.exports = mongoose.model('Project', dbschema);




