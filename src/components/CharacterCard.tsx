import { NavLink } from "react-router-dom";


function CharacterCard( {id, name, status, species, image}: {id:number, name:string, status: string, species: string, image: string} ) {
  return (
    <NavLink to={`character/${id}`} className="w-70 h-100 bg-[#19201E] rounded-2xl hover:cursor-pointer">
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
    </NavLink>
  );
}

export default CharacterCard;
