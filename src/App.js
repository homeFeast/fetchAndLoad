import { Customer } from './Customer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Seller} from "./Seller.js"
import SellerData from "./SellerData.js"
function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
      <Routes>
        <Route path='/Seller' element={<Seller/>}/>
      </Routes> */}
      <Routes>
        <Route path='/SellerData' element={<SellerData />}/>
      </Routes>
    </Router>
  );
}

export default App;
