import type { Character, DataFromApi } from "../types/types";
import type { ActiveTabType } from "../types/types";

export default async function getList(
  page: number,
  activeTab: ActiveTabType,
  searchName: string | null | undefined,
  signal?: AbortSignal,
): Promise<DataFromApi | null> {
  try {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (activeTab !== "all") {
      url += `&status=${activeTab}`;
    }

    if (searchName) {
      url += `&name=${searchName}`
    }
    const response = await fetch(url, { signal });

    const data = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error && e.name === "AbortError") {
      return null;
    }

    console.error(e);
    return null;
  }
}

export async function getCharacter(id: number | number[]):Promise<Character | null> {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${typeof id === 'number' ? id : id.join(',')}`)
    const data = await res.json();
    
    if (data.error) return null

    return data
    
  } catch(e) {
    console.error(e);
    
    return null
  }
}