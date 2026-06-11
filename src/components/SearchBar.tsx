import { useState } from "react";
import { useDebouncedCallback  } from "use-debounce";

function SearchBar({
  setSearchName,
  setPage,
}: {
  setSearchName: (name: string) => void;
  setPage: (page: number) => void
}) {
  const [value, setValue] = useState('');

  const debouncedSearchName = useDebouncedCallback((val: string) => {
    if (val) {
      setSearchName(val);
      setPage(1)
    }
  }, 300);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentVal = e.target.value;
    setValue(currentVal)
    debouncedSearchName(currentVal)
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
      </form>
    </div>
  );
}

export default SearchBar;
