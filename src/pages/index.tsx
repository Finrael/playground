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

import './styles.scss'
  

  const IndexPage = ():React.ReactElement=>{
    return(
        <div className={classNames('index-main')}>
            <Routes>
                <Route  path='/' element={<HomePage/>}/>
                <Route path='/array' element={<ArrayIndexPage/>}/>
                <Route path='/forms' element={<FormsIndex/>}/>
            </Routes>
        </div>
    )
  }
  

  export default IndexPage