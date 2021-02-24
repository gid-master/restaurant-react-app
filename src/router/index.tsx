import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Account from '@/pages/Account';
import Product from '@/pages/Product';
import Error from '@/pages/Error';
import Menu from '@/pages/Menu';
import Checkout from '@/pages/Checkout';
import Login from '@/pages/Login';
import { useSelector } from 'react-redux';
import { getAuthenticated } from '@/store/ducks/user/selector';




const Router: React.FC = () => {

  const authenticated:boolean = useSelector(getAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/login" element={authenticated ? <Navigate to="/account" /> : <Login />}  />
      <Route path="/account" element={authenticated ? <Account /> : <Navigate to="/login" />}  />
      <Route path="/menu" element={<Menu />}  />
      <Route path="/checkout" element={<Checkout />}  />
      <Route path="/product/:id" element={<Product />}  />
      <Route path="/error/:id" element={<Error />}  />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  )
}
  
export default Router;