import React from 'react';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './Screens/Admin/AdminDashboard';
import Landing from './Screens/Landing';
import ContactUs from './Screens/ContactUs';
import Products from './Screens/Products';
import Settings from './Screens/Settings';
// import AdminProducts from './Screens/Admin/AdminCarList';
import AdminCarList from './Screens/Admin/AdminCarList';
import Bookings from './Screens/Admin/Booking';
import Payments from './Screens/Admin/Payment';
import Users from './Screens/Admin/Users';

function App() {
  return (
    <div>

        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/settings' element={<Settings/>} />

          {/* ADMIN */}
          <Route path='/users' element={<Users/>} />
          <Route path='/admincars' element={<AdminCarList/>} />
          <Route path='/bookings' element={<Bookings/>} />
          <Route path='/payments' element={<Payments/>} />
        </Routes>

    </div>
  );
}

export default App;
