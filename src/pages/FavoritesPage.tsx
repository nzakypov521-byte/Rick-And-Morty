import Header from "../components/Header";
import useFavChars from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import type { Character, DataFromApi } from "../types/types";
import { getCharacter } from "../api/api";
import CharacterList from "./../components/CharacterList";

function FavoritesPage() {
  const { favs, toggleFav } = useFavChars();
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    if (!favs || favs.length === 0) {
      return;
    }

    getCharacter(favs)
      .then((result) => {
        if (result) setData(Array.isArray(result) ? result : [result]);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });
  }, [favs]);

  const dataForList: DataFromApi = {
    results: data || [],
  };

  return (
    <div className="h-screen">
      <Header></Header>
      <div className="bg-[#0E1311] w-full flex-1 px-43 flex flex-col gap-5 py-20">
        <div className="text-[#FFFFFF] text-4xl">Избранное</div>
        <div className="text-[#8F9996] text-xl">{favs.length} персонажа</div>
        <CharacterList
          favs={favs}
          toggleFav={toggleFav}
          fullData={dataForList}
        ></CharacterList>
      </div>
    </div>
  );
}

export default FavoritesPage;
