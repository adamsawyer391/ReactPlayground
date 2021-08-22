import React, { useRef } from 'react'

/**
 * 
 * @returns to clear the text of an input after onClick
 */

function UseRefTutorial() {

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
    };

    return (
        <div>
            <h1>
                Adam
            </h1>
            <input type="text" placeholder="Example..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseRefTutorial
