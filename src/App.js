import { Customer } from './Customer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Seller} from "./Seller.js"
import SellerData from "./SellerData.js"
import Random from "./Random.js"
import fireStoreData from "./fireStoreData.js"
import CardC from './CardC.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
      <Routes>
        <Route path='/Seller' element={<Seller/>}/>
      </Routes>
      <Routes>
        <Route path='/SellerData' element={<SellerData />}/>
      </Routes>
      <Routes>
        <Route path='/random' element={<Random />}/>
      </Routes>
      <Routes>
        <Route path='/card' element={<CardC />}/>
      </Routes>
    </Router>


  );
}

export default App;
