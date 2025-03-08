import React, {useState, ReactElement, FC} from "react";

const arr1 = [3, 0, 2, 0, 4]
const ArrEx3 =(): ReactElement=>{
    const [result, setResult] = useState(0);

    const execute = (arr: number[])=>{
        let res = 0;

        //for every element of the array
        for(let i = 0 ; i<arr.length-1;i++){
            //find the maximum element on the left
            let left = arr[i];
            for(let j =0; j<i;j++){
                left = Math.max(left, arr[j]);
            }
                //find the maximum element on its right
                let right = arr[i];
                for (let j=i+1;j<arr.length;j++){
                    right = Math.max(right, arr[j]);
                }
                    //update the maximum water
                res+= Math.min(left,right)-arr[i]
                
            
        }
        setResult(res)
    }

 //optimal calculate method

 const maxWater = (arr:number[])=>{
    let n  = arr.length;

    // left[i] contains height of tallest bar to the left of the i'th bar including itself

    let left = new Array(n);

    //Right[i] contains height of the tallest bar to the right
    let right =  new Array(n);
    let res = 0;

    //fill left array

    left[0]= arr[0];
    for (let i =1; i<n;i++)
        left[i] = Math.max(left[i-1], arr[i]);
    //fill right side

    right [n-1] = arr[n-1];
    for (let i =n-2; i>=0; i--)
        right[i] = Math.max(right[i+1], arr[i])

    //calculate the acumulated water element by element

    for (let i  = 1; i<n-1;i++){
        let minOf2 =  Math.min(left[i-1], right[i+1])
        if(minOf2>arr[i]){
            res+=minOf2-arr[i];
        }
    }
    setResult(res)
 }

    return(
        <div>
        <div>
            <p>
            Trapping Rainwater Problem states that given an array of n non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it can trap after rain.
            </p>
            <button onClick={()=>{execute(arr1)}}>
                execute
            </button>
            <button onClick={()=>{maxWater(arr1)}}>
                execute optimal
            </button>
    <p>
        Result is :{result}
    </p>
        </div>
    </div>
    )
}

export default ArrEx3;
