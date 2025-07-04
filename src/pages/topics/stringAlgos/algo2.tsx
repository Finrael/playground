import React from "react";

const inputString = "forgeeksskeegfor";
// const inputString = "aba"
const Algo2 = ()=>{
    const [result,setResult]= React.useState<string>('')

    const checkPalindrome = (str:string): boolean=>{
        let inverted = str.split('').reverse().join('')
       
        console.log('str', str)
        console.log('reversed', inverted)
         console.log('----------------')
        return str === inverted ? true : false;
        // return false
    }
    const executeFunction = (str:string)=>{
        // let acc :string[]= []
        let acc:string=''
        let result:string[]=[]
        for(let i =0; i<str.length;++i){
            let currentI = str[i];
            // acc.push(currentI)
            for(let j = 0+i;j<str.length;++j ){
                let currentJ = str[j];
                // acc.push(currentJ)
                acc=acc+currentJ
            }
            console.log('push', acc.toString())
            if(checkPalindrome(acc)){
                result.push(acc);
            }
            
            
            acc = '';
        }
        console.log('result', result)
    }

    // Function to find the longest palindrome substring
function longestPalindrome(s:string) {
    const n = s.length;
    if (n === 0) return "";

    let start = 0, maxLen = 1;

    // Traverse the input string
    for (let i = 0; i < n; i++) {

        // THIS RUNS TWO TIMES 
        // for both odd and even length
        // palindromes. j = 0 means odd
        // and j = 1 means even length
        for (let j = 0; j <= 1; j++) {
            let low = i;
            let high = i + j; 
 
            // Expand substring while it is a palindrome
            // and in bounds
            while (low >= 0 && high < n && s[low] === s[high]) {
                const currLen = high - low + 1;
                if (currLen > maxLen) {
                    start = low;
                    maxLen = currLen;
                }
                low--;
                high++;
            }
        }
    }
    setResult(s.substring(start, start + maxLen))
    return s.substring(start, start + maxLen);

}
    return(
        <div>
            <p>
                Longest palindromic substring
            </p>
            <p>
                String :"forgeeksskeegfor" 
            </p>
            <p>
                Result is: {result}
            </p>
            <button onClick={()=>{longestPalindrome(inputString)}}>
                Execute
            </button>
        </div>
    )
}

export default Algo2