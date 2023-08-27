import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ForOTP.css'; // Import your custom CSS file for styling
import Navbar from '../components/Navbar';

const ForOTP = () => {
  const [userPhone, setUserPhone] = useState('');
  const [posterPhone, setPosterPhone] = useState('');

  const handleSendOTP = async () => {
    try {
      if (!userPhone || !posterPhone) {
        // alert('Both phone numbers are required.');
        toast.error("Both phoneNo are required",{
          position : "bottom-right"
        })
        return;
      }

      const response = await axios.post('http://localhost:5000/api/otp/sendotp', {
        userPhone,
        posterPhone,
      });

      console.log(response.data.message);
      toast.success('OTP sent successfully', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.log(error);
      toast.error('An error occurred', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <>
    <Navbar/>
     <div className="otp-container">
      <h2>Type +91__</h2>
      <div className="input-group">
        <label>Your Phone Number:</label>
        <input
          type="text"
          value={userPhone}
          placeholder="+91"
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Sender Phone Number:</label>
        <input
          type="text"
          value={posterPhone}
          placeholder="+91"
          onChange={(e) => setPosterPhone(e.target.value)}
        />
      </div>
      <button className="send-button" onClick={handleSendOTP}>
        Send OTP
      </button>
      <ToastContainer />
    </div>
    
    </>
   
  );
};

export default ForOTP;
