import React, {useState, useEffect} from 'react';
import InputForm from './input';
import OutputForm from './outItemForm';
import NavPanel from './inventoryNavPanel';

const InventoryHome = ()=>{
    const [showInput, setShowInput] = useState<boolean>(true) 
    return(
        <>
        <p>
            Welcome to inventyory management
            {/* <button onClick={()=>{setShowInput(!showInput)}}>To input</button> */}
        </p>
        <NavPanel/>
        {/* {showInput ? <InputForm/> :<OutputForm/>} */}
        </>
    )
}
export default InventoryHome