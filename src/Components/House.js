import React, {useState} from 'react'
import house from '../Assets/house2.jpeg'
import {FaBed, FaBath} from 'react-icons/fa'
import Modal from "react-modal";

const House = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

  return (
    <div>
        <section className='house' id='houses'>

            <div className="house1">
                <div className="h-c">
                    <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>


                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>

            <div className="house1">
                <div className="h-c">
                <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>


                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>


            <div className="house1">
                <div className="h-c">
                <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>


                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>


            <div className="house1">
                <div className="h-c">
                <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>


                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>


            <div className="house1">
                <div className="h-c">
                <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>


                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>


            <div className="house1">
                <div className="h-c">
                <div className="abs-c">For Sale</div>
                    <img src={house} alt="" />
                    <h2>200-204 11th Ave NW, Austin, MN</h2>
                    <h3>202 11th Avenue Northwest, 401, Austin, MN 55912</h3>
                    <h4>$1000</h4>

                    <div className="info">
                        <div className="div">
                            <FaBed className='h-i'/>
                            <p>3 Beds</p>
                        </div>

                        <div className="div">
                            <FaBath className='h-i'/>
                            <p>2 Baths</p>
                        </div>

                    </div>

                    <div className="btns">
                        <button onClick={toggleModal1}>Details</button>
                        <button>Buy</button>
                    </div>
                    
                    
                </div>
            </div>


            <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <section className='house-details'>

                    <div className="img">
                        <img src={house} alt="" />
                    </div>

                    <div className="txt">
                        <div className="place">
                            <h1>1221 South Linn Street, 1F, Boone, IA 50036 MAP</h1>
                            <h2> $975</h2>
                        </div>

                        <div className="content">
                            <div className="d-c">
                                <div className="one">
                                    <FaBed className='d-i'/>
                                    <span>3 Bed</span>
                                </div>
                                <div className="one">
                                    <FaBath className='d-i'/>
                                    <span>3 Bath</span>
                                </div>
                                <p>| 1,150 Sq. Ft.</p>
                            </div>
                            <a href="">(515) 203-3559</a>
                        </div>

                        <div className="body">
                            <p>Welcome to Country Club Village, your new home in Boone, IA! This newly renovated, large, and spacious 3 bed 1 bath apartment is currently available. Close to Walmart and local restaurants such as The Colorado Grill, Saint's Buffet, and multiple fast food options.</p>

                            <div className="terms">
                                <ul>
                                    <h3>Rental Terms</h3>
                                    <li>Rent: $975</li>
                                    <li>Application Fee: $55</li>
                                    <li>Security Deposit: $975</li>
                                    <li>Rent: $975</li>
                                </ul>

                                <ul>
                                    <h3>Pet Policy</h3>
                                    <li>Cats allowed</li>
                                    <li>Dogs allowed</li>
                                    
                                </ul>

                                <ul>
                                    <h3>Utilities</h3>
                                    <li>Garbage</li>
                                    <li>Lawn Care</li>
                                    <li>Snow Removal </li>
                                </ul>

                                <ul>
                                    <h3>Appliances</h3>
                                    <li>Refrigerator</li>
                                    <li>Oven/Range</li>
                                    <li>Microwave</li>
                                    <li>Dishwasher</li>
                                    <li>A/C Unit</li>
                                </ul>


                            </div>
                        </div>


                    </div>
                    

                    
                </section>    
              
                

              </div>

            </div>
            
          </Modal>


        </section>


    </div>
  )
}

export default House