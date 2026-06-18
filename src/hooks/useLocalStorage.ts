import { useState } from "react"


export default function useFavChars() {
    const [favs, setFavs] = useState<number[]>(() => {
        const data = localStorage.getItem('FavChars');
        const parsed = data ? JSON.parse(data) : null;
        return parsed ? parsed : [];
      })
    const toggleFav = (id: number) => {
        const Exist = favs.includes(id)

        const newData = Exist ? favs.filter((item) => item !== id) : [...favs,id]

        setFavs(newData)
        localStorage.setItem('FavChars',JSON.stringify(newData))
    }

    return {favs, toggleFav}
}
    