import React from 'react'
import Header2 from '../../Components/Header2'
import Sidebar2 from '../../Components/Sidebar2'

const AdminBank = () => {
  return (
    <div className='dashb'>

        <section className='dashboard'>
            <Sidebar2/>
            <main>
                <Header2/>
                <div className='add'>
                    <h2 style={{textAlign:'center'}}>Bank Details</h2>

                </div>

                <table>
                    <tr className='heading'>
                        <th>Bank Name</th>
                        <th>Account Number</th>
                        
                    </tr>

                    <tr>
                        <td>Name of Bank</td>
                        <td>Account Number</td>
                    </tr>

                    

                </table>

                

            </main>
        </section>


       
        
    </div>
  )
}

export default AdminBank