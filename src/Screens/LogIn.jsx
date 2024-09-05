import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import baseURL from '../Screens/const/baseUrl'; // Ensure this is correctly set

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        let data = JSON.stringify({
            email,
            password,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseURL}users/login`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);

            // Check if the status code is 200
            if (response.status === 200) {
                console.log(response.data);
                // Assuming the response contains a JWT token
                const { token } = response.data;

                // Store the token in local storage (or wherever you prefer)
                localStorage.setItem('token', token);
                localStorage.setItem('userId',JSON.stringify(response.data._id));

                // Check if the email is "admin" and password is "@Pass123"
                if (response.data.role === 'admin') {
                    // Navigate to the admin dashboard
                    navigate('/admin');
                } else {
                    // Navigate to the landing page
                    navigate('/');
                }
            } else {
                // Handle unexpected status codes
                setError('Login failed. Please try again.');
            }
        } catch (error) {
            // Handle login errors
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <section className='form-c'>
                <div className='f-l'>
                    {/* <img src={man} alt="" /> */}
                </div>
                <div className='f-r'>
                    <h2>Welcome Back!</h2>
                    <p>Good to have you back</p>
                    <form className='form' onSubmit={login}>
                        <div>
                            <input
                                type="email"
                                placeholder='Your Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Submit</button>
                        <p className='switch'>Don't have an account? <Link to='/signup'>Create Account</Link></p>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LogIn;
