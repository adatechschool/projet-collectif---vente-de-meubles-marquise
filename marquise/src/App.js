import "./App.css";
import ConnexionInscription from "./pages/ConnexionInscription";
import PageAccueil from "./pages/PageAccueil";
import NosProduits from './pages/NosProduits';
import Nouveaute from './pages/Nouveaute';
import Promotions from './pages/Promotions';
import Favoris from './pages/Favoris';
import Panier from './pages/Panier';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/connexion" element={<ConnexionInscription />} />
        <Route path="/nosproduits" element={<NosProduits />} />
        <Route path="/nouveaute" element={<Nouveaute />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/favoris" element={<Favoris />} />
        
      </Routes>
    </Router>
  );
}

export default App;
