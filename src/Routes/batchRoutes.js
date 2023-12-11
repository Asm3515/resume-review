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
const batchController = require('../controllers/batchController');

console.log('router loaded');


//router for creating the product
router.post('/batch/create', batchController.create);

//router for creating the product
router.get('/batch/:id', batchController.listById);

//router for showing the product
router.get('/batch',batchController.list);

//router for deleting the product
router.delete('/batch/:id',batchController.delete);

module.exports = router;