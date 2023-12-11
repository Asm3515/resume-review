// const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  First_name: {
    type: String,
    required: true,
  },

  Last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    // unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  Phone_number: {
    type: String,
    require:true,
    // maxLength: 10,
    // unique: true
  },

  Type_user: {
    type: String,
    require:false,
    // maxLength: 10,
  }

});

module.exports = mongoose.model("User", userSchema);