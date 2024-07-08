import React, {useState} from 'react'
import Header2 from '../Components/Header2';
import SideBar from '../Components/SideBar';
import Modal from "react-modal";
import m1 from '../Assets/Future-houses-featured-image.avif'
import m2 from '../Assets/Future-houses-featured-image.avif'
import m3 from '../Assets/Future-houses-featured-image.avif'


const Products = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };



  return (
    <div className='dashb'>

        <section className='dashboard'>
            <SideBar/>
            <main>
                <Header2/>
                <div className='add'>
                    <h2>Products</h2>

                    <button onClick={toggleModal}>Add Product</button>
                </div>

                <table>
                    <tr className='heading'>
                        <th>Location</th>
                        {/* <th>Price</th> */}
                        <th className='dt'></th>
                        <th className='dt'></th>
                        <th className='dt'></th>

                    </tr>

                    <tr>
                        <td>200-204 11th Ave NW, Austin, MN</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                        <td className='dt'><button>Edit</button></td>
                        <td className='dt'><button>Delete</button></td>

                    </tr>

                    <tr>
                        <td>200-204 11th Ave NW, Austin, MN</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                        <td className='dt'><button>Edit</button></td>
                        <td className='dt'><button>Delete</button></td>

                    </tr>

                </table>

                

            </main>
        </section>


        {/* FIRST MODAL */}


        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
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
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form className='product-form'>

                    <div>
                        <p>Location</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Price</p>
                        <input type="text" placeholder='$32' />
                    </div>

                    <div>
                        <p>Size</p>
                        <input type="text" placeholder='1,150 Sq. Ft.' />
                    </div>

                    <div>
                        <p>Images</p>
                        <input type="file"
                            accept="image/*"
                            multiple
                        />
                    </div>

                    <div>
                        <p>Bedroom</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Bathroom</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Phone</p>
                        <input type="tel" />
                    </div>

                    <div>
                        <p>Description</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Catergory</p>
                        <select name="" id="">

                            <option value="For Sale">For Sale</option>
                            <option value="For Rent">For Rent</option>

                        </select>
                    </div>

                    <div>
                        <p>Application fee</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Security fee</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Pet Policies</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Utilities</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Appliances</p>
                        <input type="text" placeholder='A/C Unit, Oven'/>
                    </div>

                    <div>
                        <button type="submit">SEND</button>
                    </div>
                
                </form>
                

              </div>

            </div>
            
          </Modal>




          {/* SECOND MODAL */}

        
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

                <section className='product-info'>
                    <div className='product-images'>

                        <img src={m1} alt="" />
                        <img src={m2} alt="" />
                        <img src={m3} alt="" />

                    </div>

                    <div className='others'>

                        <p>Location: <span>200-204 11th Ave NW, Austin, MN</span></p>
                        <p>Size: <span>1,150 Sq. Ft.</span></p>
                        <p>Bedroom: <span>4</span></p>
                        <p>Bathroom: <span>3</span></p>
                        <p>Price: <span>$975</span></p>
                        <p>Category: <span>For Sale</span></p>
                        <p>Phone: <span>(515) 203-3559</span></p>
                        <p>Description: <span>Welcome to Country Club Village, your new home in Boone, IA! This newly renovated, large, and spacious 3 bed 1 bath apartment is currently available. Close to Walmart and local restaurants such as The Colorado Grill, Saint's Buffet, and multiple fast food options.</span></p>
                        <p>Application Fee: <span>$975</span></p>
                        <p>Security Fee: <span>$975</span></p>
                        <p>Pet Policies: <span>Cats allowed, Dogs allowed</span></p>
                        <p>Utilities: <span>Garbage, Lawn care, Snow Removal</span></p>
                        <p>Appliances: <span>Refrigerator, Oven, Microwave, Dishwasher, A/C Unit</span></p>
                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>


         


        
    </div>
  )
}

export default Products


