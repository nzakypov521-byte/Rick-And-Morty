

function CharacterCard( {name, status, species, image}: {name:string, status: string, species: string, image: string} ) {
  return (
    <div className="w-70 h-100 bg-[#19201E] rounded-2xl">
      <img
        className="rounded-t-2xl"
        src={`${image}`}
        alt=""
        loading="lazy" 
        crossOrigin="anonymous" 
      />
      <div className="flex flex-col px-5 pt-4">
        <div className="text-[#FFFFFF]">{name}</div>
        <div className="text-[#8F9996] text-sm">{species}</div>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row items-center gap-2">
            { status === 'Alive' ? <span className="h-2 w-2 rounded-full bg-[#11B743]"></span>: status==='Dead'? <span className="h-2 w-2 rounded-full bg-[#D63030]"></span>: <span className="h-2 w-2 rounded-full bg-[#747A78]"></span>}
            {status==='Alive'? 'Жив' : status==='Dead'? 'Мёртв' : 'Неизвестно'}
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
