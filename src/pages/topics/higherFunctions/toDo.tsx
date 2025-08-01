import React from 'react';


const TODO:React.FC= ()=>{
    const [list, setList]= React.useState<string[]>([]);
    const [currentInput, setCurrentInput] = React.useState<string>('');

    const manageInput=(e:any)=>{
        setCurrentInput(e.target.value)
    }
    const addItem =()=>{
        const aux = list;
        aux.push(currentInput);
        setCurrentInput('')
        setList(aux)
        
    }
    return(
        <div>
            <title>To Do List</title>
            <div>
                <label>New Task</label>
                <input type='text'id='input1' onChange={manageInput} value={currentInput}/>
                <input type="button" id="button1" value="Accept" onClick={addItem}/>
            </div>
            <div>
                <ul id="list">
                    {list.map((item, idx)=>{return <li key={idx}>{item}</li> })}
                </ul>
            </div>
            
        </div>
    )
}

export default TODO;