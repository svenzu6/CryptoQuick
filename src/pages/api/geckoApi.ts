import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { geckoRequest } from '../../utils'

import type { GetGlobalType } from './types/getGlobal'
import type {
    CoinType,
    GetListType,
} from './types/getList'

type GlobalStats = {
    totalMarketCap: number
    markets: number
    totalCurrencies: number
}

export const geckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    endpoints: (builder) => ({
        getGlobal: builder.query<GlobalStats, void>({
            query: () => geckoRequest('/global'),
            transformResponse: (response: GetGlobalType) => {
            console.log(response)

                return {
                    markets: response.data.markets,
                    totalCurrencies: response.data.active_cryptocurrencies,
                }
            },
        }),
        getList: builder.query<CoinType[], number>({
            query: (count) =>
                geckoRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1`),
            transformResponse: (response: GetListType[]) => {
                return response.map((coin) => {
                    return {
                        currentPrice: coin.current_price,
                        id: coin.id,
                        image: coin.image,
                        marketCap: {
                            dailyChange: coin.market_cap_change_percentage_24h,
                            rank: coin.market_cap_rank,
                            value: coin.market_cap,
                        },
                        name: coin.name,
                    }
                })
            },
        }),
    }),
    reducerPath: 'geckoApi',
})

export const { useGetGlobalQuery, useGetListQuery } = geckoApi
