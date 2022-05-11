import React from 'react';
// import Navbar from '../components/includes/Navbar';
import Home from '../pages/Auth/Login';
import Register from '../pages/Auth/Login';
import Login from '../pages/Auth/Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
// import  "../styles";
function AuthRoute() {
  return (
    
    
        <div className="">
            {/* <Navbar/> */}
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/register" element={<Login/>}/>
            </Routes>
        </div>
      
    
  );
}

export default AuthRoute;
