const Course = require('../models/courseModel');
const Batch = require('../models/batchModel');

// controller function for listing the course
module.exports.list = async function(req,res){
    try {
        let course = await Course.find({});
        return res.json(200, {
            message: "course listed successfully",
            course: course
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
        const {batch, course, material} = req.body;
        const bat = await Batch.findOne({ batch:batch });
        
        const new_course = new Course({ batch, course, material });
        if(bat){
            console.log("batch", bat)
            await bat.courses.push(new_course);
            await bat.save();
        }else{
            console.log("%%%%%%%%")
            return res.json(401, {
                message: "batch does not exist"
            });
        }
        let course_x = await new_course.save();
        return res.json(200,{
            message: "course created successfully",
            course: course_x
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

//controller function for updating the course, a sample function
module.exports.getCourseByID = function(req, res, query) {
    let course = Course.findOne({_id: req.params.id});
    if(course){
        return res.json(200, {
            message: "course listed successfully",
            course: course
        });
    }else{
        return res.json(500,{
            message: "internal server error"
        });
    }
};

//controller function for deleting the product
module.exports.delete = function(req, res) {

    Course.remove({
      _id: req.params.id
    }, function(err, course) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Course successfully deleted' });
    });
};

//controller function for updating the course, a sample function
module.exports.update = function(req, res, query) {
    Course.findOneAndUpdate({_id: req.params.id}, {new: true}, function(err, course) {
        // Product found. Update  the quantity.
        course.batch = req.body.batch;
        course.course = req.body.course;
        course.material = req.body.material;
        course.save(function (error, course) {
            if (error) {
              console.log(error);
            //   return res.send('Device update failed', error);
            }
            console.log('save was successful ? => \n', course);
            // return res.send(error, course);
          });
      if (err)
        res.send(err);
        return res.json(200,{
            message: "course updated successfully",
            course: course
        });
    });
  };