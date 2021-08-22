import React, { useState } from 'react'





/**
 * 
 * @returns same effect as below but written in a different way, with each counting necessary for each individual view carried out by different methods
 */
function UsingState() {

    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(20);

    return (
        <div>
            <h3>
                Using State
            </h3>
            <button onClick={() => {
                setCount(c => c + 1);
                setCount2(c => c + 1)
            } }>+</button>
            <div>
                Count 1: {count}
            </div>
            <div>
                Count 2: {count2}
            </div>
        </div>
    )
}

export default UsingState






/**
 * 
 * @returns Both increment by one and remain visible
 */
// function UsingState() {

//     const [{ count, count2}, setCount] = useState({ count: 10, count2: 20 });

//     return (
//         <div>
//             <h3>
//                 Using State
//             </h3>
//             <button onClick={() => setCount(currentState => ({ count: currentState.count + 1, count2: currentState.count2 + 1 })) } >+</button>
//             <div>
//                 Count 1: {count}
//             </div>
//             <div>
//                 Count 2: {count2}
//             </div>
//         </div>
//     )
// }

// export default UsingState








/**
 * 
 * @returns Count one increments by one and count 2 remains steady, no increment, and visible
 */
// function UsingState() {

//     const [{ count, count2}, setCount] = useState({ count: 10, count2: 20 });

//     return (
//         <div>
//             <h3>
//                 Using State
//             </h3>
//             <button onClick={() => setCount(currentState => ({ count: currentState.count + 1, count2: currentState.count2 })) } >+</button>
//             <div>
//                 Count 1: {count}
//             </div>
//             <div>
//                 Count 2: {count2}
//             </div>
//         </div>
//     )
// }

// export default UsingState





/**
 * 
 * @returns Count 1 keeps counting by one but Count 2 remains visible
 */
// function UsingState() {

//     const [{ count, count2}, setCount] = useState({ count: 10, count2: 20 });

//     return (
//         <div>
//             <h3>
//                 Using State
//             </h3>
//             <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 })) } >+</button>
//             <div>
//                 Count 1: {count}
//             </div>
//             <div>
//                 Count 2: {count2}
//             </div>
//         </div>
//     )
// }

// export default UsingState








/**
 * count two disappears after first click but count 1 keeps counting
 */
// function UsingState() {

//     const [{ count, count2}, setCount] = useState({ count: 10, count2: 20 });

//     return (
//         <div>
//             <h3>
//                 Using State
//             </h3>
//             <button onClick={() => setCount(currentState => ({ count: currentState.count + 1 })) } >+</button>
//             <div>
//                 Count 1: {count}
//             </div>
//             <div>
//                 Count 2: {count2}
//             </div>
//         </div>
//     )
// }

// export default UsingState
