import React from 'react';
import Home from '../pages/Auth/Login';
import Register from '../pages/Auth/Login';
import Login from '../pages/Auth/Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import  "../styles/styles.css";
import NavBarComponent from '../components/includes/NavBarComponent';
function AuthRoute() {
  return (
    
    
        <div className="">
            <NavBarComponent />
                <Routes>
                    <Route path = "/" element={<Home/>}/>
                    <Route path = "/login" element={<Login/>}/>
                    <Route path = "/register" element={<Login/>}/>
                </Routes>
        </div>
      
    
  );
}

export default AuthRoute;
