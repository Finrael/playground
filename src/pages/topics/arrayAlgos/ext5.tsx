import React from "react";

const arr1=[16,17,4,3,5,2]

const Ext5 = ()=>{
    const [ result, setResult]= React.useState<number[]>([]);

    const execute=(arr: number[])=>{
        
let res:number[]=[];
        for(let i =0;i<arr.length;++i){
            let current = arr[i];
            for(let j =0+i;j<arr.length;++j){

                if(current<arr[j]){
                    break;
                }
                if(j===arr.length-1){
                    res.push(current)
                }
            }
        }
        setResult(res)
    }
    const executeOptimized=(arr: number[])=>{
        const result = [];
        const n = arr.length;

        //start with rightmost element
        let maxRight = arr[n-1];

        //Rightmost element is always a leader;

        result.push(maxRight);

        //Traverse the array from right to left

        for (let i = n-2; i>=0;i--){
            if(arr[i]>= maxRight){
                maxRight=arr[i];
                result.push(maxRight);
            }
        }
        //Reverse the result array to maintain original order

        result.reverse();
        setResult(result)
    }
    return(
        <div>
            <p>
           Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

            </p>
 <p>Note: The rightmost element is always a leader.</p>
<div>
<button onClick={()=>{execute(arr1)}}>
    execute
</button>
<p>
    Result is : {result.toString()}
</p>

</div>
<div>
<button onClick={()=>{executeOptimized(arr1)}}>
    execute optimized
</button>
<p>
    Result is : {result.toString()}
</p>

</div>
        </div>
    )
}
export default Ext5;