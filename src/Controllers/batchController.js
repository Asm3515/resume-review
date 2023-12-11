const Batch = require('../models/batchModel');
const Course = require('../models/courseModel');

// controller function for listing the course
module.exports.list = async function(req,res){
    try {
        let batch = await Batch.find({});
        // await batch.courses.populate({
        //     path: "courses",
        //     model: "Course"
        // }).execPopulate();
        await Promise.all(batch.map(async (bat) => {
            await Batch.populate(bat, {
                path: 'courses',
                model: 'Course'
            });
        }));
        // console.log(courses)
        // if(courses.length!==0){
        //     for(let x of courses){
        //         console.log(x,_id)
        //         const course = await Course.findOne({x: _id});
        //         console.log(course);
        //     }
        // }
        return res.json(200, {
            message: "batch listed successfully",
            batch: batch
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

// controller function for listing each batch
module.exports.listById = async function(req,res){
    try {
        let batch = await Batch.findOne({_id: req.params.id});
        const courses = batch.courses;
        console.log(courses,batch)
        if(courses.length!==0){
            for(let x of courses){
                console.log(x,_id)
                const course = await Course.findOne({x: _id});
                console.log(course);
            }
        }
        return res.json(200, {
            message: "batch listed successfully",
            batch: batch
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//controller function for creating the product
module.exports.create = async function(req, res) {
    console.log("#############",req.body)
    try {
        const {batch} = req.body;

        const new_batch = new Batch({ batch });
        let batch_x = await new_batch.save();
        return res.json(200,{
            message: "batch created successfully",
            batch: batch_x
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

//controller function for deleting the product
module.exports.delete = function(req, res) {

    Batch.remove({
      _id: req.params.id
    }, function(err, batch) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Batch successfully deleted' });
    });
};