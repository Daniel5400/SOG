import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/slash.png'
import google from '../Assets/google.png'
import store from '../Assets/store.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <section>
                <div className='us'>
                    <img src={logo} alt="" />
                    <a href="">Download Now</a>
                    <Link to=''>Privacy Policy</Link>
                    <Link to=''>Terms of Use</Link>
                    <Link to=''>Drive with Us</Link>
                    <Link to=''>Services</Link>
                    <Link to=''>Contact</Link>

                </div>

                <div className='reach'>
                    <h2>Follow Us</h2>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">LinkedIn</a>
                    <a href="">Thread</a>
                </div>

                <div className='reach'>

                    <h2>Get the App</h2>
                    <img src={google} alt="" />
                    <img src={store} alt="" />

                </div>

            </section>
            <p>© 2023 <span>SlashPoint LTD</span>. All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer