import React, { useState } from 'react'
import './Counter.css'

/**
 * 
 * @returns This will display an incremented counter in the console, but nothing changes on the screen.
 * Hence, the use of the useState hook
 */
// const Counter = () => {
//     let counter = 0;

//     const increment = () => {
//         counter = counter + 1;
//         console.log(counter);
//     };

//     return (
//         <div>
//             {counter}
//             <button onClick={increment}>Increment Me</button>
//         </div>
//     )
// }

// export default Counter

const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    }

    const multiply = () => {
        setCounter(counter * counter);
    }

    const divide = () => {
        setCounter(counter / 2);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div>
            <div className="input-area-counter">
                {counter}
            </div>
            <div className="counter-buttons">
                <button className="counter-button-object" onClick={decrement}>Decrement Me</button>
                <button className="counter-button-object" onClick={increment}>Increment Me</button>
                <button className="counter-button-object" onClick={multiply}>Multiply Me</button>
                <button className="counter-button-object" onClick={divide}>Divide Me</button>
                <button className="counter-button-object" onClick={reset}>Reset Me</button>
            </div>
        </div>
    )
}

export default Counter
