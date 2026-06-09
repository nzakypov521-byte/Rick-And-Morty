function ErrorNoData() {
    return (
        <div className="flex flex-col bg-[#0E1311] h-full min-h-screen text-white px-43 pt-15 gap-4">
            <div className="text-[#8F9996] text-2xl">Ошибка</div>
            <div className="w-full h-100 flex flex-col justify-center items-center gap-5">
                <div className="w-20 h-20 rounded-full border border-[#D63030] bg-[#242D2A] flex items-center justify-center text-4xl text-[#D63030] text-center">!</div>
                <div>Что-то пошло не так</div>
                <div className="w-130 text-center text-[#8F9996]">Не удалось загрузить персонажей. Проверьте соединение и попробуйте ещё раз.</div>
                <button className="w-flex h-flex px-5 py-3 box-border text-black rounded-xl hover:cursor-pointer bg-[#25e21f]">Повторить</button>
            </div>
        </div>
    )
}

export default ErrorNoData