import React from 'react';

/*
Edit distance

Given two strings s1 and s2 and belo operations that can be performet on s1. The task is to find the minimum number of edits(operations) to convert s1 into s2
*insert: insert any character before or after any index of s1
*Remove: Remove a character of s1
*Replace: Replace a character at any index of s1 with some ofhter character

Input: s1 = "geek", s2 = "gesek"
Output: 1
Explanation: We can convert s1 into s2 by inserting an 's' between two consecutive 'e' in s1.

Input: s1 = "gfg", s2 = "gfg"
Output: 0
Explanation: Both strings are same.

Input: s1 = "abcd", s2 = "bcfe"
Output: 3
Explanation: We can convert s1 into s2 by removing 'a', replacing 'd' with 'f' and inserting 'e' at the end. 
*/
const s1 = "abcd";
const s2 = "bcfe";

const Algo4 = ()=>{
    const [result, setResult] = React.useState(0)
    const editDistance =(s1:string, s2:string, m:number, n:number):any=>{
        
        //if first string is empty, the only optin is to insert all characters of second string into first
        if(m ===0)return n;
        //if second string is empty, the only option is to remove all characters of the first string
        if(n===0)return m;
        // if last character of two strings are same, nothing much to do. Get the count for remaining strings.
        if(s1[m-1]===s2[n-1]) return editDistance(s1,s2,m-1,n-1)


        // if last characters are not the same, consider all three operations on last character of first string
        //recursively compute minimum cost for all three operations and take minimum of three values
    
        return 1+ Math.min(editDistance(s1, s2, m, n-1), editDistance(s1,s2,m-1,n), editDistance(s1, s2,m-1,n-1))

    }
    const execute = ()=>{
    
        let res = editDistance(s1,s2,s1.length,s2.length)
        console.log('here', res)
        setResult(res)

    }
    return(
        <div>
            <p>
                text distance algo
            </p>
            <input type="button" value={"execute"} onClick={execute}/>
            <p>{result.toString()}</p>

        </div>
    )
}
export default Algo4;