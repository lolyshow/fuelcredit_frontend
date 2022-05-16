import React,{useState} from "react";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useNavigate } from 'react-router-dom';
import Helper from "../../helpers/Helper";
import {toast} from 'react-toastify';
import NavBarComponent from "../../components/includes/NavBarComponent";

function Register(){
    const navigate = useNavigate();
    const notify = () => {
        toast("Default Notification !");
    }
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [processing, setProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = React.useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("")
        if(email && password){
            let payload = {
                email,
                name,
                password
            }
            try {
                setProcessing(true);
                let path = "api/register";
                await Helper.Request(path,"post",payload)
                .then((result) =>{ 
                  let { message, error, response } = result;
                //   console.log("myResultIs",response)
                  notify();
                  setProcessing(false);
                  if (!error) {
                    setProcessing(false);
                    if(response?.status == 200){
                        navigate('/home',{state:{email}});
                    }else{
                        setErrorMessage(response.message)
                    }
                    
                  } else {
                      console.log("error")
                      setErrorMessage("Technical error! please try again later")
                    setProcessing(false);
                  }
          
                });
                
            }catch (error) {
                setErrorMessage("Technical error! please try again later")
                setProcessing(false);
            }
        }else{
            setErrorMessage("Technical error! please try again later")
            // console.log("falseFalse")
        }
        
        
    };

    return (

        <>
        <NavBarComponent/>
        <div className = "container">
        
            <div className = "row">
                <div className = "col-md-6 createCarcontainer">
                    <div class="card border-0">
                        <h5 class="card-header bg-primary mt-5 text-white">User Signup</h5>
                        <div class="card-body shadow p-3 mb-5 bg-white rounded">
                            <div >
                            {processing ? <LoadingSpinner />:null}
                            {errorMessage && <div className="error"> {errorMessage} </div>}
                                <InputComponent
                                    type="text"
                                    value={name}
                                    placeholder="Phillip Handwritting"
                                    label="Enter Name"
                                    name="name"
                                    onChangeCarName={(e)=>setName(e.target.value)}
                                />

                                <InputComponent
                                    type="email"
                                    value={email}
                                    placeholder="test@gmail.com"
                                    label="Enter Emaili"
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
        </>
    )
}

export default Register;