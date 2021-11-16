import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import {
    CONSTANTS,
    createRequest,
} from '../../utils'

import type { GetCryptosQueryReponseType } from './types'

export const cryptoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query<GetCryptosQueryReponseType, number>({
            query: (parameters) => createRequest('ticker/', parameters),
        }),
    }),
    reducerPath: 'cryptoApi',
})

export const { useGetCryptosQuery } = cryptoApi
