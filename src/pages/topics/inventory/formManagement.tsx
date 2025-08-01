import React from "react";
import InputForm from './input';
import OutputForm from './outItemForm';

const FormManagement = ()=>{
      const [showInput, setShowInput] = React.useState<boolean>(true) 
    return(
               <>
        <p>
            Welcome to inventyory management
            <button onClick={()=>{setShowInput(!showInput)}}>To input</button>
        </p>
        
        {showInput ? <InputForm/> :<OutputForm/>}
        </> 
    )
}

export default FormManagement