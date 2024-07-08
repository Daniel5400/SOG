import React, { useState } from 'react';
import '../App.css';
import {AiFillHome } from "react-icons/ai";
// import {FaCubes } from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { RiBankFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { TbBasketDiscount } from "react-icons/tb";
import logo from '../Assets/logo.png'



const SideBar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);



  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const [open1, setOpen1] = useState(false);

  const handleClick = () => {
    setOpen1(!open1);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = open1 ? 'auto' : 'hidden'; // Disable or enable scrolling
    

    

  }
  

  return (
    <div>
      
    
      
      {/* <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/> */}
      <div className='media-bar' onClick={handleClick}>
          {open1 ? (<IoCloseSharp id='close' style={{color:'#fff'}}/>) : (<FaBars id='bar'  style={{color:'#ee2a7b'}}/>)}
        </div>
      

      <div className='side' style={{width:isOpen ? "70px" : "250px"}}>

      <div className='bar' >
        
        <div className='logo-div'
        //  style={{display:isOpen ? "none" : "block"}}
         >
            {/* <h1 onClick={toggle} style={{cursor:'pointer'}}>SP</h1> */}
            {/* <img src={logo} alt="" onClick={toggle} style={{cursor:'pointer'}}/> */}
            <h1 onClick={toggle} style={{cursor:'pointer'}}>HH</h1>

        </div>
        
        {/* <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/> */}
      
      </div>

     
        

      <NavLink to='/' className='link' activeclassName = 'active'>
      
      {/* <div >
      
        <FaBars className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div> */}
    
    </NavLink>

      <NavLink to='/dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Home</h4>

        </div>
      
      </NavLink>

      <NavLink to='/products' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaCubes  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>House Listings</h4>

        </div>
      
      </NavLink>

      {/* <NavLink to='/deals' className='link' activeclassName = 'active'>
      
      <div>
      
        <TbBasketDiscount   className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Daily Deals</h4>

      </div>
    
    </NavLink>

    <NavLink to='/manager' className='link' activeclassName = 'active'>
      
        <div>
        
          <GrShop className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Shop Manager</h4>

        </div>
      
      </NavLink>

      <NavLink to='/shops' className='link' activeclassName = 'active'>
      
        <div>
        
          <GrShop className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Shops</h4>

        </div>
      
      </NavLink> */}


      <NavLink to='/bank' className='link' activeclassName = 'active'>
      
        <div>
        
          <RiBankFill className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Bank</h4>

        </div>
      
      </NavLink>


      {/* <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <MdOutlineReceipt className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Result</h4>

        </div>
      
      </NavLink> */}


      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>

      
      
      
      </div>


      












      <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>

      <div className='bar' >
        
        
      
      </div>

      
      

      
        

        
      {/* <NavLink to='/' lassName='link' activeclassName = 'active'>
      
        <div >
        
        <FaBars className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div>
      
      </NavLink> */}


      <NavLink to='/Dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Home</h4>

        </div>
      
      </NavLink>


      <NavLink to='/products' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaCubes  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>House Listings</h4>

        </div>
      
      </NavLink>

      {/* <NavLink to='/deals' className='link' activeclassName = 'active'>
      
      <div>
      
        <TbBasketDiscount   className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Daily Deals</h4>

      </div>
    
    </NavLink>



      <NavLink to='/shops' className='link' activeclassName = 'active'>
      
        <div>
        
          <GrShop className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Shop</h4>

        </div>
      
      </NavLink>*/}


      <NavLink to='/bank' className='link' activeclassName = 'active'>
      
        <div>
        
          <RiBankFill className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Bank</h4>

        </div>
      
      </NavLink> 

      {/* <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <MdOutlineReceipt className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Result</h4>

        </div>
      
      </NavLink> */}

      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>



      
      
      </div>


    </div>
  )
}

export default SideBar