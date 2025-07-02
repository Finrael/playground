import React from "react";

const arr1 = [-2,6,-3,-10,0,2];

const Ext6 =()=>{
    const [result, setResult] =  React.useState(0)

    const execute = (arr:number[])=>{
        let ress : number[]= [0];
        
        for(let i = 0; i<arr.length;++i){
            let mul = 1;
            for(let j = i;j<arr.length;++j){
                mul*= arr[j]
                //update result to keep track of the maximum product
                if(mul > ress[0]){
                    ress = [mul];
                }
            }
        }
        console.log('the result is',ress)
        setResult(ress[0])
    }
    // minimum and maximum product ending at every index
    const max =( a:number,b:number,c:number)=>{
        return a > b ? (a > c ? a : c) : (b > c ? b : c);
    }
    const min = (a:number,b:number, c:number)=>{
        return a < b ? (a < c ? a : c) : (b < c ? b : c)
    }

    // function to find the product of max product subarray optimized
    const maxProduct= (arr:number[])=>{

        // initialize the maximum and minimum product endings at current index

        let currMax = arr[0];
        let currMin = arr[0];

        // initialize the overall maximum product
        let maxProd = arr[0];
        // iterate through the array starting from the second element

        for( let i = 1; i< arr.length;i++){

            //calculate potantial maxium product at this index
            const temp = max(arr[i] * currMax, arr[i]* currMin, arr[i]);

            // update to the minimum product ending at the current index
            currMin =    min(arr[i] * currMax, arr[i]* currMin, arr[i]);

            //update the maximum product ending at the current index
            currMax = temp;

            //update the overall maximum product
            maxProd = max(maxProd, maxProd, currMax)
        }
        console.log('optimized result', maxProd)
        setResult(maxProd);
    }



    return(
        <div>
            <p>
                Given an integer array, the task is to find the maximum product of any subarray.
            </p>
            <div>
                <button onClick={()=>{execute(arr1)}}>
                    Execute
                </button>
                <button onClick={()=>{maxProduct(arr1)}}>
                    Execute optimized
                </button>

                <p>result:{result}</p>
            </div>
        </div>
    )
}

export default Ext6