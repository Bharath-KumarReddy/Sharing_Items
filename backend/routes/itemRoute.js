const express = require('express');
const mongoose = require('mongoose');
const FoodModel  = require('../model/postItemModel');
const { postItem ,getallItems} = require('../controllers/PostItemController'); // Import the postItem function from the controller
const router = require("express").Router();

// router.post('/postitem', postItem); // Use the postItem function as the callback
router.get('/getall',getallItems);
router.post("/postitem",async (req,res)=>{
    try {
        // console.log(req.body)
        const {fooditem,description,phoneno,image} = req.body;
        console.log(req.body);
        const newItem = new FoodModel();
        newItem.fooditem = fooditem;
        newItem.description = description;
        newItem.phoneno = phoneno;
        newItem.image = image;

      await newItem.save();
        
        console.log(newItem);
        console.log("Working")
        res.status(201).json({
            newItem,
            message : "new Item posted successfully"
        })
     } catch (error) {
        console.error(error)
     res.status(404).json({
        message : "an error ocurred"
     })
     }
})



router.delete('/delete/:id',async (req,res) => {
   const id = req.params.id;
   try {
     const item= await FoodModel.findByIdAndDelete(id);
     if (!item) {
       return res.status(404).json({
         message: 'Book not found',
       });
     }
     res.status(200).json({
       message: 'Book deleted successfully',
     });
   } catch (error) {
     console.error(error);
     res.status(500).json({
       message: 'An error occurred',
     });
   }
})
module.exports = router;