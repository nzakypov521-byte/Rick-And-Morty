function SearchBar() {
  return (
    <div>
      <div className="w-175 flex flex-row bg-[#19201E] rounded-md p-2 box-border gap-3 shadow-[0_0_15px_rgba(0,0,0,0.7)] items-center">
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
