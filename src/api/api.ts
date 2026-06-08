export default async function getList() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=&name=&status=")

    const data = await response.json()

    console.log(data); 
    return data
  }
  catch(e) {
    console.error(e);
    
  }
}
