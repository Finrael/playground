import React from "react";
import InventoryHome from "./home";
import OutputForm from "./outItemForm";
const InventoryIndex = ()=>{
    const [input, setInput]=React.useState<boolean>(true)
    return(
        <div>
          <InventoryHome/>
          
        </div>
    )
}

export default InventoryIndex;