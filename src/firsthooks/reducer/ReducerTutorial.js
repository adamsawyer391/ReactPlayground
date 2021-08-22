import React, { useState, useReducer } from 'react'



/**
 * 
 * @returns useReducer hook
 */

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state;
    }
}

function ReducerTutorial() {

    const [state, dispatch] = useReducer(
        reducer,
        {
            count: 0,
            showText: true
        }
    )

    return (
        <div>
            <h1>
                {state.count}
            </h1>
            <button onClick={() => {
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});
            }}>
                Click Here
            </button>
            {state.showText && <p>This is button has been clicked {state.count} times!</p>}
        </div>
    )
}

export default ReducerTutorial




/**
 * 
 * useEffect Hook
//  */
// function ReducerTutorial() {

//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(true);

//     return (
//         <div>
//             <h1>
//                 {count}
//             </h1>
//             <button onClick={() => {
//                 setCount(count + 1);
//                 setShowText(!showText);
//             }}>
//                 Click Here
//             </button>
//             {showText && <p>This is button has been clicked {count} times!</p>}
//         </div>
//     )
// }

// export default ReducerTutorial



// /**
//  * The button click displays a line of text with the number of times
//  * the button has been clicked
//  */

// function ReducerTutorial() {

//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(true);

//     return (
//         <div>
//             <button onClick={() => {
//                 setCount(count + 1);
//                 setShowText(showText);
//             }}>
//                 Click Here
//             </button>
//             {showText && <p>This is button has been clicked {count} times!</p>}
//         </div>
//     )
// }

// export default ReducerTutorial
