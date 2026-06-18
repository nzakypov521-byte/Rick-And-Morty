import CharacterCard from "./CharacterCard"
import type { DataFromApi } from "../types/types"

function CharacterList({ toggleFav, favs, fullData }: { fullData: DataFromApi , toggleFav: (id:number) => void, favs: number[]}) {
    return (
        <div className="flex flex-wrap gap-10">
            { fullData.results?.map((item) => (
                <CharacterCard id={item.id} name={item.name} favs={favs} toggleFav={toggleFav} image={item.image} status={item.status} key={item.id} species={item.species}></CharacterCard>
            ))}
        </div>
    )
}

export default CharacterList