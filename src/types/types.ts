export type Character = {
    id: number,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    gender: string,
    image: string,
    origin: { name: string },
    location: { name: string },
    episode: string[]
}

export type ActiveTabType = 'all' | 'Alive' | 'Dead' | 'unknown'

export type DataFromApi = {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    },
    results: Character[]
}