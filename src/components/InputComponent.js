import React from "react";

const InputComponent=({name,onChangeCarName,value,label,type="text",placeholder,id="formGroupExampleInput"})=>{
    
    return(
        <div class="form-group">
            {label && <label for="formGroupExampleInput">{label}</label>}
            <input 
            type={type}
            className="form-control"
            value={value}
            name={name}
            onChange={onChangeCarName} 
            id={id} 
            placeholder={placeholder}/>
        </div>
    )
}
export default InputComponent;