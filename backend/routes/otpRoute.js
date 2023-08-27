const express = require('express');
const mongoose = require('mongoose');
const otpModel = require('../model/otpModel');
const bodyParser = require('body-parser');
const twilio = require('twilio'); // Import the Twilio package
const otpGenerator = require('otp-generator');
const router = require('express').Router();


const accountSid = 'ACdc878ecce67e9a64eb528980a7fd9371';
const authToken = '4a8719349a93797e861afbe84c897431';
const client = twilio(accountSid, authToken);
router.post('/sendotp', async (req, res) => {
    const { userPhone, posterPhone } = req.body;
    console.log("OK")
   
    const otp = otpGenerator.generate(6, { digits: true, upperCase: false, specialChars: false });
  
    
    const newOtp = new otpModel({
      userPhone,
      posterPhone,  
      otp,
    }); 
  
    try {
      await newOtp.save();
  
      
      const userMessage = await client.messages.create({
        body: `Your OTP is : ${otp}`,
        from: '+16185961651',
        to: userPhone,
      });
  
      console.log(userMessage.sid);
  
      
      const posterMessage = await client.messages.create({
        body: `Your OTP is : ${otp}`,
        from: '+16185961651',
        to: posterPhone,
      });
  
      console.log(posterMessage.sid);
  
      res.status(200).json({
        message: 'OTP sent successfully to both user and poster',
      });
    } catch (error) {
      console.error(error)
      res.status(404).json({
        message: 'Failed to send OTP',
      });
    }
  })


module.exports = router;