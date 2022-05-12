import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AuthRoute from './navigator/AuthRoutes';
function App() {
  // const [isLoggedIn, setIsLoggedin] = useState(false)
  return (
    
    <Router>
        

        <AuthRoute/>
        
    </Router>
      
    
  );
}

export default App;
