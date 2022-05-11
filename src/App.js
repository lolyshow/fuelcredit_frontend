import React,{useState} from 'react';
// import Navbar from './components/includes/Navbar';
// import Home from './pages/Auth/Login';
// import Register from './pages/Auth/Login';
// import Login from './pages/Auth/Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
// import  "./styles/styles.css";
import AuthRoute from './navigator/AuthRoutes';
function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false)
  return (
    
    <Router>
        {/* {!isLoggedIn?
          <AuthRoute/> */}
        {/* : */}

        <AuthRoute/>
        {/* } */}
    </Router>
      
    
  );
}

export default App;
