import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Plat from "./components/Plat";
import ListIngredient from "./components/ingredient";
import Acceuil from "./components/Accueil";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/plat">Plat</Link>
            </li>
            <li>
              <Link to="/ingredient">Ingrédient</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/plat" element={<Plat />} />
          <Route path="/ingredient" element={<ListIngredient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
