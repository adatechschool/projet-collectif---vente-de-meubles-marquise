import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import PageAccueil from "./pages/PageAccueil";
import NosProduits from './pages/NosProduits';
import Nouveaute from './pages/Nouveaute';
import Promotions from './pages/Promotions';
import Favoris from './pages/Favoris';
import Panier from './pages/Panier';
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<PageAccueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/nosproduits" element={<NosProduits />} />
          <Route path="/nouveaute" element={<Nouveaute />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/favoris" element={<Favoris />} />
        </Route >
      </Routes>
    </Router>
  );
}

export default App;