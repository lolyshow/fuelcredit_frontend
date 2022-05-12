import React from 'react';
import Home from '../pages/Home';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import {Route, Routes} from "react-router-dom";
import  "../styles/styles.css";
function AuthRoute() {
  return (
    
    
        <div className="">
                <Routes>
                
                    <Route path = "/login" element={<Login/>}/>
                    <Route path = "/register" element={<Register/>}/>
                    <Route path = "/home" element={<Home/>}/>
                </Routes>
        </div>
      
    
  );
}

export default AuthRoute;
