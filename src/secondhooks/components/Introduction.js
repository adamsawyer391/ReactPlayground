import React from 'react'
import '../SecondHooks.css'

function Introduction() {
    return (
        <div>
             <h1 className="second-hooks-page-main-container-h1">
                Introducing Hooks
            </h1>

            <h3>
                Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
            </h3>

            <p className="second-hooks-page-main-container-p">
                Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and 
                maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a 
                similar component model, you might recognize some of these problems
            </p>

            <h2>
                It’s hard to reuse stateful logic between components 
            </h2>

            <p className="second-hooks-page-main-container-p">
                React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a 
                while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure 
                your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, 
                you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. 
                While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.
            </p>

            <h2>
                Complex Components become hard to understand
            </h2>

            <p className="second-hooks-page-main-container-p">
                We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. 
                Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and 
                componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup 
                performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a 
                single method. This makes it too easy to introduce bugs and inconsistencies.
            </p>

            <p className="second-hooks-page-main-container-p">
                In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. 
                This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, 
                requires you to jump between different files, and makes reusing components more difficult.
            </p>

            <p className="second-hooks-page-main-container-p">
                To solve this, Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), 
                rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.
            </p>

            <h2>
                Common Hooks
            </h2>

            <p className="second-hooks-page-main-container-p-block">
                useState
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useEffect
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useRef
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useLayoutEffect
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useCallback
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useMemo
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useReducer
            </p>

            <p className="second-hooks-page-main-container-p-block">
                useContext
            </p>
        </div>
    )
}

export default Introduction
