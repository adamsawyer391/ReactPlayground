import React, { useState } from 'react'

function Input() {

    const [inputValue, setInputValue] = useState("Adam");

    let captureText = (event) => {
        const value = event.target.value;
        setInputValue(value)
    }

    let handleKeyDownEnter = (event) => {
        if (event.key === 'Enter') {
            console.log('enter key pressed')
            const value = event.target.value;
            setInputValue(value)
        }
    }

    return (
        <div>
            <div>
                {/* <input placeholder="Enter text..." onChange={captureText} /> */}
                <input placeholder="Enter text..." onKeyDown={handleKeyDownEnter} />
            </div>
            <div>
                {inputValue}
            </div>
        </div>
    )
}

export default Input
