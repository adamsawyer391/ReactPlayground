import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'


export default function MemoTutorial() {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data);
        });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longest_name = "";
        for(let i = 0; i < comments.length; i++){
            let current_name = comments[i].name;
            if(current_name.length > longest_name.length){
                longest_name = current_name;
            }
        }
        return longest_name;
    };

    const getLongestName = useMemo(() => findLongestName(data), [toggle])

    return(
        <div className="App">
            <div>
                {getLongestName}
            </div>
            <button onClick={() => { setToggle(!toggle); }}>Toggle</button>
        </div>
    )
}


