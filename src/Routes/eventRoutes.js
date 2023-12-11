const express = require('express');

const router = express.Router();


// const multer = require('multer');

// Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

//importing the model
const eventController = require('../controllers/eventController');

console.log('router loaded');


//router for creating the product
router.post('/event/create', eventController.create);

//router for showing the product
router.get('/event',eventController.list);

//router for deleting the product
router.delete('/event/:id',eventController.delete);

//router for updating the product
router.post('/event/:id',eventController.update);


module.exports = router;