import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";



const ContactUs = () => {
  return (
    <div>
      {/* <MainHeader/> */}
      <section className='cont-screen' id='contact'>
        <div className='cont-l'>
          <div className='cont-l-top'>
            <h1>Place advert here:</h1>
            <p>We are open for partnership advert.</p>
          </div>
        </div>

        <div className='cont-r'>
          <form className='form'>
            {/* <img src={logo} alt="" /> */}
            <h2>We'd love to hear from you</h2>
            <h5>Reach out and we'll respond within 24 hours</h5>

            <section>
              <div>
                <p>NAME</p>
                <input type="text" placeholder='Enter your name' />
              </div>

              <div>
                <p>EMAIL</p>
                <input type="email" placeholder='mail@domain.com' />
              </div>

              <div>
                <p>PHONE</p>
                <input type="tel" placeholder='Phone Number' />
              </div>

              <div>
                <p>ADDRESS</p>
                <input type="text" placeholder='Location' />
              </div>

              <div className='message'>
                <p>MESSAGE</p>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
              </div>

              <button type="submit">Send</button>
            </section>
          </form>

          <div className='contact-us'>
            <span>
              <a href="mailto:info@SOG.ng">
                <TfiEmail className='con-icon' />
                SOG@hotmail.ng
              </a>
            </span>

            <span>
              <a href="tel:(515) 203-3559">
                <FaPhone className='con-icon' />
                (515) 203-3559
              </a>
            </span>
          </div>
        </div>

        <div className='cont-l'>
          <div className='cont-l-top'>
            <h1>Place advert here:</h1>
            <p>We are open for partnership advert.</p>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default ContactUs;
