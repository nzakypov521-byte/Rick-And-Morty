import type { DataFromApi } from "../types/types";

export default async function getList(page: number, signal?: AbortSignal): Promise<DataFromApi | null> {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
      { signal }
    );

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
