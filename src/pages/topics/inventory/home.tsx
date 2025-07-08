import React, {useState, useEffect} from 'react';
import InputForm from './input';
import OutputForm from './outItemForm';

const InventoryHome = ()=>{
    const [showInput, setShowInput] = useState<boolean>(true) 
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
export default InventoryHome