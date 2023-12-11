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
const courseController = require('../controllers/courseController');

console.log('router loaded');


//router for creating the product
router.post('/course/create', courseController.create);

//router for showing the product
router.get('/course',courseController.list);

//router for showing course content by id
router.get('/course/:id',courseController.getCourseByID);

//router for deleting the product
router.delete('/course/:id',courseController.delete);

//router for updating the product
router.post('/course/:id',courseController.update);



module.exports = router;