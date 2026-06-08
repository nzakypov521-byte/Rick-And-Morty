import "./App.css";
import { Route, Routes } from 'react-router-dom'

import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      {/* <Route path="/character/:id" element={<CharacterPage />} /> */}
      <Route path="/favorites" element={<FavoritesPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
