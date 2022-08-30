import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './Components/CartPage';
import Category from './Components/Category';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  // cart array
  const [productCart, setProductCart] = useState([]);

  // products array
  const [products, setProducts] = useState([
    { id: 2000, category: "Shoes", name: 'SUPERSTAR BLACK', image: 'images/2000.png', price: 191 },
    { id: 2001, category: "Shoes", name: 'SUPER SLEEK 3 BROWN', image: 'images/2001.png', price: 399 },
    { id: 2002, category: "Shoes", name: 'SUPERSTAR SHOES', image: 'images/2002.png', price: 299 },
    { id: 2003, category: "Shoes", name: 'SMITH PRIDE SHOES', image: 'images/2003.png', price: 699 },
    { id: 2004, category: "Shoes", name: 'SUPERSTAR OT TECH', image: 'images/2004.png', price: 259 },

    { id: 2005, category: "Trousers", name: 'Carrot-Fit Grey', image: 'images/p1.png', price: 900 },
    { id: 2006, category: "Trousers", name: 'Houndstooth Carrot-Fit', image: 'images/p2.png', price: 899 },
    { id: 2007, category: "Trousers", name: 'Indigo Carrot-Fit Blue', image: 'images/p3.png', price: 899 },
    { id: 2008, category: "Trousers", name: 'Blue Trousers', image: 'images/p4.png', price: 999 },
    { id: 2009, category: "Trousers", name: 'Indigo Checkered Blue', image: 'images/p5.png', price: 890 },

    { id: 2010, category: "T-Shirts", name: 'Olive green T-Shirt', image: 'images/t1.png', price: 359 },
    { id: 2011, category: "T-Shirts", name: 'Casual grey T-shirt', image: 'images/t2.png', price: 499 },
    { id: 2012, category: "T-Shirts", name: 'Casual Daily Wear T-shirt', image: 'images/t3.png', price: 599 },
    { id: 2013, category: "T-Shirts", name: 'Formal office  T-shirt', image: 'images/t4.png', price: 809 },
    { id: 2014, category: "T-Shirts", name: 'Relaxed sea-green T-shirt', image: 'images/t5.png', price: 839 },
    { id: 2015, category: "T-Shirts", name: 'Plaful Color T-shirt', image: 'images/t6.png', price: 699 },

    { id: 2016, category: "Shirts", name: 'Formal office Look', image: 'images/s1.png', price: 899 },
    { id: 2017, category: "Shirts", name: 'Elegant Party Formal', image: 'images/s2.png', price: 899 },
    { id: 2018, category: "Shirts", name: 'Vertical Striped Formal Shirt', image: 'images/s3.png', price: 999 },
    { id: 2019, category: "Shirts", name: 'Formal Dotted Shirt', image: 'images/s4.png', price: 890 },
    { id: 2020, category: "Shirts", name: 'Office Semi-Formal Attire', image: 'images/s5.png', price: 890 }]);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar setProductCart={setProductCart} productCart={productCart}/>
      <Routes>
        {/* home */}
        <Route path='/' element={<Home />} />
        {/* category */}
        <Route path="/category" element={<Category products={products} setProductCart={setProductCart} productCart={productCart}/>} />
        {/* shop page */}
        <Route path="/shop" element={<Shop products={products} setProductCart={setProductCart} productCart={productCart}/>} />
        {/* cart page */}
        <Route path="/cartPage" element={<CartPage setProductCart={setProductCart} productCart={productCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
