import React,{useState} from "react";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
// import Helper from "../helpers/Helper";


function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [processing, setProcessing] = useState(false)
    let handleSubmit = async (e) => {
        e.preventDefault();
        if(email && password){
            
            // try {

            //     setProcessing(true);
            //     let path = "api/login";
            //     await Helper.Request(path,"post",formData)
            //     .then((result) =>{ 
            //       let { message, error, response } = result;
            //       setProcessing(false);
            //       if (!error) {
            //         console.log("loaded");
            //         setProcessing(false);
                    
            //       } else {
            //         setProcessing(false);
            //         // Alert.alert("Shop", message);
            //       }
          
            //     });
                
            // }catch (error) {
            //     setProcessing(false);
            // }
        }else{
            console.log("falseFalse")
        }
        
        
    };

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-md-6 createCarcontainer">
                    <div class="card border-0">
                        <h5 class="card-header bg-primary mt-5 text-white">User Login</h5>
                        <div class="card-body shadow p-3 mb-5 bg-white rounded">
                            <div >

                                <InputComponent
                                    type="email"
                                    value={email}
                                    placeholder="test@gmail.com"
                                    label="Enter Email"
                                    name="name"
                                    onChangeCarName={(e)=>setEmail(e.target.value)}
                                />


                                <InputComponent
                                    type="password"
                                    value={password}
                                    placeholder={"*******"}
                                    label={"Password"}
                                    name={"password"}
                                    onChangeCarName={(e)=>setPassword(e.target.value)}
                                />

                                <ButtonComponent handleClick={handleSubmit}/>
                            </div>
                            {/* <a href="#" class="btn btn-primary mt-2">Add Car</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;