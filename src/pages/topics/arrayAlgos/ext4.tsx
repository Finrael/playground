import React from 'react';
// Find the largest run of at most two distinct numbers
/**
* Example 1:
*  Input 1212223311212223
*  Output 1121222
*
* Example 2:
*  Input 111
*  Output 111
*/

const Ext4 =():React.ReactElement=>{

    const [result, setResult] = React.useState<string>('')
    
    
    const solve=(str:string)=>{
    let resultArr:any = []
        let result ='';
        let temp = '';
        let char1:string ='';
        let char2:string ='';
        let auxArr = str.split('');
        for(let i =0; i<auxArr.length;++i){
            let current = auxArr[i]
             resultArr.push(temp);
            if(current ===char1){
                temp = temp+current
                continue;
            }
            if(current ===char2){
                temp = temp+current
                continue;
            }
            if (char1===''){
                char1 = current
                temp  = temp+current
                continue;
            }
            if(char2===''){
                char2 = current;
                temp = temp+ current
                continue
            }
            
            if(char1!==current && char2!==current){
                temp = '';
                temp =current;
                char1=current;
                char2='';

            }

            if(temp.length>=result.length){
                result=temp;
            }else{ console.log('t', temp.length , 'r', result.length)}
        }
        resultArr.sort((a:string,b:string)=>b.length-a.length)
        setResult(resultArr[0]);
    }


    return(
        <div>
            <p>
            Find the largest run of at most two distinct numbers
            </p>
            <p>Input: 1212223311212223 </p>
            <p>Result: {result} </p>
            <button onClick={()=>{solve('1212223311212223')}}>Execute</button>
        </div>
    )
}
export default Ext4