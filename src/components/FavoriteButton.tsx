function FavoriteButton({ id, favs, toggleFav} : {id:number, favs: number[], toggleFav: (id: number) => void}) {


    return (
            <button className={`w-10 h-10 border hover:cursor-pointer rounded-2xl border-[#${favs.includes(id) ? '11B743' : '8F9996'}] flex justify-center items-center`} onClick={(event) => {
                event.stopPropagation();
                event.preventDefault()
                toggleFav(id)}}>{favs.includes(id) ? '💚': '♡'}</button>
    )
}

export default FavoriteButton