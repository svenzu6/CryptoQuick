import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const musicApiHeaders = {
    'Accept': 'application/json',
    // eslint-disable-next-line max-len
    'Authorization': 'fakeid',
}

// TODO: move to contants file
const baseUrl = 'https://api.spotify.com/v1'

// TODO: move to utils folder
const createRequest = (url: string) => ({ headers: musicApiHeaders, url: url })

export const musicApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getArtists: builder.query({
            query: () => createRequest('/artists/2CnhqfjUG0qzsru0SMuhrk'),
        }),
    }),
    reducerPath: 'musicApi',
})

export const {
    useGetArtistsQuery,
} = musicApi
