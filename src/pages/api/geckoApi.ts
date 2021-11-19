import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { geckoRequest } from '../../utils'

import type { GetGeckoType } from './types/getGecko'

export const geckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins' }),
    endpoints: (builder) => ({
        getGecko: builder.query <GetGeckoType, string>({
            query: (coinId) => geckoRequest(`${coinId}`),
        }),
    }),
    reducerPath: 'geckoApi',
})

export const { useGetGeckoQuery } = geckoApi
