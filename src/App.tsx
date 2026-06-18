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
        <Route path="/Rick-And-Morty/" element={<CatalogPage />} />
        <Route path="/Rick-And-Morty/character/:id" element={<CharacterDetail />} />
        <Route path="/Rick-And-Morty/favorites/character/:id" element={<CharacterDetail />} />
        <Route path="/Rick-And-Morty/favorites" element={<FavoritesPage />} />
        <Route path="/Rick-And-Morty/*" element={<NotFoundPage />} />
      </Routes>
    </FavProvider>
  );
}

export default App;
