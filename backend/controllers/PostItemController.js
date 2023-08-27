const express = require('express');
const mongoose = require('mongoose');
const foodModel = require('../model/postItemModel');

module.exports.postItem = async ( req,res) => {
     try {
        // console.log(req.body)
        const {fooditem,description,phoneno,image} = req.body;
        console.log(req.body);
        const newItem = new foodModel();
        newItem.fooditem = fooditem;
        newItem.description = description;
        newItem.phoneno = phoneno;
        newItem.image = image;

      await newItem.save();
        
        // console.log(newItem);
        console.log("Working")
        res.status(201).json({
            newItem,
            message : "new Item posted successfully"
        })
     } catch (error) {
        // console.log(error);
     res.status(404).json({
        message : "an error ocurred"
     })
     }
};



module.exports.getallItems = async (req,res,next) => {
    const {fooditem,description,phoneno} = req.body;

    try {
        
        const getItems = await  foodModel.find();
        res.status(200).json({
            getItems,
            message : "all items are here"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message : "an error ocurred"
        })
    }
};