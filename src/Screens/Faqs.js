import MainHeader from '../Components/MainHeader'
import abt from '../Assets/abt.png'
import Footer from '../Components/Footer'
import React, {useState} from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowDropup } from "react-icons/io";


const Faqs = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);

  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [ans5, setAns5] = useState(false);
  const [open5, setOpen5] = useState(true);

  const [ans6, setAns6] = useState(false);
  const [open6, setOpen6] = useState(true);

  const [ans7, setAns7] = useState(false);
  const [open7, setOpen7] = useState(true);


  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }

  const click5 = () => {
    setAns5(true);
    setOpen5(false);
  }

  const clickRev5 = () => {
    setAns5(false);
    setOpen5(true);
  }


  const click6 = () => {
    setAns6(true);
    setOpen6(false);
  }

  const clickRev6 = () => {
    setAns6(false);
    setOpen6(true);
  }

  const click7 = () => {
    setAns7(true);
    setOpen7(false);
  }

  const clickRev7 = () => {
    setAns7(false);
    setOpen7(true);
  }


  return (
    <div>
        <MainHeader/>
        <section className='abt'>
            <div className='faq'>
                <h1><span>Frequently Asked Questions</span></h1>
                <p>Everything you need to know about the product and billing.</p>
                <div>
                    <button>Learn more</button>
                </div>
                
            </div>
            <img src={abt} alt="" />
        </section>

        <div id='faq' className='faqs'>
        <h1>Frequently Asked Questions</h1>

        <p>Everything you need to know about the product and billing.</p>

        <div className='w-r'>
                    <div className="ques">
                        <div>
                            {
                                open ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev}/>

                            }
                        
                        </div>

                        <div>
                            <h4>How can The Keyboard augment my current in-house team?</h4>

                            {  ans ? (
                                <p>The Keyboard serves as an extension of your current team, seamlessly integrating to manage peak periods, provide after-hours support, and handle routine customer care tasks. This strategic collaboration allows your in-house team to focus on core business goals. Additionally, our services have the potential to reduce the necessity for a large in-house team, allowing you to reallocate funds to more critical business initiatives.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open1 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click1}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev1}/>

                        }
                        
                        </div>

                        <div>
                        <h4>Can The Keyboard's services be tailored to meet my unique needs?</h4>

                        {  ans1 ? (
                            <p>Absolutely. At The KEYBOARD, we take great pride in our adaptability and flexibility. We offer bespoke solutions designed to cater to your unique customer care needs. Our approach is not one-size-fits-all. We work closely with you to understand your requirements and tailor our services accordingly.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open2 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click2}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev2}/>

                        }
                        
                        </div>

                        <div>
                        <h4>Is The Keyboard capable of effectively managing support team remotely?</h4>

                        {  ans2 ? (
                            <p>Certainly. TheKeyboard excels in managing HR comprehensively for your globally dispersed customer care agents. We oversee the entire process, from recruitment and training to maintaining high employee morale. Our experienced Operational Excellence team is consistently available to offer ongoing support, ensuring smooth integration and consistently delivering high-quality services.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>




                    <div className="ques">

                        <div>
                          {
                              open3 ? (
                              <IoIosArrowDropdown className='arr-icon' onClick={click3}/>

                              ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev3}/>

                          }
                        
                        </div>

                        <div>
                          <h4>How can The Keyboard's services accommodate my budget constraints?</h4>

                          {  ans3 ? (
                              <p>The Keyboard designs its services to enhance the efficiency of your customer care operations, freeing up a substantial portion of your working capital and aligning with your budgetary constraints. We present competitive and adaptable pricing models that can be customized to suit the particular financial needs of a startup and full blown proprietary firm. Our objective is to furnish you with top-notch services that bring value without exerting undue pressure on your budget.</p>
                              ):null
                          }
                        
                        </div>

                        

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open4 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click4}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev4}/>

                            }
                        
                        </div>

                        <div>
                            <h4>Can The Keyboard scale its services according to my business needs?</h4>

                            {  ans4 ? (
                                <p>Certainly. The Keyboard is well-equipped to scale services according to your business requirements through our globally distributed workforce. Whether you're in a phase of expansion, encountering peak periods, or require downsizing, we possess the flexibility and resources to adapt our services to align with your changing needs. Our aim is to offer proprietary firms  a customer care solution that mirrors the dynamism of their business.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open5 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click5}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev5}/>

                            }
                        
                          </div>

                        <div>
                            <h4>How does The Keyboard maintain stability in service delivery?</h4>

                            {  ans5 ? (
                                <p>The Keyboard guarantees service delivery stability by combining our globally distributed workforce with adherence to established and proven business continuity practices. Our robust infrastructure and proficient team create a reliable foundation for consistent service delivery. We have established systems to handle contingencies, assuring uninterrupted service and upholding the high quality our clients anticipate.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>


                    <div className="ques">
                        <div>
                            {
                                open6 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click6}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev6}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Does The Keyboard have industry-specific expertise?</h4>

                            {  ans6 ? (
                                <p>Certainly, The Keyboard possesses 7 year of financial trading  experience under our sleeves and worked with various proprietary firms both as clients and backend support team. This broad expertise guarantees our comprehension of the distinctive challenges and demands within the proprietary firm  industry. We apply this knowledge in every interaction, providing customized solutions that address industry-specific needs and challenges. Our objective is to furnish your firm with services that not only meet but surpass industry standards.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">
                        <div>
                            {
                                open7 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click7}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev7}/>

                            }
                        
                          </div>

                        <div>
                            <h4>How does The Keyboard ensure accountability in its services?</h4>

                            {  ans7 ? (
                                <p>Accountability stands as a fundamental principle in the services offered by The Keyboard. Our operations are supervised by committed team leaders and quality assurance specialists, ensuring strict adherence to our elevated standards. Furthermore, we prioritize transparency by furnishing regular reports and updates to our clients. This grants you complete visibility into our performance and establishes accountability for the results we achieve. Our objective is to furnish you with a reliable service supported by a team fully accountable for its performance.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>
                    

                  </div>
              </div>

        <Footer/>
    </div>
  )
}

export default Faqs