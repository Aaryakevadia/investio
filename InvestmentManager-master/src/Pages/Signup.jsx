import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './utils';

import './Signup.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    // const handleSignup = async (e) => {
    //     e.preventDefault();
    //     const { name, username, email, password } = signupInfo;
        
    //     if (!name || !username || !email || !password) {
    //         return handleError('All fields are required (name, username, email, and password)');
    //     }

    //     try {
    //         const url = `https://deploy-mern-app-1-api.vercel.app/auth/signup`;
    //         const response = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(signupInfo)
    //         });
            
    //         const result = await response.json();
    //         const { success, message, error } = result;
            
    //         if (success) {
    //             handleSuccess(message);
    //             setTimeout(() => {
    //                 navigate('/login');
    //             }, 1000);
    //         } else if (error) {
    //             const details = error?.details[0].message;
    //             handleError(details);
    //         } else if (!success) {
    //             handleError(message);
    //         }
            
    //         console.log(result);
    //     } catch (err) {
    //         handleError(err);
    //     }
    // };
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, username, email, password } = signupInfo;
        
        if (!name || !username || !email || !password) {
            return handleError('All fields are required (name, username, email, and password)');
        }
    
        try {
            const url = `http://localhost:5000/api/v1/user/signup`; // Adjust URL if needed
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            
            const result = await response.json();
    
            // If the signup is successful
            if (response.ok) {
                handleSuccess('User registered successfully!');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                // Handle error response gracefully
                const error = result.error || result.message;
                if (error && error.details && error.details.length > 0) {
                    handleError(error.details[0].message); // If error.details exists
                } else {
                    handleError(error || 'An unknown error occurred.'); // Fallback for unknown errors
                }
            }
    
        } catch (err) {
            handleError('Internal server error. Please try again later.');
            console.error('Signup error:', err);
        }
    };
    
    const handleError = (message) => {
        console.error(message);
        alert(`Error: ${message}`); // or use some custom toast notification
    };
    
    const handleSuccess = (message) => {
        console.log(message);
        alert(`Success: ${message}`);
    };
    

    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>

                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='username'
                        placeholder='Enter your username...'
                        value={signupInfo.username}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                    />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account? 
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;
