import React from 'react';
import './styles.scss'
import classNames from 'classnames';
const HomePage = (): React.JSX.Element=>{

    return(
        <div className={classNames('index-main')}>
            <header>
            Home Page
            </header>
            <div>
            <p>
                Playground is meant to be a simple repo for practicing any number of topics, currently the topics are:
            </p>
            <ul>
                <li>Typescript</li>
                <li><a href='/array'>Array Algorithms</a> </li>
            </ul>

            </div>
            
        </div>
    )
}

export default HomePage;