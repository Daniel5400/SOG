import React, {useState} from 'react'
import Header2 from '../Components/Header2';
import SideBar from '../Components/SideBar';
import Modal from "react-modal";

const ShopManager = () => {

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
                <h2>Shops</h2>

                <button onClick={toggleModal}>Add Shop Manager</button>
            </div>

            <table>
                <tr className='heading'>
                    <th>Manager Name</th>
                    <th>Email</th>
                    
                </tr>

                <tr>
                    <td>Manager1</td>
                    <td>manager@gmail.com</td>
                </tr>

                <tr>
                    <td>Manager2</td>
                    <td>manager@gmail.com</td>
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
                    <p>Manager Name</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Shop</p>
                   <select name="" id="">
                    <option value="">Shop1</option>
                    <option value="">Shop2</option>
                   </select>
                </div>

                <div>
                    <p>Email</p>
                    <input type="email"  />
                </div>

                <div>
                    <p>Phone Number</p>
                    <input type="tel"  />
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


    
</div>

  )
}

export default ShopManager