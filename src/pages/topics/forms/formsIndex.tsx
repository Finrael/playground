import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FormBase, {exportCode as baseCode} from './formBase'
import FormYup, {exportCode as YupCode} from './formYup'






const functionToShow=(selected:number):React.ReactNode=>{
    switch (selected) {
      case 1:
        return <FormBase />;
      case 2:
        return <FormYup />;
      default:
        return <></>;
    }
}
const displayFunctionCode = (selected:number):React.ReactNode=>{
    switch (selected) {
        case 1:
          return           <SyntaxHighlighter language="javascript" style={docco}>
      {baseCode}
    </SyntaxHighlighter>;
        //   FormBase.toString();
        case 2:
            return           <SyntaxHighlighter language="javascript" style={docco}>
            {YupCode}
          </SyntaxHighlighter>;
        default:
          return '';
      }
}

const FormsIndex=():React.ReactElement=>{

    const [currentTopic, setCurrentTopic]= React.useState<number>(0)
    const [displayCode, setDisplayCode]= React.useState<boolean>(false);
    const manageSelect=(e:any)=>{
        setCurrentTopic(Number(e.target.value))
    }
    
    return(
        <div>
            <div>
                <p>Select the example to show:</p>
                <div>
                    <select key="selectForm" onChange={manageSelect}>
                        <option value='0' key={0} defaultChecked>Select a form</option>
                        <option value='1' key={1}>Form-Base</option>
                        <option value='2' key={2}>Form-Yup</option>
                    </select>
                </div>
                {functionToShow(currentTopic)}
                <div>
                    <button onClick={()=>{setDisplayCode(!displayCode)}}>Show Code</button>
                </div>
                {displayCode && displayFunctionCode(currentTopic)}
            </div>
        </div>
    )
}

export default FormsIndex