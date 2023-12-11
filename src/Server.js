const express = require('express');
const mongoose = require('mongoose');
// const Project = require('./Models/');
const userRouter = require("./Routes/Routes.js")
const bodyParser = require('body-parser');


const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/user", userRouter);

//requiring the routes
app.use('/', require('./Routes/courseRoutes'));
app.use('/', require('./Routes/appointment'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://morea04:Asm3515@cluster3.7smnpgd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });




// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});