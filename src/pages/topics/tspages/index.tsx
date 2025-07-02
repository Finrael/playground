import React from 'react'
import TsTypesExample from './tsTypesExample'
import './styles.scss'
const functionToShow=(selected:number):React.ReactNode=>{
    switch (selected) {
      case 1:
        return <TsTypesExample />;
      default:
        return <></>;
    }
}

const TypescriptPagesIndex = ():React.ReactElement=>{
    const [currentState, setCurrentState] = React.useState<number>(0)
    const manageChange=(e:any)=>{
        setCurrentState(Number(e.target.value))
    }

    return(
        <div>
            <p>
                Please select a topic to show
            </p>
            <div>
                <select onChange={manageChange}>
                <option value={0} key={0} defaultChecked>Select a topic</option>
                <option value={1} key={1}>Types</option>
                </select>
            </div>
            <div>
                {functionToShow(currentState)}
            </div>
        </div>
    )
}
export default TypescriptPagesIndex