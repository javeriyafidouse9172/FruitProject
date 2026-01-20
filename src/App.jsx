
import React from 'react'
import FruitContener from './component/FruitContener'
import VegetableContainer from './component/VegetableContainer'
import ChocolateContainer from './component/ChocolateContainer'
import SnacksContainer from './component/SnacksContainer'
import IceCreamContainer from './component/IceCreamContainer'
import Home from './component/Home'
import Nav from './component/Nav'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contex/CartContext";
import Cart from './component/Cart'
import Checkout from './component/Checkout'
import Profile from './pages/Profile';

const App = () => {
  return (
    <CartProvider>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<FruitContener />} />
        <Route path="/vegetable" element={<VegetableContainer />} />
        <Route path="/chocolate" element={<ChocolateContainer />} />
        <Route path="/snacks" element={<SnacksContainer />} />
        <Route path="/ice-cream" element={<IceCreamContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
};

export default App;

