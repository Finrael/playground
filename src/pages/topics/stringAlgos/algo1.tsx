import React from 'react'

// reverse all words in a sentence

const sentenceToReverse = "This is the sentence"
// expected result "siht si eth ecnetnes"
const Ext1 = ()=>{
    const [result, setResult] = React.useState<string>();

    const execute = (str:string)=>{
        let temp = str.split(' ');

        let hold ='' 
        temp.forEach((subString=>{ 
            
            hold = hold+ subString.split('').reverse().join('') + ' '} 
      ))
      console.log('hold', hold)
      setResult(hold)
    }
    return(
        <div>
            <p>
                reverse all words in a sentence  "This is the sentence"
            </p>
            <button onClick={()=>{execute(sentenceToReverse)}}>
                Execute
                3.
            </button>
        Result: {result}
        </div>
    )
}

export default Ext1