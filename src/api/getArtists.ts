import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import {
    CONSTANTS,
    createRequest,
} from '../utils'

export const artistsQueryApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.baseUrl }),
    endpoints: (builder) => ({
        getArtists: builder.query({
            query: () => createRequest('/me/following?type=artist&limit=10'),
        }),
    }),
    reducerPath: 'musicApi',
})

export const { useGetArtistsQuery } = artistsQueryApi
