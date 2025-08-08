import React from 'react';
/* 
Given a text txt and a wildcard pattern pat, implement a wilcard pattern matching algorithm that finds if the wilcard is matched with the text.
The matching should cover the entire text. The wildcard pattern can include the characters ? and * wich denote 
? : matches any single character
*: matches any sequence of characters (including the empty sequence)

Input: txt = "abcde", pat = "a?c*" 
Output: true
Explanation: ? matches with b and * matches with "de".

Input: txt = "baaabab", pat = "a*ab" 
Output: false
Explanation: Because in string pattern character 'a' at first position, pattern and text can't be matched. 

Input: txt = "abc", pat = "*" 
Output: true
Explanation: * matches with whole text "abc".
*/
let txt = "abcde";
let pat = "a*de";
const Algo3  = ()=>{
    const [result,setResult] = React.useState<boolean>(false)
    //recursion style

    const wildcardFunction=(txt:string, pat:string,n:number, m:number):boolean=>{
        //empty pattern can be match with an empty text only
        if(m===0){
            return (n===0);
        }
        //empty text can match with a pattern consisting of * only
        if(n===0){
            for(let i =0; i<m;i++){
                if(pat[i] !=='*'){
                    return false
                }
                return true
            }
        }
        // either the character match or pattern has '?'
        //move to the next in both text and pattern
        if(txt[n-1]===pat[m-1] || pat[m-1] ==='?'){
            return wildcardFunction(txt, pat, n - 1, m - 1);
        }
        //if the current character of pattern is '*'
        //first case: it matches with zero character
        // second case: it matches with one or more characters
        if(pat[m-1]==='*'){
            return wildcardFunction(txt, pat, n, m - 1) || 
               wildcardFunction(txt, pat, n - 1, m);
        }
        return false
    }
    const executeFunction=(txt: string, pat: string)=>{
        let n = txt.length;
        let m = pat.length;
        let res= wildcardFunction(txt, pat, n, m)
        setResult(res)
    }
    //memoization

    const memoizedFunction = (txt:string, pat:string,n:number, m:number, memo:any):any=>{
        //empty pattern can match with an empty text only
        if(m===0){
            return n===0;
        };

        //if result for this subproblem has been already computed return it
        if(memo[n][m] !== -1){
            return memo[n][m];
        };

        //empty text can only match with a pettern consisting of * only
        if(n===0){
            for(let i=0; i<m;i++){
                if(pat[i]==='*'){
                    return memo[n][m]= false;
                }
                return memo[n][m]=true;
            }
        }
        //Either the characters match of pattern has ? move to the next in both text and pattern
        if (txt[n - 1] === pat[m - 1] || pat[m - 1] === '?'){
            return memo[n][m] = memoizedFunction(txt, pat, n-1, m-1, memo);
        }; 
        // if the current character of pattern is '*'
    // first case: It matches with zero character
    // second case: It matches with one or more characters
    if (pat[m-1]==='*'){
        return memo[n][m] = memoizedFunction(txt,pat,n,m-1, memo) ||
                            memoizedFunction(txt,pat, n-1,m,memo)
    };
    return memo[n][m] = false;
    }
    const executeFunction2=(txt:string,pat:string)=>{
        let n = txt.length;
        let m = pat.length;
        let memo = Array.from(Array(n+1), ()=>Array(m+1).fill(-1));
        let result = memoizedFunction(txt,pat, n,m,memo);
        setResult(result)
    }

    return(
        <div>
            <p>
              JavaScript program for wildcard pattern matching using recursion  
            </p>
            <input type='button' value={'execute'} onClick={()=>{executeFunction(txt,pat)}}/>
            <input type='button' value={'execute'} onClick={()=>{executeFunction2(txt,pat)}}/>
            <p>
                {result.toString()}
            </p>
        </div>
    )

}

export default Algo3;