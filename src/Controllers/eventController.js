const Event = require('../models/eventModel');

// controller function for listing the course
module.exports.list = async function(req,res){
    try {
        let event = await Event.find({});
        return res.json(200, {
            message: "event listed successfully",
            event: event
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
        const {name, date, time, user} = req.body;

        const new_event = new Event({ name, date, time });
        new_event.user_registered.push(user)
        let event_x = await new_event.save();
        
        return res.json(200,{
            message: "event created successfully",
            event: event_x
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

    Event.remove({
      _id: req.params.id
    }, function(err, event) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Event successfully deleted' });
    });
};

//controller function for updating the event, a sample function
module.exports.update = function (req, res, query) {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((event) => {
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }
      event.users.push(req.body.user)
      console.log("Save was successful:\n", event);
      return res.json(200, {
        message: "Event updated successfully",
        event: event,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    });
};