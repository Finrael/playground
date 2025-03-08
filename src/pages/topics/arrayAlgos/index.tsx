import React, { ChangeEventHandler } from "react";
import Ex1 from './ex1'
import {guideObject as Guide, guideObject, guideUnit} from "./guideObject";

type option= { label: string, value: string }

const ArrayIndexPage = ():React.JSX.Element=>{
    // const [selectedEx, setSelectedEx]= React.useState([{text:'base', element: ()=><></>}])
    const [selectedEx, setSelectedEx]= React.useState(0)

    
    const handleSelected = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedEx(Number(e.target.value))
    }
    
    return(
        <div>
            <div>
                <p>Main array index page</p>
                <p>Select from the dropdown which algorithm you would like to see</p>
                <select onChange={handleSelected}>
                    <option>''</option>
                    {
                     Guide.data.map((ele:guideUnit,idx:number)=>{
                        return(
                            <option key={idx} value={idx}>{`Ex ${idx}: ${ele.text}` }</option>
                        )
                     })  
                    }

                    
                </select>
                <div>
             
                {Guide.data[selectedEx].element}
              
                </div>
            </div>
        </div>
    )
}

export default ArrayIndexPage;