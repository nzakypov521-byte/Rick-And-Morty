
import "../App.css"
import CharacterList from "./CharacterList";
import Header from "./Header"
import Pagination from "./Pagination";
import SearchBar from './SearchBar';
import StatusFilter from "./StatusFilter";

function App() {

  return (
    <div className="flex flex-col box-border">
      <Header></Header>
      <div className="flex flex-col bg-[#0E1311] h-full text-white px-80 pt-8 gap-4">
        <div>Каталог персонажей</div>
        <div>826 персонажей · показаны 1–14</div>
        <div className="flex flex-row justify-between">
          <SearchBar></SearchBar>
          <StatusFilter></StatusFilter>
        </div>
        <div>
          <CharacterList></CharacterList>
        </div>
        <div>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  )
}

export default App
