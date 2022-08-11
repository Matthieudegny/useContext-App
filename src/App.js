import Nav from "./Components/Nav"
import Products from './Components/Products';
import Checkout from "./Components/Checkout";
import { Routes,Route} from "react-router-dom"
import { CartProvider } from './CartContext' 

import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Nav/>
        <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
