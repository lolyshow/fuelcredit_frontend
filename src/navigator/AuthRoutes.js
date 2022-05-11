import React from 'react';
import Home from '../pages/Home';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import  "../styles/styles.css";
import NavBarComponent from '../components/includes/NavBarComponent';
function AuthRoute() {
  return (
    
    
        <div className="">
                <Routes>
                
                    {/* <Route path = "/" element={<Home/>}/> */}
                    <Route path = "/login" element={<Login/>}/>
                    <Route path = "/register" element={<Register/>}/>
                    <Route path = "/home" element={<Home/>}/>
                </Routes>
        </div>
      
    
  );
}

export default AuthRoute;
