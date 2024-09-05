import React from 'react';
import Header2 from '../../Components/Header2';
import { FaUsers } from "react-icons/fa";
import Sidebar2 from '../../Components/Sidebar2';
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAddressBook } from "react-icons/fa6";
import Footer from '../../Components/Footer';


const AdminDashboard = () => {

    const Cards= [

        {
            text:'Cars',
            icon: FaCarSide,
            link:'/admincars'
            // background:'#6861ce'
        },
        {
            text:'Bookings',
            icon: FaAddressBook,
            link:'/bookings'
            // background:'#f25961'
        },    
        {
          text:'Users',
          icon:FaUsers,
          link:'/users'
          // background:'#31ce36'
        },
        {
          text:'Payments',
          icon:FaUsers,
          link:'/payments'
          // background:'#31ce36'
        }
    ];

    
  return (
    <div className='dashb'>
       

    <section className='dashboard'>

      <Sidebar2/>

      <main>
      <Header2/>

      <section className='left'>
     
           <div className='search'>
            {/* <img src={} alt="" /> */}
            <input type="search" placeholder='Search' />
          </div> 

          <div className='cards-container'>
          
            {Cards && Cards.map(({icon, text, background, link},index)=>{
              return(

                <Link to={link} className="cardss">
                  <div className='card1'>
                  <div className='icon-card' style={{backgroundColor:background}}>
                  
                    <i className='icons'>{React.createElement(icon)}</i>

                  </div>

                  <div className='card-text'>
                    <p>{text}</p>
                  </div>
                </div>

                </Link>
                

              )
            })}


          
          </div>
      </section>

      </main>
    
    </section>
    <Footer/>
</div>
  )
}

export default AdminDashboard