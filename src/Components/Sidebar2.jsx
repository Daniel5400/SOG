import React, { useState, useEffect } from 'react';
import '../App.css';
import {AiFillHome } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
// import { FaCubes } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
// import { FaUsersSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
// import { GrShop } from "react-icons/gr";
// import { RiBankFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";

const Sidebar2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const toggle = () => setIsOpen(!isOpen);

  const handleClick = () => {
      setOpen1(!open1);
      setDropdownOpen(!isDropdownOpen);
      document.body.style.overflow = open1 ? 'auto' : 'hidden'; // Disable or enable scrolling
  };

  // Logout function
  const handleLogout = () => {
      // Clear any authentication tokens or user data
      localStorage.removeItem('authToken'); // Example for clearing auth token

      // Redirect to home screen
      navigate('/', { replace: true });

      // Prevent back navigation
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function () {
          window.history.go(1);
      };
  };

  useEffect(() => {
      // Handle the case where user presses back button on home screen
      window.onpopstate = function () {
          window.history.go(1);
      };

      return () => {
          // Clean up listener on component unmount
          window.onpopstate = null;
      };
  }, []);

  return (
      <div>
          <div className='media-bar' onClick={handleClick}>
              {open1 ? (<IoCloseSharp id='close' style={{ color: '#fff' }} />) : (<FaBars id='bar' style={{ color: '#ee2a7b' }} />)}
          </div>

          <div className='side' style={{ width: isOpen ? "70px" : "250px" }}>
              <div className='bar'>
                  <div className='logo-div'>
                      <FaCarSide onClick={toggle} style={{ fontSize: '45px' }} />
                  </div>
              </div>
              <NavLink to='/' className='link' activeClassName='active'>
                  <div>
                      <AiFillHome className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>Home</h4>
                  </div>
              </NavLink>

              <NavLink to='/admincars' className='link' activeClassName='active'>
                  <div>
                      <FaCarSide className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>Cars</h4>
                  </div>
              </NavLink>

              <NavLink to='/bookings' className='link' activeClassName='active'>
                  <div>
                      <FaAddressBook className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>Bookings</h4>
                  </div>
              </NavLink>

              <NavLink to='/users' className='link' activeClassName='active'>
                  <div>
                      <FaUsers className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>Users</h4>
                  </div>
              </NavLink>

              <NavLink to='/payments' className='link' activeClassName='active'>
                  <div>
                      <FaUsers className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>Payments</h4>
                  </div>
              </NavLink>

              <div className='link' onClick={handleLogout}>
                  <div>
                      <IoSettings className='icon' />
                      <h4 style={{ display: isOpen ? "none" : "block" }}>LogOut</h4>
                  </div>
              </div>
          </div>

          <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>
              {/* Sidebar content */}
          </div>
      </div>
  );
};

export default Sidebar2;
