const mongoose = require('mongoose');
// const Course = require('./courseModel')

//product schema containing name and quantity as variables
const appointmentSchema = new mongoose.Schema({
    reason: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        require: true
    }    
},{
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Appointment', appointmentSchema);