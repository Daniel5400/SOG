import React, { useState } from 'react';
import '../App.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../Screens/const/baseUrl'; // Make sure to import baseURL correctly

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [licences, setLicences] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signup = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        let data = JSON.stringify({
            name,
            address,
            email,
            password,
            phone,
            licences,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseURL}users/register`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            // Check if the status code is 200
            if (response.status === 201) {
                // Navigate to the login page or another page
                navigate('/login');
            } else {
                // Handle unexpected status codes
                setError('Signup failed. Please try again.');
            }
        } catch (error) {
            // Handle signup errors
            setError('An error occurred during registration');
        }
    };

    return (
        <>
            {/* <Header/> */}
            <section className='form-c'>
                <div className='f-l'>
                    {/* <img src={man} alt="" /> */}
                </div>
                <div className='f-r'>
                    <h3>Hello There!</h3>
                    <p>Fill the form to create an account with us</p>
                    <form className='form' onSubmit={signup}>
                        <div>
                            <input
                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='licence'
                                value={licences}
                                onChange={(e) => setLicences(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder='Phone Number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='Set a password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Submit</button>
                        <p className='switch'>Already have an account? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignUp;
