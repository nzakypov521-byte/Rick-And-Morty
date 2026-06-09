function Pagination({ setPageFunction }: {setPageFunction: (pageMove: string) => void}) {
    return (
        <div className="flex flex-row w-full justify-center items-center gap-3 py-10">
            <button onClick={() => (setPageFunction('back'))} className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] text-[#8F9996] rounded-md">Назад</button>
            <button onClick={() => (setPageFunction('forward'))} className="flex justify-center hover:cursor-pointer items-center box-border px-3 py-2 bg-[#19201E] text-[#8F9996] rounded-md">Вперёд</button>
        </div>
    )
}

export default Pagination