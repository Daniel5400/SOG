import React, {useState} from 'react'
import Header2 from '../Components/Header2';
import SideBar from '../Components/SideBar';
import Modal from "react-modal";
import m1 from '../Assets/shirt1.jpeg'
import m2 from '../Assets/shirt2.jpeg'
import m3 from '../Assets/shirt3.webp'

const Deals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

   

  return (
    <div className='dashb'>

        <section className='dashboard'>
            <SideBar/>
            <main>
                <Header2/>
                <div className='add'>
                    <h2>Daily Deals</h2>

                    <button onClick={toggleModal}>Add Deals</button>
                </div>

                <table>
                    <tr className='heading'>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th className='dt'>Discount</th>
                    </tr>

                    <tr>
                        <td>Product1</td>
                        <td>$30</td>
                        <td className='dt'>10%</td>
                    </tr>

                    <tr>
                        <td>Product2</td>
                        <td>$45</td>
                        <td className='dt'>5%</td>
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
                        <p>Product Name</p>
                        <select name="" id="">
                            <option value="">Product1</option>
                            <option value="">Product2</option>
                        </select>
                    </div>

                    <div>
                        <p>Shop</p>
                        <select name="" id="">
                            <option value="">Shop1</option>
                            <option value="">Shop2</option>
                        </select>
                    </div>

                    <div>
                        <p>Discount</p>
                        <input type="text" placeholder='10%' />
                    </div>


                    <div>
                        <p>Expiry Date</p>
                        <input type="date" placeholder='$32' />
                    </div>
                    

                    <div>
                        <button type="submit">SEND</button>
                    </div>
                
                </form>
                

              </div>

            </div>
            
          </Modal>




                
    </div>
  )
}

export default Deals