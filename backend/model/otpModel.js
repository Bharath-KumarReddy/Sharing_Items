const mongoose = require('mongoose');
const express = require('express');

const otpSchema = new mongoose.Schema({
    userPhone : {
        type : String,
        required : true
    },
    posterPhone : {
        type : String,
        required : true
    },
    otp : {
        type : String
    }

})


module.exports = new mongoose.model("otpModel",otpSchema)
