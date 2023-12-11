const express = require("express");
const userController = require("../Controllers/Controllers.js")


const userRouter = express.Router();

// Now you can use the functions like this:
const getAllUsers = userController.getAllUsers;
const login = userController.login;
const signup = userController.signup;
const deleteUser = userController.deleteUser;

userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete("/:id", deleteUser) ;

module.exports = userRouter;
