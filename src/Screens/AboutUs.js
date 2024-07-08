import React from 'react'
import MainHeader from '../Components/MainHeader'
import abt from '../Assets/abt.png'
import w1 from '../Assets/w1.svg'
import w2 from '../Assets/w2.svg'
import w3 from '../Assets/w3.svg'
import w4 from '../Assets/w4.svg'
import google from '../Assets/google.png'
import store from '../Assets/store.png'
import Footer from '../Components/Footer'


const AboutUs = () => {
  return (
    <div>
        <MainHeader/>

        <section className='abt'>
            <div>
                <h1>Connecting You to Great <span>Deals</span>, One <span>Click</span> at a Time</h1>
                <p>At <span>SlashPoint</span>, we believe in the power of dreams and the importance of accessible, effective savings. Where Great Deals Happen.</p>
            </div>
            <img src={abt} alt="" />
        </section>

        <div className="value">
            <h3>Our Value Proposition</h3>
            <h4>How We Work at <span>SlashPoint</span></h4>
            <p>Our shared values keep us connected and guide us as one team.</p>

            <section>

                <div>
                    <img src={w1} alt="" />
                    <h5>Incentive-Driven Discount</h5>
                    <p>We go the extra mile to make your dreams more attainable. Through our innovative savings platform, we offer a 5% discount. It's not just about putting money aside, but about reaping the rewards of disciplined savings.</p>
                </div>

                <div>
                    <img src={w2} alt="" />
                    <h5>Broadened Horizons with Trusted Partnerships</h5>
                    <p>We're not just a platform; we're your gateway to a world of possibilities. We've fostered strong partnerships with leading stores and brands, ensuring that you have access to a wide range of products. From everyday essentials to coveted luxuries, we're committed to making your desired items within reach.</p>
                </div>

                <div>
                    <img src={w3} alt="" />
                    <h5>Seamless, User-Friendly Experience</h5>
                    <p>Technology is at the heart of everything we do. Our platform is designed to provide you with a seamless and user-friendly experience. Navigating through your savings journey should be effortless, and we're here to ensure just that.</p>
                </div>

                <div>
                    <img src={w4} alt="" />
                    <h5>Fostering Financial Discipline</h5>
                    <p>We understand that financial discipline is the cornerstone of achieving your aspirations. Our platform is not just a savings tool; it's a mentor, guiding you towards smart financial decisions. We're here to bridge the gap between your aspirations and affordability.</p>
                </div>

            </section>
        </div>

        <div className="our">
            <h2>Our Vision</h2>
            <p>At <span>SlashPoint</span>, we envision a Nigeria where dreams are nurtured and aspirations are met. We're dedicated to being the catalyst that propels you towards your goals. Through effective, trusted partnerships, and seamless technology, we're not just a platform; we're your partner in progress.</p>
        </div>

        <div className="download2">
            <h1>Join Us</h1>
            <p className='aspire'>In this journey towards a future filled with fulfilled aspirations and the joy of accomplishment.</p>
            <div>
                <img src={google} alt="" />
                <img src={store} alt="" />
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default AboutUs