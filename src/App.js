import Nav from "./Components/Nav"
import Products from './Components/Products';
import Checkout from "./Components/Checkout";
import { Routes,Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
        <Route path="/" element={<Products />}/>
        {/* <Route path="/checkout" element={<Checkout />} /> */}
     </Routes>
    </div>
  );
}

export default App;
