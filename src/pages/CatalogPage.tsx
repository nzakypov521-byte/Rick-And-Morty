import CharacterList from "../components/CharacterList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import getList from "../api/api";
import { useEffect, useState } from "react";
import type { DataFromApi } from "../types/types";
import Loader from "../components/Loader";
import ErrorNoData from "../components/ErrorNoData";

function CatalogPage() {
  const [data, setData] = useState<DataFromApi | null>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  function setPageFunction(pageMove: string) {
    if (isLoading) return
    const maxPages = data?.info?.pages || 42;

    if (pageMove === "back" && page > 1) {
      setIsLoading(true);
      setPage((prev) => prev - 1);
    }

    if (pageMove === "forward" && page < maxPages) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller


    getList(page, signal).then((result) => {
      if (result) setData(result);
    }) .catch((err) => {
      if (err.name !== 'AbortError') {
        console.error(err);
      }
    }).finally(() => {
      setIsLoading(false);
    })

    return () => {
      controller.abort();
    };

  }, [page]);

  return (
    <div className="flex flex-col box-border overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <Header></Header>
      {
        !data ? ((<ErrorNoData></ErrorNoData>)) : 
      <div className="flex flex-col bg-[#0E1311] h-full min-h-screen text-white px-43 pt-8 gap-4">
        <div>Каталог персонажей</div>
        <div>{data?.info?.count} персонажей · показаны {(page - 1) * 20 + 1}–{Math.min(page * 20, data?.info?.count ?? 0)}</div>
        <div className="flex flex-row justify-between">
          <SearchBar></SearchBar>
          <StatusFilter></StatusFilter>
        </div>
        <div>
          { isLoading ? (
            <Loader></Loader>
          ) : ( <CharacterList fullData={data}></CharacterList>
          )}
        </div>
        <div>
          <Pagination setPageFunction={setPageFunction}></Pagination>
        </div>
      </div>
       }
    </div>
  );
}

export default CatalogPage;
