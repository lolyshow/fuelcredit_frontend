import React from "react";
import {useLocation} from 'react-router-dom';
const Home = ()=>{
    const location = useLocation();
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-md-8 createCarcontainer">
                    <div class="card-home">
                        
                        <div class="card-body">
                            <h3 class="card-text">Welcome: {location.state.email}!!!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;