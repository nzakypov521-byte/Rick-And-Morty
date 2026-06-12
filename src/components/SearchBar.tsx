import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

function SearchBar({
  setSearchName,
  setPage,
}: {
  setSearchName: (name: string) => void;
  setPage: (page: number) => void
}) {

  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 400)

  useEffect(() => {
    setSearchName(debouncedValue)

    setPage(1)
  },[debouncedValue, setSearchName, setPage])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentVal = e.target.value;
    setValue(currentVal)

  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="w-175 flex flex-row bg-[#19201E] rounded-md p-2 box-border gap-3 shadow-[0_0_15px_rgba(0,0,0,0.7)] items-center"
      >
        <input
          name="search"
          id="search"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Поиск по имени..."
          className="focus:outline-none w-full"
        />
        <button onClick={() => { setValue('')}} className="w-5 h-5 flex items-center justify-center text-2xl text-white hover:cursor-pointer">×</button>
      </form>
    </div>
  );
}

export default SearchBar;
