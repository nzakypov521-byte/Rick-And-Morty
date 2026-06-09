
import Header from "../components/Header"

function FavoritesPage() {


    return (
        <div className="h-screen overflow-y-hidden">
            <Header></Header>
            <div className="bg-[#0E1311] w-full h-full px-43 flex flex-col gap-5 py-20">
                <div className="text-[#FFFFFF] text-4xl">Избранное</div>
                <div className="text-[#8F9996] text-xl">3 персонажа</div>
                
            </div>
        </div>
    )
}

export default FavoritesPage