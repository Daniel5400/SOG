import React from 'react';
import Header2 from '../../Components/Header2';
import { FaCubes } from "react-icons/fa6";
import { FaUsersSlash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import Sidebar2 from '../../Components/Sidebar2';
import { RiBankFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

    const Cards= [

        {
            text:'Products',
            icon: FaCubes,
            link:'/adminproducts'
            // background:'#6861ce'
        },
        {
            text:'Shops',
            icon: GrShop,
            link:'/adminshops'
            // background:'#f25961'
        },
          
    
        {
          text:'Unapproved Vendors',
          icon:FaUsersSlash,
          link:'/unapprove'
          // background:'#31ce36'
        },
          
        {
          text:'Approved Vendors',
          icon:FaUsers,
          link:'/approve'
          // background:'#6861ce'
    
        },

        
    
        {
          text:'Bank',
          icon: RiBankFill,
          link:'/adminbank'
          // background:'#f25961'
    
        }
        
    ];

    
  return (
    <div className='dashb'>
       

    <section className='dashboard'>

      <Sidebar2/>

      <main>
      <Header2/>

      <section className='left'>
     
          {/* <div className='search'>
            <img src={s} alt="" />
            <input type="search" placeholder='Search' />
          </div> */}

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
</div>
  )
}

export default AdminDashboard