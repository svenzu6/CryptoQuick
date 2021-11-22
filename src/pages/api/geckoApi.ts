import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { geckoRequest } from '../../utils'

import type { GetListType } from './types/getList'

export const geckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins' }),
    endpoints: (builder) => ({
        getList: builder.query<GetListType, string>({
            query: (count) => geckoRequest(`/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1`),
        }),
    }),
    reducerPath: 'geckoApi',
})

export const { useGetListQuery } = geckoApi
