import React from 'react'
import AddressComponent from './adresssComponent';
import {TextComponentWithHover, TextComponent} from './higherExample'
import {HigherComponentWithHover} from './higherAdress'


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
            <AddressComponent name={'Jose'} lastName={'Martinez'} age={36}/>
            <TextComponentWithHover text="jose ovidio"/>
            <TextComponent text='martinez jasso' isHovered/>
            <div>
                <HigherComponentWithHover name='Jose' lastName='Martinez' age={36} />
            </div>
        </div>
    )
}
export default Higher;