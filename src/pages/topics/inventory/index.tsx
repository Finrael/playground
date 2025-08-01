import React from "react";
import InventoryHome from "./home";
import OutputForm from "./outItemForm";
import Logo from './images/logo1.jpeg'
import NavPanel from './inventoryNavPanel';
import './styles.scss';
const InventoryIndex = ()=>{
    const [input, setInput]=React.useState<boolean>(true)
    return(
        <div >
          <div>
            <div className="inventoryIndexLogoSection"><img src={Logo} alt="logo"/></div>
          </div>

          <div className="inventoryIndexExterior">
          <div className="inventoryIndexNavPanel">
            <NavPanel/>
          </div>
          <div className="inventoryIndexMain">
            Welcome to inventory
          </div>
          </div>

        </div>
    )
}

export default InventoryIndex;