// import React, { useState } from 'react';
// import '../App.css';
// import {AiFillHome } from "react-icons/ai";
// import {FaWallet } from "react-icons/fa";
// import { BsBarChartFill } from "react-icons/bs";
// import { FaToolbox } from "react-icons/fa";
// import {BsCurrencyBitcoin } from "react-icons/bs";
// import {CgMenuGridO } from "react-icons/cg";
// import {FaCubes } from "react-icons/fa";
// import {FaUsers } from "react-icons/fa";
// import {IoIosFootball } from "react-icons/io";
// import {BiSolidDownArrow} from "react-icons/bi";
// import { Link, NavLink } from 'react-router-dom';
// import { FaBars } from "react-icons/fa";

// const Side = () => {

//     const [open, setOpen] = useState(false);

//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);

//     const [open1, setOpen1] = useState(false);

//     const Cards= [

//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/Dashboard'
//         },
    
//         {
//             icon: AiFillHome,
//             text:'History',
//             path: '/History'
//         },
          
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
    
//         },
    
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
    
//         },
    
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
    
//         },
    
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
//         },
    
    
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
//         },
    
    
//         {
//             icon: AiFillHome,
//             text:'Dashboard',
//             path: '/dash'
    
//         }
            
        
//     ];
    
//   return (
//     <div>
//     <FaBars className='media-bar' onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/>


//       <div className='side' style={{width:isOpen ? "70px" : "320px"}}>

//       <div className='bar' >
        
        
//           <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/>
      
//       </div>

//       <div className='name' style={{display:isOpen ? "none" : "flex"}}>
//         <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
//           <h4>Sharon Uzu</h4>
//           <BiSolidDownArrow className='icon'/>
//         </div>
          

//           <h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Account Setting</h3>

//         </div>
        

//         {Cards && Cards.map(({icon, text, path},index)=>{
//             return(
        
//       <div>
      
//         <NavLink to={path} className='link' activeclassName = 'active'>
//             <div >
//                 <i className='icon'>{React.createElement(icon)}</i>
//                 <h4 style={{display:isOpen ? "none" : "block"}}>{text}</h4>
//             </div>
          
//         </NavLink>
      
//       </div>

//       )
//     })}


      

      

      
      
      
//       </div>


    


//     </div>
//   )
// }

// export default Side