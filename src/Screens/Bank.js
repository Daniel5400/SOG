import React, {useState} from 'react'
import Header2 from '../Components/Header2';
import SideBar from '../Components/SideBar';
import Modal from "react-modal";

const Bank = () => {

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
                    <h2 style={{textAlign:'center'}}>Bank Details</h2>

                </div>

                <table>
                    <tr className='heading'>
                        <th>Bank Name</th>
                        <th>Account Number</th>
                        <th></th>
                        
                    </tr>

                    <tr>
                        <td>Name of Bank</td>
                        <td>Account Number</td>
                        <td className='dt' onClick={toggleModal} style={{cursor:'pointer'}}><button>Update</button></td>
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
                        <p>Bank Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Account number</p>
                        <input type="text" placeholder='Account number' />
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

export default Bank