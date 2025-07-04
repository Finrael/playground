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
            </Routes>
        </div>
    )
  }
  

  export default IndexPage