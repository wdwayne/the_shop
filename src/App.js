import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, NavBar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  // const fetchProducts = async () => {
  //   const {data} = await commerce.products.list();

  //   setProducts(data);
  // }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
   // fetchProducts();
    fetchCart();
  })

  console.log(cart);

  return (
    <div>
      <NavBar cartQuan={cart.total_items} />
      <Cart cart={cart} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
    </div>
  );
}

export default App;
