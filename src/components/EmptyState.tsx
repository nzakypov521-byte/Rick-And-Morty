import type { ActiveTabType } from "../types/types"

function EmptyState({ searchName, setActiveTab }: { searchName: string, setActiveTab: (tab: ActiveTabType) => void}) {
    return (
        <div className="flex flex-col bg-[#0E1311] h-full min-h-screen text-white px-43 pt-15 gap-4">
            <div className="w-full h-100 flex flex-col justify-center items-center gap-5">
                <div className="w-20 h-20 rounded-full border border-[#374641] bg-[#242d2ab7] flex items-center justify-center text-4xl text-white text-center">⌕</div>
                <div>Ничего не найдено</div>
                <div className="w-130 text-center text-[#8F9996]">По запросу {searchName} нет совпадений. Измените имя или сбросьте фильтр статуса.</div>
                <button onClick={() => {setActiveTab('all')}} className="w-flex h-flex px-5 py-3 box-border text-white rounded-xl hover:cursor-pointer bg-[#0E1311] border border-[#374641]">Сбросить фильтр</button>
            </div>
        </div>
    )
}

export default EmptyState