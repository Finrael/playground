import React, {ReactElement, FC} from "react";

const arr =[2, 3, -8, 7, -1, 2, 3]
const arr2 = [5, 4, 1, 7, 8]
export const Exercise: FC = (): ReactElement => { 
    const [result, setResult] = React.useState(0);

    const handleFunction=():void=>{
        let max = 0;
        

        for (let i = 0 ; i<=arr.length; ++i){  
            let current=0; 
            for(let j =i; j< arr.length;++j){
                
                current= current+arr[j];
                max = Math.max(max, current);
            }
        }
    setResult(max)
    }
    const kadaneAlgo = (arr: number[]):number=>{
        let res = arr[0];
        let maxEnding = arr[0];
        for(let i =1; i<arr.length;++i){
            //finding the maximum sum ending at index i by either extending
            // the maximum sum subarray ending at index i-1 or by
            // starting a new subarray from index i 
            maxEnding =  Math.max(maxEnding+arr[i], arr[i]);

            //update res if maximum subarray sum ending at index i > res

            res = Math.max(res, maxEnding);
        }
        setResult(res)
        return res;
    }
    return(
        <div>
            <div>
            <p>
            "Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum."
            </p>
            <p>
          array:  2, 3, -8, 7, -1, 2, 3
            </p>
            </div>
           <p>
            result: {result}</p> 
            <input type="button" value={"execute function"} onClick={handleFunction}/>
            <input type="button" value={"execute function optimal"} onClick={()=>{kadaneAlgo(arr)}}/>
        </div>
    )
  };



export default Exercise;