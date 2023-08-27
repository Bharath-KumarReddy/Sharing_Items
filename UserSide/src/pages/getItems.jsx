import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function GetItems() {
  const [foodItems, setFoodItems] = useState([]);


  useEffect(() => {
    const fetchFoodItems = async () => {
        try {
        const response = await axios.get('http://localhost:5000/api/item/getall');
        const data = response.data.getItems;
        setFoodItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleGetButtonClick =  async (id) => {
      //  console.log('outside try')

    try {
      // console.log('inside try')

        const response = await axios.delete(`http://localhost:5000/api/item/delete/${id}`)

  // console.log('after response')

    setFoodItems(foodItems.filter(item => item._id !== id));

   //console.log('after filtering')

    console.log(response.data);
    } catch (error) {
        console.log(error);   
    }
  };

  
  return (
    <>
    <Navbar/>
      <div className='bg-dark' style={{ minHeight: '91.5vh' }}>
        <div className='d-flex justify-content-center align-items-center py-3'>
          <h3 style={{ color: 'orange' }}>ITems</h3>
        </div>
        <div className='container'>
          <div className='row'>
            {foodItems.map(item => (
              <div key={item._id} className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={item.image} alt='Food Item' className='card-img-top' style={{maxHeight:"200px" , maxWidth:"210px"}} />
                  <div className='card-body'>
                    <h3 className='card-title'>{item.fooditem}</h3>
                    <p className='card-text'><span style={{color:"blue"}} >description : </span>{item.description}</p>
                    <p className='card-text'>sender Phoneno : <span style={{color:"blue"}}>{item.phoneno}</span> </p>

                    
                    <button
                      className='btn btn-warning'
                      onClick={() => handleGetButtonClick(item._id)}
                    >
                      <Link to ="/forotp">Get</Link>
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GetItems;
