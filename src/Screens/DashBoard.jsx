import React from 'react';
import Header2 from '../Components/Header2';
import '../App.css';
import SideBar from '../Components/SideBar';
import { FaCubes } from "react-icons/fa6";


import s from '../Assets/Search (1).png'
import { GrShop } from "react-icons/gr";
import { RiBankFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';



// import Side from '../Components/Side';





const DashBoard = () => {


  const Cards= [

    {
        text:'House Listings',
        icon: FaCubes,
        link:'/products'
        // background:'#6861ce'
    },

    // {
    //   text:'Shops',
    //   icon:GrShop,
    //   link:'/shops'
    //   // background:'#31ce36'
    // },
    // {
    //   text:'Shop Manager',
    //   icon:GrShop,
    //   link:'/manager'
    //   // background:'#31ce36'
    // },
      
    {
      text:'Bank',
      icon:RiBankFill,
      link:'/bank'
      // background:'#6861ce'

    },

    

    {
      text:'Settings',
      icon: IoIosSettings,
      link:'/settings'
      // background:'#f25961'

    }
    
];




  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <SideBar/>

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

export default DashBoard