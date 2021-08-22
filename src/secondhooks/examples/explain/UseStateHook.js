import React from 'react'

function UseStateHook() {
    return (
        <div>
            <p>
            <strong>What does calling useState do?</strong> It declares a “state variable”. Our variable is called count but we could call it anything else, 
            like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities 
            that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
            </p>
            <p>
                <strong>What do we pass to useState as an argument?</strong> The only argument to the useState() Hook is the initial state. Unlike with classes, 
                the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many 
                times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
            </p>
            <p>
                <strong>What does useState return?</strong> It returns a pair of values: the current state and a function that updates it. This is why we write const 
                [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not 
                familiar with the syntax we used, we’ll come back to it at the bottom of this page.
            </p>
        </div>
    )
}

export default UseStateHook
