export default async function getList(page: number) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)

    const data = await response.json()

    console.log(data); 
    return data
  }
  catch(e) {
    console.error(e);
    
  }
}
