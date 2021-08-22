import React from 'react'
import Introduction from './components/Introduction'
import './SecondHooks.css'
import { Link } from 'react-router-dom'
import UseStateHook from './examples/explain/UseStateHook'
import WhyFetch from './fetch/WhyFetch'

function SecondHooks() {
    return (
        <div className="second-hooks-page-main-container">

            <Introduction />
            <br /><br />

            <h1 className="second-hooks-page-main-container-h1">
                useState(): An Introduction
            </h1>
            <div className="divider-line">

            </div>
            <UseStateHook />

            <h1>
                UseState -- With Counters
            </h1>
            
            <h3 className="sh-h3">
                Sample App:
            </h3>
            <Link to="/second-hooks-examples/useState">
                    Using State with Counters
            </Link>

            <br /><br />
            <h1>
                UseState -- Email and Password
            </h1>
            <h3 className="sh-h3">
                Sample App:
            </h3>
            <Link to="/second-hooks-examples/useStateEmailAndPassword">
                    Using State Email and Password
            </Link>

            <br /><br /><br /><br />
            <h1 className="second-hooks-page-main-container-h1">
                useFetch(): An Alternative to useEffect and useState
            </h1>
            <div className="divider-line">

            </div>
            <WhyFetch />
            <br />
            <h1>
                UseFetch -- Getting Data from Numbers API
            </h1>
            <h3 className="sh-h3">
                Sample App:
            </h3>
            <Link to="/second-hooks-examples/useFetchNumbersAPI">
                    Using Fetch from API
            </Link>

        </div>
    )
}

export default SecondHooks
