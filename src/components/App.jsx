import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-dom';
import Navbar from './Navbar';  // Correct import without curly braces
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <Navbar cartCount={5} />  {/* Example cartCount prop */}
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router> 
  );
}

export default App; 