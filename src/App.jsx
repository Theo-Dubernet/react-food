import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Plat from "./components/Plat";
import ListIngredient from "./components/ingredient";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/plat">Plat</Link>
            </li>
            <li>
              <Link to="/ingredient">Ingrédient</Link>
            </li>
          </ul>
        </nav>

        <h1>Bienvenue chez maïté</h1>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8-lCVMAZBhM?si=3x3IzmiYOZ21TmdA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Routes>
          <Route path="/plat" element={<Plat />} />
          <Route path="/ingredient" element={<ListIngredient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
