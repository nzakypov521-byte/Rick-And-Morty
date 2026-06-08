import { NavLink } from "react-router"

function Header() {
    return (
        <div className="w-flex h-15 bg-[#0E1311] flex flex-row justify-between text-[#FFFFFF] border-b-[#242D2A] border-b px-43">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-3 w-3 rounded-sm bg-[#11B743]"></div>
                <div className="flex flex-row gap-1">
                    <div className="text-[#FFFFFF]">RICK</div>
                    <div className="text-[#8F9996]">&</div>
                    <div className="text-[#FFFFFF]">MORTY</div>
                </div>
                <div className="text-[#8F9996]">Каталог</div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <NavLink to='/'>Каталог</NavLink>
                <NavLink to='/favorites' className="flex flex-row items-center gap-2">
                    Избранное
                     <div>0</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header