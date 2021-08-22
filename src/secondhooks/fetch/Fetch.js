import React, { useState } from 'react'
import { useFetch } from './UseFetch'


/**
 * Button click retrieves new item from the numbersapi.com data
 */
function Fetch() {

    // const {data, loading} = useFetch("http://numbersapi.com/43/trivia");
    //const {data, loading} = useFetch("http://numbersapi.com/43/trivia");
    // const {data, loading} = useFetch('http://numbersapi.com/42/trivia');
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    return (
        <div>
            <div>
                {loading ? 'Loading....' : data}
            </div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => setCount(c => c + 1)}>New Item</button>
            </div>
        </div>
    )
}

export default Fetch
