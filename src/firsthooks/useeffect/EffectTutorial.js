import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EffectTutorial() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hello world");
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            console.log(response);
            console.log(response.data);
            setData(response.data[0].email)
        })
    }, [])


    return (
        <div>
            <h1>
                {data}
            </h1>
            <h2>
                {count}
            </h2>
            <button onClick={() => {
                setCount(count + 1);
            }}>

            </button>
        </div>
    )
}

export default EffectTutorial




