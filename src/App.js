import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, NavBar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const updateCartQuantity = async (productid, quantity) => {
    const { cart } = await commerce.cart.update(productid, {quantity});

    setCart(cart);
  } 

  const rmFromCart = async (productid) => {
    const { cart } = await commerce.cart.remove(productid);

    setCart(cart);
  } 
  
  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
  }

  useEffect(() => {
   fetchProducts();
    fetchCart();
  })
  console.log(cart);

  return (
    <Router>
      <NavBar totalItems={cart.total_items} />
      <Switch>
        <Route exact path='/'>
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path='/cart'>
          <Cart cart={cart} updateCartQuantity={updateCartQuantity} rmFromCart={rmFromCart} emptyCart={emptyCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
