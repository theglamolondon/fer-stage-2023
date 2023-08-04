import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/static/App.css';
import './assets/static/all.min.css';
import './assets/static/bootstrap.min.css';
import Accueil from './pages/accueil';
import Login from "./pages/login";
import UserReservations from "./pages/userReservation";
import AddProduct from "./pages/AddProduct";
import Factures from "./pages/factures";
import AddFacture from "./pages/AddFacture";
import DetailsFacture from "./pages/DetailsFacture";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/factures" element={<Factures />} />
        <Route path="/addProduit" element={<AddProduct />} />
        <Route path="/addFacture" element={<AddFacture />} />
        <Route path="/factures/details/:id" element={<DetailsFacture  />} />
        <Route path="/login" element={<Login  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
