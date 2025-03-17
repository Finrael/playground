import React from "react";
import classNames from "classnames";

type objectForBasicTypes={
    type:string,
    description:string,
    example:string,

}

// {
//     type:'',
//     description:'',
//     example:''
// }
const typesArray:objectForBasicTypes[] =[
    {
        type:'boolean',
        description:'True or False values',
        example:'True/False'
    },
    {
        type:'number',
        description:'All numbers from floating value exactp for BigIntegers',
        example:'1234.5'
    },
    {
        type:'bigint',
        description:'Is a special numeric type designed to represent integers larger than the maximum value of regular number',
        example:'100n'
    },
    {
        type:'string',
        description:'Represents textual data',
        example:'text'
    },
    {
        type:'null',
        description:'Represents a deliverate non-value',
        example:'null'
    },
    {
        type:'undefined',
        description:'Represents uninitialized value',
        example:'undefined'
    },
    {
        type:'symbol',
        description:'Represents unique and immutable values, often used as object keys',
        example:'let sym2 = Symbol("key")'
    },
    {
        type:'any',
        description:'Use when you do not want a particular value to cause typechecking',
        example:'let obj:any={x=1}'
    },

]

const showTypesFunction = (arr:objectForBasicTypes[])=>{
    return(
        <div>
            <table>
            <tr className={classNames('ts-types-table')}>
                            <th>Types:</th>
                            <th>Description:</th>
                            <th>Example:</th>
                        </tr>
                {arr.map((ele,idx)=>{
                    return(
                        <tr className={classNames('ts-types-table')}>
                            <th>{ele.type}</th>
                            <th>{ele.description}</th>
                            <th>{ele.example}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
const TsTypesExample = ():React.ReactElement=>{
    const [showText, setShowText] = React.useState<boolean>(true)
    return(
        <div>
            types example
            {showText && showTypesFunction(typesArray)}
        </div>
    )
}

export default TsTypesExample;