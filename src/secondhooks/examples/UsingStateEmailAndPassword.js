import React, { useEffect, useState } from 'react'
import { useForm } from './UseForm';
import '../styles/EmailPassword.css'
import { Hello } from './Hello';

function UsingStateEmailAndPassword() {

    const [values, handleChanges] = useForm({email: '', password: '', firstName: ''});
    //const [showHello, setShowHello] = useState(true);
    



    /**
     * Capture values of input fields
     */
    // useEffect(() => {
    //     console.log('effect used');
    //     return () => {
    //         console.log('unmount');
    //     }
    // }, [values.email, values.password]);




    /**
     * Track mouse X, Y coordinates
     */
    // useEffect(() => {
    //     console.log('effect used');
    //     const onMouseMove = e => {
    //         console.log(e);
    //     }
    //     window.addEventListener('mousemove', onMouseMove)
    //     return () => {
    //         console.log('unmount');
    //         window.removeEventListener('mousemove', onMouseMove);
    //     }
    // }, []);


    /**
     * Basic useEffect that runs at startup of component
     */
    // useEffect(() => {
    //     console.log('mount 1');
    // }, []);



    return (
        <div className="eandp-container">

            {/* This, in combination with the setShowHelloMethod, a toggle button can hide or display a react component
            <button onClick={() => setShowHello(!showHello)}>toggle</button>
            {showHello && <Hello />} */}

            <div className="input-container">
                <input name="email" value={values.email} onChange={handleChanges} className="input-field" placeholder="Enter email..." />
            </div>

            <div className="input-container">
                <input name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChanges} className="input-field"  />
            </div>
            
            <div className="input-container">
                <input type="password" name="password" value={values.password} onChange={handleChanges} className="input-field" placeholder="Enter password..." />
            </div>
            
        </div>
    )
}

export default UsingStateEmailAndPassword
