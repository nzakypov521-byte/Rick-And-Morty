import "./App.css";
import { Route, Routes } from "react-router-dom";

import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import CharacterDetail from "./pages/CharacterDetail";
import NotFoundPage from "./components/NotFoundPage";
import { FavProvider } from "./hooks/favContext";

function App() {
  return (
    <FavProvider>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </FavProvider>
  );
}

export default App;
