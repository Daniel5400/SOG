import React, {useState} from 'react'
import Header2 from '../Components/Header2';
import SideBar from '../Components/SideBar';
import Modal from "react-modal";

const Shops = () => {

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
                    <h2>Shops</h2>

                    <button onClick={toggleModal}>Add Shop</button>
                </div>

                <table>
                    <tr className='heading' >
                        <th>Shop Name</th>
                        <th>Address</th>
                        
                    </tr>

                    <tr onClick={toggleModal1} style={{cursor:'pointer'}}>
                        <td>Shop1</td>
                        <td>Trans Amadi, Port Harcourt, Rivers State</td>
                    </tr>

                    <tr onClick={toggleModal1} style={{cursor:'pointer'}}>
                        <td>Shop2</td>
                        <td>Agip, Port Harcourt, Rivers State</td>
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
                        <p>Shop Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Address</p>
                        <input type="text"  />
                    </div>

                    <div>
                        <p>Manager Name</p>
                        <input type="text"  />
                    </div>

                    <div>
                        <p>Password</p>
                        <input type="password"  />
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
                    {/* <div className='product-images'>

                        <img src={m1} alt="" />
                        <img src={m2} alt="" />
                        <img src={m3} alt="" />

                    </div> */}

                    <div className='others'>

                        <p>Shop Name: <span>Shop1</span></p>
                        <p>Address: <span>Trans Amadi, Port Harcourt, Rivers State</span></p>
                        <p>Manager: <span>Manager1</span></p>
                        <p>Total quantity of items: <span>134 items</span></p>
                        <p>Revenue Generated: <span>$10,000</span></p>
                        

                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>


        
    </div>
  )
}

export default Shops