import React from 'react';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Screens/DashBoard';
import AdminDashboard from './Screens/Admin/AdminDashboard';
import Landing from './Screens/Landing';
import AboutUs from './Screens/AboutUs';
import Faqs from './Screens/Faqs';
import ContactUs from './Screens/ContactUs';
import Products from './Screens/Products';
import Shops from './Screens/Shops';
import Bank from './Screens/Bank';
import Settings from './Screens/Settings';
import AdminProducts from './Screens/Admin/AdminProducts';
import AdminShops from './Screens/Admin/AdminShops';
import Unapprove from './Screens/Admin/Unapprove';
import AdminBank from './Screens/Admin/AdminBank';
import Approve from './Screens/Admin/Approve';
import Deals from './Screens/Deals';
import ShopManager from './Screens/ShopManager';

function App() {
  return (
    <div>

        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/faq' element={<Faqs/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/deals' element={<Deals/>} />
          <Route path='/shops' element={<Shops/>} />
          <Route path='/bank' element={<Bank/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/manager' element={<ShopManager/>} />

          {/* ADMIN */}
          <Route path='/adminproducts' element={<AdminProducts/>} />
          <Route path='/adminshops' element={<AdminShops/>} />
          <Route path='/unapprove' element={<Unapprove/>} />
          <Route path='/adminbank' element={<AdminBank/>} />
          <Route path='/approve' element={<Approve/>} />


        </Routes>

    </div>
  );
}

export default App;
