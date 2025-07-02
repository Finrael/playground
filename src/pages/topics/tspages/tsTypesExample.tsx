import React, {useEffect, useState, FC} from "react";
import classNames from "classnames";
import './styles.scss';
// types for the array of questions
type questionsKeyTypes = {
    text:string,
    options:string[],
    answer:string,
} 

//types for the table to show types
type objectForBasicTypes={
    type:string,
    description:string,
    example:string,

}

//array of the  ts basic types for the table
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
    {
        type:'tuple',
        description:'Expresses an array with a fixed number of elements whose types are known but not need to be the same',
        example: `x= [10,"hello"]`
    }

]


// array of the questions about basic ts types
const questionKeyArr: questionsKeyTypes[] = [
    {
        text:"Use when you do not want a particular value to cause typechecking",
        options:["undefined", "any", "null", "symbol"],
        answer:"any"
    },

{
    text:" all numbers from floating value except for BigIngInt",
    options:["boolean", "string", "number", "symbol"],
    answer:"number"
},
{
    text:"Represents a deliverate non-value",
    options:["undefined", "string", "null", "symbol"],
    answer:"null"
},
{
    text:"All numbers from floating value except for BigIngInt",
    options:["boolean", "string", "number", "symbol"],
    answer:"number"
},
{
    text:"Represents textual data",
    options:["bigInt", "string", "number", "symbol"],
    answer:"string"
},

{
    text:"It is a special numeric type designec to represent integers larger than the maximum value for regular numbers",
    options:["bigInt", "string", "number", "symbol"],
    answer:"bigInt"
},
{
    text:"true or false values",
    options:["boolean", "tuple", "number", "symbol"],
    answer:"boolean"
},
{
    text:"Expresses an array with a fixed number of elements whose types are known but need not be the same",
    options:["boolean", "string", "tuple", "symbol"],
    answer:'tuple'
},

{
    text:"Represents unique and immutable values, often used as objects keys",
    options:["undefined", "any", "null", "symbol"],
    answer:"symbol"
},
{
    text:"Represents unitialized value",
    options:["undefined", "string", "bigInt", "zero"],
    answer:"undefined"
},

]

/**
 * 
 * @param arr array of the type objectForBasicTypes 
 * @returns a react Element with a table of the basic typescript types
 */
const showTypesFunction = (arr:objectForBasicTypes[]): React.ReactElement=>{
    return(
        <div className={classNames('mainTsPages')}>
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


const TsTypesQuestions = (questionToShow:questionsKeyTypes, idx:number,maxLength:number ):React.ReactElement=>{
    const [tsQuestionState, setTsQuestionState] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)
    const manageOption = (e: any)=>{
        setFlag(true)
        setTsQuestionState(e.target.value)
    }
    const checkAnswer = ()=>{  
        if(tsQuestionState==='' || flag===false){
            return<p></p>
        }  
    return    tsQuestionState === questionToShow.answer ? <p>Answer is correct!!</p> : <p>Incorrect answer please try again</p>
    }

    useEffect(()=>{setFlag(false)},[idx])
    return(
        <div>
            {`Question number ${idx+1}/${maxLength} Select the option that matches the description`}
            <div>
                {questionToShow.text}
            </div>
            <div>
                {questionToShow.options.map((ele, idx)=>{
                    return(
                        <>
                        <input type="radio" id={ele} name="optionSelection" value={ele} onChange={manageOption} checked={ tsQuestionState===ele} />
                        <label htmlFor={ele}>{ele}</label>
                        
                        </>
                    )
                })}
                {checkAnswer()}

            </div>

        </div>
    )
}

const TsTypesExample = ():React.ReactElement=>{
    const [showText, setShowText] = useState<boolean>(false)
    const [currentShown, setCurrentShow] = useState<number>(0)
    const manageIndex =(up:boolean)=>{
        
        
        if(up){
            if(currentShown+1<questionKeyArr.length)
            setCurrentShow(currentShown+1)
        else
        setCurrentShow(0)
        }else{
            if(currentShown-1>=0)
            setCurrentShow(currentShown-1)
            else
            setCurrentShow(questionKeyArr.length-1)
        }
    }
    return(
        <div>
            types example
            <button onClick={()=>{setShowText(!showText)}}>Show key</button>
            {showText && showTypesFunction(typesArray)}
            {TsTypesQuestions(questionKeyArr[currentShown],currentShown, questionKeyArr.length)}
            {}
            <button onClick={()=>{manageIndex(false)}}>-</button>
            <button onClick={()=>{manageIndex(true)}}>+</button>
        </div>
    )
}

export default TsTypesExample;