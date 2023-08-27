import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from '../components/Navbar';
const PostItems = () => {
  const [fooditem, setFoodItem] = useState('');
  const [description, setDescription] = useState('');
  const [phoneno, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleSubmit = async (e) => {
    
    console.log('outside try');
    try {
    
      if (!/^[0-9]{10}$/.test(phoneno)) {
        toast.error("Invalid phone number format. Please enter a 10-digit number.", {
          position: "bottom-right"
        });
        return;
      }
      

  console.log(fooditem,description,phoneno,image)
     
  const response = await axios.post('http://localhost:5000/api/item/postitem', {
    fooditem,
    
    description,
    phoneno,
    image
  });
   console.log('after request');


   
      if (response.status === 200) {
        console.log('before data')
        console.log(response.data);
        console.log(response.data.newItem)
          console.log("after data")
        toast.success("New item posted successfully", {
          position: "bottom-right"
        });
        setFoodItem('');
        setDescription('');
        setPhoneNumber('');
        setImage('');
      } 
    } catch (error) {
      console.log(error);
      toast.error("An error occurred", {
        position: "bottom-right"
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2 className="text-center">Post Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="foodItem" className="form-label">
            Item
          </label>
          <input
            type="text"
            className="form-control"
            id="foodItem"
            value={fooditem}
            onChange={(e) => setFoodItem(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            value={phoneno}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            value={image}
          />
          {/* Display the image within a div with a maximum width and height */}
          {image && (
          <div className="image-container" style={{  Height: '100px' }}>
            <img src={image} alt="Selected Item" style={{ Height: '10%' }} />
          </div>
        )}
        </div>
        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </div>    
    <ToastContainer/>    
    </>
    
  );
};

export default PostItems;
