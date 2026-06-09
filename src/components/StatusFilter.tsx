import type { ActiveTabType } from '../types/types'

function StatusFilter( { activeTab, setActiveTab}: { activeTab: ActiveTabType, setActiveTab: (tab: ActiveTabType) => void}) {

    return (
        <div className={`flex flex-row items-center w-90 justify-between bg-[#19201E] rounded-md px-3 py-1 shadow-[0_0_15px_rgba(0,0,0,0.7)]`}>
            <button onClick={() => {setActiveTab('all')}} className={`hover:cursor-pointer flex flex-row items-center gap-2 ${activeTab == 'all' ? 'bg-[#242D2A]' : 'bg-[#19201E]'} rounded-xl w-35 h-full items-center justify-center`}>Все</button>
            <button onClick={() => {setActiveTab('Alive')}} className={`hover:cursor-pointer flex flex-row items-center gap-2 ${activeTab == 'Alive' ? 'bg-[#242D2A]' : 'bg-[#19201E]'} rounded-xl w-35 h-full items-center justify-center`}>
                <span className="h-2 w-2 rounded-full bg-[#11B743]"> </span>
                Жив
            </button>
            <button onClick={() => {setActiveTab('Dead')}} className={`hover:cursor-pointer flex flex-row items-center gap-2 ${activeTab == 'Dead' ? 'bg-[#242D2A]' : 'bg-[#19201E]'} rounded-xl w-35 h-full  items-center justify-center`}>
            <span className="h-2 w-2 rounded-full bg-[#D63030]"> </span>
                Мёртв
            </button>
            <button onClick={() => {setActiveTab('unknown')}} className={`hover:cursor-pointer flex flex-row items-center gap-2 ${activeTab == 'unknown' ? 'bg-[#242D2A]' : 'bg-[#19201E]'} rounded-xl h-full w-35 items-center justify-center`}>
            <span className="h-2 w-2 rounded-full bg-[#747A78]"> </span>
                Неизвестно
            </button>
        </div>
    )
}

export default StatusFilter 