import React from 'react';
import './styles.scss'
import classNames from 'classnames';
const HomePage = (): React.JSX.Element=>{

    return(
        <div className={classNames('index-main')}>
            <header>
            Welcome to Playground a learning site for developers and people interested in picking up coding
            </header>
            <div>
            <p>
                Select your learning route
            </p>
            <ul>
                <li><a href='/tspages'>Typescript</a></li>
                <li><a href='/forms'>Forms</a></li>
                <li><a href='/array'>Array Algorithms</a> </li>
                <li><a href='/recursion'>Recursion</a> </li>
                <li><a href='/string'>String</a> </li>
                <li><a href='/inventory'>Inventory</a> </li>
                <li><a href='/higher'>Higher Components</a> </li>
            </ul>

            </div>
            
        </div>
    )
}

export default HomePage;