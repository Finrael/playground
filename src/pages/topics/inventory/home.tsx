import React, {useState, useEffect} from 'react';
import InputForm from './input';

const InventoryHome = ()=>{
    const [showInput, setShowInput] = useState<boolean>(true) 
    return(
        <>
        <p>
            Welcome to inventyory management
            <button onClick={()=>{setShowInput(!showInput)}}>To input</button>
        </p>
        {showInput ? <InputForm/> : <></>}
        </>
    )
}
export default InventoryHome