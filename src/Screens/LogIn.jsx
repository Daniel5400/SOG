import React from 'react';
import '../App.css';
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineKey } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import man from '../Assets/customer-hero-img.4cb86085746fb67aa0f7.png'




const LogIn = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/Dashboard')
      }

  return (
    <>
        <Header/>

        
        <section className='form-c'>

           <div className='f-l'>
            {/* <img src={man} alt="" /> */}

           </div>

           <div className='f-r'>
            <h3>Welcome Back!</h3>
            <p>Good to have you back</p>

            <form className='form'>

              <div>
                <input type="email" placeholder='Your Email Address' />
              </div>
              
              <div>
                <input type="password" placeholder= 'password' />
              </div>
              
              

              <button type="submit" onClick={login}>Submit</button>
              <p className='switch'>Don't have an account? <Link to='/signup'>Create Account</Link></p>

            </form>
           </div>

        </section>
    </>
  )
}

export default LogIn