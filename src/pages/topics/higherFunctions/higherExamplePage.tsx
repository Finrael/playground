import React from 'react'
import AddressComponent from './adresssComponent';
import {TextComponentWithHover, TextComponent} from './higherExample'


interface AddressBook{
    name: string,
    lastName:string,
    age:number
}
const Higher =()=>{
    const GenerateFunction: React.FC<AddressBook>= ({name, lastName, age})=>{
        return(
            <AddressComponent name={name} lastName={lastName} age={age}/>
        )
    }
    return(
        <div>
            higher
            {/* {GenerateFunction({name:'Jose',lastName:"Martinez", age:36})} */}
            <AddressComponent name={'Jose'} lastName={'Martinez'} age={36}/>
            <TextComponentWithHover text="jose ovidio"/>
            <TextComponent text='martinez jasso' isHovered/>
        </div>
    )
}
export default Higher;