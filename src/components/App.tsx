
import "../App.css"
import CharacterList from "./CharacterList";
import Header from "./Header"
import Pagination from "./Pagination";
import SearchBar from './SearchBar';
import StatusFilter from "./StatusFilter";
import getList from "../api/api"
import { useEffect, useState } from "react";
import type { DataFromApi } from "../types/types";
import Loader from "./Loader";

function App() {
  const [data, setData] = useState<DataFromApi | null>()

  useEffect(() => {
    getList().then((result) => {
      setData(result)
    })
  },[])

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
          {data ? <CharacterList fullData={data}></CharacterList> : <Loader></Loader>}
        </div>
        <div>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  )
}

export default App
