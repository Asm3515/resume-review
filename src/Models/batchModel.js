const mongoose = require('mongoose');
// const Course = require('./courseModel')

//product schema containing name and quantity as variables
const batchSchema = new mongoose.Schema({
    batch: {
        type: String,
        required: true
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    
},{
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Batch', batchSchema);