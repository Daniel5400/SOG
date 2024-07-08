import React, {useState} from 'react'
import Header2 from '../../Components/Header2';
import Sidebar2 from '../../Components/Sidebar2';
import Modal from "react-modal";
import m1 from '../../Assets/shirt1.jpeg'
import m2 from '../../Assets/shirt2.jpeg'
import m3 from '../../Assets/shirt3.webp'


const AdminProducts = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

  return (
    <div className='dashb'>

        <section className='dashboard'>
            <Sidebar2/>
            <main>
                <Header2/>
                <div className='add' style={{textAlign:'center'}}>
                    <h2>Products</h2>

                </div>

                <table>
                    <tr className='heading'>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th className='dt'></th>
                    </tr>

                    <tr>
                        <td>Product1</td>
                        <td>$30</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                    <tr>
                        <td>Product2</td>
                        <td>$45</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                </table>

                

            </main>
        </section>


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

                        <p>Product Name: <span>Product1</span></p>
                        <p>Product Price: <span>$30</span></p>
                        <p>Quantity: <span>4</span></p>
                        <p>Size: <span>Medium</span></p>
                        <p>Color: <span>Red</span></p>
                        <p>Catergory: <span>Clothes</span></p>
                        <p>Shop: <span>Shop1</span></p>

                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>




        
        
    </div>
  )
}

export default AdminProducts