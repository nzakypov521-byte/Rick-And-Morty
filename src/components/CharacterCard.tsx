function CharacterCard() {
  return (
    <div className="w-70 h-100 bg-[#19201E]">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt=""
      />
      <div className="flex flex-col px-5 pt-4">
        <div className="text-[#FFFFFF]">Rick Sanchez</div>
        <div className="text-[#8F9996] text-sm">Human</div>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#11B743]"></span>
            Жив
          </div>
          <button>FavBtn</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
