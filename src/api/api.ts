export default async function getList(page: number, signal?: AbortSignal) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
      { signal }
    );

    const data = await response.json();

    console.log(data);
    return data;
  } catch (e) {
    if (e.name === "AbortError") {
      return null;
    }

    console.error(e);
    return null;
  }
}
