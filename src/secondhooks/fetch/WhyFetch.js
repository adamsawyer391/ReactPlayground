import React from 'react'

function WhyFetch() {
    return (
        <div>
            <h2>
                Why useFetch?
            </h2>
            <p>
                It's very common to fetch data when the user goes to a certain page. We also use common logic when fetching that data. 
            </p>
            <p>
                There's also a fair amount of boilerplate/logic that crowds our components and it's not very DRY (Don't Repeat Yourself).
            </p>
            <p>
                These are all good reasons to make a custom hook. We can outsource that boilerplate/logic into one separate file. That file will 
                hold the function (hook) which will return for us what we need to use in our components. 
            </p>
            <h2>
                The Old Way
            </h2>
            <p>
                In this example, I'll use the <span style={{backgroundColor: 'lightgray', borderRadius: 5, padding: 3, fontWeight: 'bold'}}>useState</span> hook to keep track of the loading state, any error, and the data. 
                I'll use the <span style={{backgroundColor: 'lightgray', borderRadius: 5, padding: 3, fontWeight: 'bold'}}>useEffect</span> hook to run all of that code. Lastly, I'm using axios to fetch the data, and a cancel token to cancel 
                any unfinished requests that we don't need anymore.
            </p>
        </div>
    )
}

export default WhyFetch
