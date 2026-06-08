import "../App.css";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import getList from "../api/api";
import { useEffect, useState } from "react";
import type { DataFromApi } from "../types/types";
import Loader from "./Loader";

function App() {
  const [data, setData] = useState<DataFromApi | null>();
  const [page, setPage] = useState<number>(2);

  function setPageFunction(pageMove: string) {
    const maxPages = data?.info?.pages || 42;

    if (pageMove === "back" && page > 1) {
      setPage((prev) => prev - 1);
    }

    if (pageMove === "forward" && page < maxPages) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    getList(page).then((result) => {
      if (result) setData(result);
    });
  }, [page]);

  return (
    <div className="flex flex-col box-border">
      <Header></Header>
      <div className="flex flex-col bg-[#0E1311] h-full min-h-screen text-white px-43 pt-8 gap-4">
        <div>Каталог персонажей</div>
        <div>826 персонажей · показаны 1–14</div>
        <div className="flex flex-row justify-between">
          <SearchBar></SearchBar>
          <StatusFilter></StatusFilter>
        </div>
        <div>
          { data ? (
            <CharacterList fullData={data}></CharacterList>
          ) : (
            <Loader></Loader>
          )}
        </div>
        <div>
          <Pagination setPageFunction={setPageFunction}></Pagination>
        </div>
      </div>
    </div>
  );
}

export default App;
