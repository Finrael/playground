import React, {useState, useEffect, ReactElement, FC} from 'react'


type Expense = {
    name: string, 
    amount:number,
    category: string
}


const Input1 =():ReactElement=>{
    const [currentExpenses, setCurrentExpenses] = useState<Expense[]>([]);
    const [currentName, setCurrentName] = useState<string>('');
    const [currentAmount, setCurrentAmount] =  useState<number>(0);
    const [currentCategory, setCurrentCategory] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [amountError, setAmountError] = useState<boolean>(false);
    const [categoryError, setCategoryError] = useState<boolean>(false);

    const manageUpdates = (e:any):null =>{
        switch(e.target.name){
            case 'name': setCurrentName(e.target.value);
            break;
            case 'amount': setCurrentAmount(e.target.value);
            break;
            case 'category': setCurrentCategory(e.target.value);
            break;
            default: break;
                
        }
        return null;
    }

    const checkErrors =():null=>{
        if(currentName)setNameError(false)
            else setNameError(true)
        if(currentAmount)setAmountError(false)
            else setAmountError(true)
        if(currentCategory)setCategoryError(false)
            else setCategoryError(true)
        return null
    }

    const addExpense :FC<Expense> =({name, amount, category}):null=>{
        checkErrors();
        if(!name || !amount || !category){
            return null
        }
        let newExpense = {'name': name, 'amount': amount, 'category': category}
        setCurrentExpenses([...currentExpenses, newExpense])
        return null
    }
    useEffect(()=>{checkErrors()},[currentName, currentAmount, currentCategory])
    return(
        <div>
            <form>
                <div>
                <label htmlFor='name'>Name</label>
                <input type='text' key={'name'} name='name' onChange={manageUpdates}/>
                {nameError&& <label>The field name is required</label>}
                </div>
                <div>
                <label htmlFor='amount'>Amount</label>
                <input type='number' key={'amount'} name='amount' onChange={manageUpdates}/>
                {amountError&& <label>The field amount is required</label>}
                </div>
                <div>
                <label htmlFor='category'>Category</label>
                <input type='text' key={'category'} name='category' onChange={manageUpdates}/>
                {categoryError&& <label>The field category is required</label>}
                </div>
                
                <input type='button' name='Execute' value='add' onClick={()=>{addExpense({name:currentName, amount:currentAmount, category:currentCategory})}}/>
            </form>


       
                <ul>
                {currentExpenses && currentExpenses.length>0 && currentExpenses.map((item,idx)=>{
                    return(
                        <li key={idx}>
                            <span>
                                {idx+1}
                            </span>
                            <span>
                            {`Name: ${item.name}`}
                            </span>
                            <span>
                            {`Amount: ${item.amount}`}
                            </span>
                            <span>
                            {`Category: ${item.category}`}
                            </span>
                        </li>
                    )
                })}
                </ul>
  
        </div>
    )
}

export default Input1;