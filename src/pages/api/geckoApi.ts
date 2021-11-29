import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { geckoRequest } from '../../utils'

import type {
    ExchangesStats,
    ExchangesTypes,
} from './types/getExchanges'
import type {
    GetGlobalType,
    GlobalStats,
} from './types/getGlobal'
import type {
    CoinType,
    GetListType,
} from './types/getList'

export const geckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    endpoints: (builder) => ({
        getExchanges: builder.query<ExchangesStats[], void>({
            query: () => geckoRequest('/exchanges?per_page=50&page=1'),
            transformResponse: (response: ExchangesTypes[]) => {
                return response.map((exchange) => {
                    return {
                        id: exchange.id,
                        image: exchange.image,
                        name: exchange.name,
                        rank: exchange.trust_score_rank,
                        tradeVolume: exchange.trade_volume_24h_btc,
                        url: exchange.url,
                    }
                })
            },
        }),
        getGlobal: builder.query<GlobalStats, void>({
            query: () => geckoRequest('/global'),
            transformResponse: (response: GetGlobalType) => {
                return {
                    marketCapChange: response.data.market_cap_change_percentage_24h_usd,
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

export const { useGetExchangesQuery, useGetGlobalQuery, useGetListQuery } = geckoApi
