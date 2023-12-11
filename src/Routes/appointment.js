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
const appointmentController = require('../controllers/appointmentController');

console.log('router loaded');


//router for creating the product
router.post('/appointment/create', appointmentController.create);

//router for showing the product
router.get('/appointment',appointmentController.list);

//router for deleting the product
router.delete('/appointment/:id',appointmentController.delete);

router.get('/appointment/user/:email', appointmentController.listByUser);

module.exports = router;