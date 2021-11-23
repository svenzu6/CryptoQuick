import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { geckoRequest } from '../../utils'

import type {
    GetGlobalType,
    GlobalType,
} from './types/getGlobal'
import type { GetListType } from './types/getList'

export const geckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    endpoints: (builder) => ({
        getGlobal: builder.query<GetGlobalType<GlobalType>, void>({
            query: () => geckoRequest('/global'),
        }),
        getList: builder.query<GetListType, string>({
            query: (count) =>
                geckoRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1`),
        }),
    }),
    reducerPath: 'geckoApi',
})

export const { useGetGlobalQuery, useGetListQuery } = geckoApi
