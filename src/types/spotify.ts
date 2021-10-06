export type PaginatedReponse<T> = {
   href: string
   items: T[]
   limit: number
   next: string
   offset: number
   previous: string
   total: number
}

export type LikedSong = {
    added_at: string
    track: TrackType
}

export type TrackType = {
    name: string
    artists: ArtistsType[]
    preview_url: string
}

export type ArtistsType = {
    name: string
}
