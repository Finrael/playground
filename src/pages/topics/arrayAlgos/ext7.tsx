import React from "react";

const exampleArr = [1, 2, 0, 3]
const Ext7 = ()=>{
    const [result, setResult] = React.useState<number>();


    const findEquilibrium=(arr: number[])=>{
        let result=-1;
        let leftSumm=0;
        let rightSum=0;

        for (let i = 0;i<arr.length;++i){
            leftSumm=0;
            for (let j =0;j<i;j++){
                leftSumm+=arr[j];

                //get right sum
                rightSum = 0;
                for(let j = i+1;j<arr.length;j++)
                    rightSum=+arr[j]


                if(leftSumm===rightSum){
                    setResult(i)
                }
            }
        }
        
    }
    const equilibriumPoint = (arr:number[])=>{
        let prefSum = 0;
        let total = arr.reduce((sum,ele)=> sum+ ele, 0);

        //iterate pivot over all the elemnts on the array

        for (let pivot = 0 ; pivot < arr.length; pivot ++){
            let suffSum = total - prefSum - arr[pivot];
            if(prefSum===suffSum){
                return pivot;

            }
            prefSum=+ arr[pivot]
        }

        return -1;

    }

    return(
        <div>
            <p>
                Given an array arr[] of size n, the task is to return an equilibrium index (if any) or -1 if no equilibrium index exist
                The equilibrium index of an array is the index such that the sum of all elements at lower indexes equals the summ of al elements at higher indexes
            </p>
            <p>
                Input: arr[] = [1, 2, 0, 3]
Output: 2
Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
            </p>
            <div>
                <button onClick={()=>{findEquilibrium(exampleArr)}}>
                    Execute
                </button>
                 
                Result:{result}
            </div>
        </div>
    )
}

export default Ext7