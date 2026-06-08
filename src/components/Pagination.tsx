function Pagination({ setPageFunction }: {setPageFunction: (string) => void}) {
    return (
        <div className="flex flex-row w-full justify-center items-center gap-3 py-10">
            <button onClick={() => (setPageFunction('back'))} className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] text-[#8F9996] rounded-md">Назад</button>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">1</button>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">2</button>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">3</button>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">4</button>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">5</button>
            <div>...</div>
            <button className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] rounded-md">6</button>
            <button onClick={() => (setPageFunction('forward'))} className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] text-[#8F9996] rounded-md">Вперёд</button>
        </div>
    )
}

export default Pagination