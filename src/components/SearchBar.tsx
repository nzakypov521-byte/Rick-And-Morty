function SearchBar() {
  return (
    <div>
      <div className="w-200 flex flex-row bg-[#19201E] rounded-md p-2 box-border gap-3 shadow-[0_0_15px_rgba(0,0,0,0.7)] items-center">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <input
          type="text"
          placeholder="Поиск по имени..."
          className="focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
