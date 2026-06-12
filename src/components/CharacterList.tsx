import CharacterCard from "./CharacterCard"
import type { DataFromApi } from "../types/types"

function CharacterList({ fullData }: { fullData: DataFromApi}) {
    return (
        <div className="flex flex-wrap gap-10">
            { fullData.results?.map((item) => (
                <CharacterCard id={item.id} name={item.name} image={item.image} status={item.status} key={item.id} species={item.species}></CharacterCard>
            ))}
        </div>
    )
}

export default CharacterList