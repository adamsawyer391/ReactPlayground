import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function FirstHooksHome() {
    return (
        <div className="App">

            <ul className="home-ul">

                <li className="home-li">
                    <Link to="/first-hooks-examples/using-context">
                        Using Context
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/counter">
                        Basic Mathematical Operations
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/input">
                        Testing Inputs
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/memo">
                        Using Memo
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/reducer">
                        Using Reducers
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/use-effect">
                        Use Effect
                    </Link>
                </li>

                <li className="home-li">
                    <Link to="/first-hooks-examples/use-ref">
                        Use Ref
                    </Link>
                </li>

            </ul>
            
        </div>
    )
}

export default FirstHooksHome
