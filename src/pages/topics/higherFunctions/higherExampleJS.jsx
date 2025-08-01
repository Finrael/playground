import React from 'react'
import AddressComponent from './jsAdressComponent';



const Higher =()=>{
    const GenerateFunction= ({name, lastName, age})=>{
        return(
            <AddressComponent name={name} lastName={lastName} age={age}/>
        )
    }
    return(
        <div>
            higher
            {GenerateFunction({name:'Jose',lastName:"Martinez", age:36})}
            {/* <AddressComponent name={'Jose'} lastName={'Martinez'} age={36}/> */}
        </div>
    )
}
export default Higher;