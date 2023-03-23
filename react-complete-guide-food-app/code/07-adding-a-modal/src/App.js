import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  // create a state to track if the cart moal is shown or not
  const [cartIsShown, setCartIsShown] = useState(false);

  // a callback function to pass to cart component that will toggle the cartIsShown state
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // a callback function to pass to cart component that will toggle the cartIsShown state
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
