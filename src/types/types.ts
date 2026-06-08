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

export type ActiveTabType = 'all' | 'alive' | 'dead' | 'unknown'