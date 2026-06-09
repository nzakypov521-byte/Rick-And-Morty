import type { DataFromApi } from "../types/types";
import type { ActiveTabType } from "../types/types";

export default async function getList(
  page: number,
  activeTab: ActiveTabType,
  signal?: AbortSignal,
): Promise<DataFromApi | null> {
  try {
    let url = `https://rickandmortyapi.com/api/character?page=${page}}`;

    if (activeTab !== "all") {
      url += `&status=${activeTab}`;
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
