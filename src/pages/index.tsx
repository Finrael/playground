import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import classNames from 'classnames';
import HomePage from './home';
import ArrayIndexPage from './topics/arrayAlgos';
import FormsIndex from './topics/forms/formsIndex';
import TSIndex from './topics/tspages/index'
import RecursionIndex from './topics/recursionAlgos';
import StringAlgosIndex from './topics/stringAlgos/index'
import InventoryIndex from './topics/inventory';
import InventoryHome from './topics/inventory/home';
import FormManagement from './topics/inventory/formManagement';
import InputForm from './topics/inventory/input'
import OutputForm from './topics/inventory/outItemForm'
import HigherIndex from './topics/higherFunctions/index'
import HigherExample1 from './topics/higherFunctions/higherExamplePage'
import HigherExample2 from './topics/higherFunctions/higherExampleJS'
import TODO from './topics/higherFunctions/toDo';
import Carousel from './topics/higherFunctions/carousel';

import './styles.scss'


  const IndexPage = ():React.ReactElement=>{
    return(
        <div className={classNames('index-main')}>
          <header className={classNames('index-main-header')}>
            Code Playground
          </header>
            <Routes>
                <Route  path='/' element={<HomePage/>}/>
                <Route path='/tspages' element={<TSIndex/>}/>
                <Route path='/array' element={<ArrayIndexPage/>}/>
                <Route path='/forms' element={<FormsIndex/>}/>
                <Route path='/recursion' element={<RecursionIndex/>}/>
                <Route path='/string' element={<StringAlgosIndex/>}/>
                <Route path='/inventory' element={<InventoryIndex/>}/>
                <Route path='/inventory/invInput' element={<InputForm/>}/>
                <Route path='/inventory/invOutput' element={<OutputForm/>}/>
                <Route path='/higher' element={<HigherIndex/>}/>
                <Route path='/higher/example1' element={<HigherExample1/>}/>
                <Route path='/higher/example2' element={<HigherExample2/>}/>
                <Route path='/higher/todo' element={<TODO/>}/>
                <Route path='/higher/carousel' element={<Carousel/>}/>
              
            </Routes>
        </div>
    )
  }
  

  export default IndexPage