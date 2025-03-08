import React from 'react'

const arr:number[]=[1, 2, 4, 6, 3, 7, 8] 
const ArrEx2: React.FC = (): React.ReactElement=>{
    const [result, setResult] = React.useState(0);



    const execute =(arr : number[]):void=>{
        arr.sort();
        let initial;
        let final;
        let missing = 0;

        initial = arr[0];
        final  = arr[0]+arr.length

        for (let i  = 0; i<arr.length; ++i){
            if(arr[i]  !==initial+i ){
                missing = initial+i;
                break;
            }
        }
        setResult(missing)

    }

    //optimal solution

    const missingNumber=(arr:number[]):number=>{
        const n = arr.length + 1;

        //create hash array of size n+1
        const hasArr = new Array (n+1).fill(0);

        //store frequencies of elements
        for(let  i = 0 ; i< arr.length;++i){
            hasArr[arr[i]]++;

        }

        //fin the missing number
        for(let i=1; 1<=n;i++){
            if(hasArr[i]=== 0 ){
                return i;
            }
        }
        return -1;

    }   


    return(
        <div>
            <div>
                <p>
                Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.
                </p>
                <button onClick={()=>{execute(arr)}}>
                    execute
                </button>
        <p>
            Result is :{result}
        </p>
            </div>
        </div>
    )
}


export default ArrEx2;
