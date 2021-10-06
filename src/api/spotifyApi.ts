import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import type {
    LikedSong,
    PaginatedReponse,
} from '../types/spotify'
import {
    CONSTANTS,
    createRequest,
} from '../utils'

export const spotifyApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.baseUrl }),
    endpoints: (builder) => ({
        getLatestLikedTrack: builder.query<PaginatedReponse<LikedSong>, void>({
            query: () => createRequest('me/tracks'),
        }),
    }),
    reducerPath: 'spotifyApi',
})

export const { useGetLatestLikedTrackQuery } = spotifyApi
