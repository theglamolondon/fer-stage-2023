import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import CreateFacture from "./components/CreateFacture"
import CreateProduct from "./components/CreateProduct"
import ListProducts from "./components/ListProducts"
import ListFactures from "./components/ListFactures"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create_facture" element={<CreateFacture />} />
          <Route path="/create_product" element={<CreateProduct />} />
          <Route path="/list_product" element={<ListProducts />} />
          <Route path="/list_facture" element={<ListFactures />} />
          {/* Other routes can be added here */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
