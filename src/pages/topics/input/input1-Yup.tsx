import React, {useState, useEffect, ReactElement, FC, ReactNode} from 'react'
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage, FormikProps, FormikValues, FormikHelpers} from 'formik';
import classNames from 'classnames';



type Expense = {
    name: string, 
    amount:number,
    category: string
}

const yupSchema = Yup.object().shape({
    name: Yup.string().required("Name field is required"),
    amount: Yup.number().required("Ammount is required"),
    category: Yup.string().required("Category is required")
});

const initialValues:Expense ={
    name:'',
    amount:0,
    category:''
    
}


const Input1:FC =()=>{
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
    const handleSubmit = (values: FormikValues,
        { setSubmitting }: FormikHelpers<Expense>) => {
        setTimeout(() => {
         console.log('testr ',values);
         setSubmitting(false);
        }, 500);
       }
      
    useEffect(()=>{checkErrors()},[currentName, currentAmount, currentCategory])
    return(
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={yupSchema}
            onSubmit={handleSubmit}
            >
         {({ isSubmitting, handleSubmit }) => (
<Form onSubmit={handleSubmit}>
                <div className={classNames('yup-form-row')}>
                    <label htmlFor='name'>Name:</label>
                    <Field
                    name="name"
                    id='name'
                    
                    />
                    <ErrorMessage name="name" component={"span"} className='error'/>
                </div>
                <div className={classNames('yup-form-row')}>
                    <label htmlFor='amount'>amount:</label>
                    <Field
                    name="amount"
                    id='amount'
                    
                    />
                    <ErrorMessage name="amount" component={"span"} className='error'/>
                </div>
                <div className={classNames('yup-form-row')}>
                    <label htmlFor='category'>category:</label>
                    <Field
                    name="category"
                    id='category'
                    
                    />
                    <ErrorMessage name="category" component={"span"} className='error'/>
                </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
                    
         )}

{/* 
       
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
                </ul> */}
                </Formik>
        </div>
    )
}

export default Input1;