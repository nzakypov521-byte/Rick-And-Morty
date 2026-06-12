import { NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getCharacter } from "../api/api";
import { useEffect, useState } from "react";
import type { Character } from "../types/types";
import NotFoundPage from "../components/NotFoundPage";

function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Character | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getCharacter(Number(id)).then((res) => {
      setData(res);
      setIsLoading(false)
    });
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      { isLoading ? (
        <div className="w-full bg-[#0E1311] px-43 py-20 text-white flex flex-col gap-40 ">
        <NavLink to='/' className="text-[#8F9996]">К каталогу</NavLink>
          <div className="flex flex-row w-full items-center gap-19">
            <img className="w-110 h-110 rounded-3xl" src='' alt="" />
            <div className="w-full flex flex-col gap-5 h-full items-start py-2">
              <div className="text-4xl font-bold"></div>
              <div className="flex flex-row items-center gap-3">
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Вид</div>
                  <div></div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Пол</div>
                  <div></div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Происхождение</div>
                  <div></div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Локация</div>
                  <div></div>
                </div>
                <div className="w-full h-15 border-t border-b border-[#19201E] flex items-center">
                <div className="w-50 text-[#8F9996]">Эпизоды</div>
                <div className="flex-wrap w-200"></div>        
                </div>
              </div>
            </div>
          </div>
      </div>
      ) : ( data ? (
        <div className="w-full flex-1 bg-[#0E1311] px-43 py-20 text-white flex flex-col gap-40 ">
        <NavLink to='/' className="text-[#8F9996]">К каталогу</NavLink>
          <div className="flex flex-row w-full items-center gap-19">
            <img className="w-110 h-110 rounded-3xl" src={data.image} alt="" />
            <div className="w-full flex flex-col gap-5 h-full items-start py-2">
              <div className="text-4xl font-bold">{data.name}</div>
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2">
                  {data.status === "Alive" ? (
                    <span className="h-2 w-2 rounded-full bg-[#11B743]"></span>
                  ) : data.status === "Dead" ? (
                    <span className="h-2 w-2 rounded-full bg-[#D63030]"></span>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-[#747A78]"></span>
                  )}
                  {data.status === "Alive"
                    ? "Жив"
                    : data.status === "Dead"
                    ? "Мёртв"
                    : "Неизвестно"}
                </div>
                ·<div className="text-[#8F9996]">{data.species}</div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Вид</div>
                  <div>{data.species}</div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Пол</div>
                  <div>{data.gender}</div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Происхождение</div>
                  <div>{data.origin.name}</div>
                </div>
                <div className="w-full h-10 border-t border-[#19201E] flex items-center">
                  <div className="w-50 text-[#8F9996]">Локация</div>
                  <div>{data.location.name}</div>
                </div>
                <div className="w-full h-15 border-t border-b border-[#19201E] flex items-center">
                <div className="w-50 text-[#8F9996]">Эпизоды</div>
                <div className="flex-wrap w-200">{data.episode.map((item) => {
                    const parts = item.split("/");
                    return `${parts.at(-1)} `;
                  })}</div>        
                </div>
              </div>
            </div>
          </div>
      </div>
      ) : <NotFoundPage></NotFoundPage>)}
    </div>
  );
}

export default CharacterDetail;
