const express= require('express');
const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    fooditem :{
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true
    }, 

    image: {
        // data: Buffer, 
        // contentType: String 
        type : String
    }
});


module.exports = new  mongoose.model('FoodModel',FoodSchema)