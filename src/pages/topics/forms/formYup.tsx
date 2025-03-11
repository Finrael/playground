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


const FormYup:FC =()=>{
    const [currentExpenses, setCurrentExpenses] = useState<Expense[]>([]);

    const handleSubmit = (values: FormikValues,
        { setSubmitting }: FormikHelpers<Expense>) => {
        setTimeout(() => {
         setSubmitting(false);
        }, 500);
       }
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


                </Formik>
        </div>
    )
}

export default FormYup;

export const exportCode = `import React, {useState, useEffect, ReactElement, FC, ReactNode} from 'react'
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


const FormYup:FC =()=>{
    const [currentExpenses, setCurrentExpenses] = useState<Expense[]>([]);

    const handleSubmit = (values: FormikValues,
        { setSubmitting }: FormikHelpers<Expense>) => {
        setTimeout(() => {
         setSubmitting(false);
        }, 500);
       }
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


                </Formik>
        </div>
    )
}`