import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AuthRoute from './navigator/AuthRoutes';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
function App() {
  // const [isLoggedIn, setIsLoggedin] = useState(false)
  return (
    
    <Router>
        

        <AuthRoute/>
        <ToastContainer/>
    </Router>
      
    
  );
}

export default App;
