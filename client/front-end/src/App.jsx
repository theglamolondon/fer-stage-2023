import "./App.css";
import ListCustomers from './components/ListCustomers';
import Add from './components/Add';
import ListProducts from "./components/ListProducts";
import NavBar from "./components/NavBar";

import { Routes, Route, } from "react-router-dom";
import AddCustomers from "./components/AddCustomers";

function App() {
  return (
    <div className="App">
        <NavBar/>

        <Routes>
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/add" element={<Add />} />
          <Route path="/customers" element={<ListCustomers />} />
          <Route path="/customers/add" element={<AddCustomers />} />
    
        </Routes>
    </div>
  );
}

export default App;
