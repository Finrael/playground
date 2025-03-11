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
                <li><a href='/forms'>Forms</a></li>
                <li><a href='/array'>Array Algorithms</a> </li>
            </ul>

            </div>
            
        </div>
    )
}

export default HomePage;