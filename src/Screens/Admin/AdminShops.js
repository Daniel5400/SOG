import React, {useState} from 'react'
import Header2 from '../../Components/Header2';
import Sidebar2 from '../../Components/Sidebar2';

const AdminShops = () => {
  return (
    <div className='dashb'>

        <section className='dashboard'>
            <Sidebar2/>
            <main>
                <Header2/>
                <div className='add'>
                    <h2>Shops</h2>

                </div>

                <table>
                    <tr className='heading'>
                        <th>Shop Name</th>
                        <th>Address</th>
                        
                    </tr>

                    <tr>
                        <td>Shop1</td>
                        <td>Trans Amadi, Port Harcourt, Rivers State</td>
                    </tr>

                    <tr>
                        <td>Shop2</td>
                        <td>Agip, Port Harcourt, Rivers State</td>
                    </tr>

                </table>

                

            </main>
        </section>



        
    </div>
  )
}

export default AdminShops