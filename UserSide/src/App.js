import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import StartPage from './pages/StarttingPage';
// import Navbar from './components/Navbar';
// import ClientPage from './pages/Clientpage';
// import PostItems from './pages/postitem';
// import GetItems from './pages/getItems';
// import ForOTP from './pages/forotp';
const App = () => {
  return (
   <BrowserRouter>
   

   <Routes>


{/* uncomment all the comments  except this */}


   {/* <Route path='/login' element={<Login />}/>
  <Route path="/postitem" element={<PostItems/>}/>
  <Route path="/getall" element={<GetItems/>}/>
  <Route path="/forotp" element={<ForOTP/>}/>


    <Route path="/userpage" element ={<ClientPage/>}/>
 
 
 
    <Route path="/landingpage" element={<StartPage/>}/>
    <Route path="/" element ={<Register/>}/> */}




    {/* uncomment all the comments  except this */}

   </Routes>
   </BrowserRouter>
  )
}

export default App

