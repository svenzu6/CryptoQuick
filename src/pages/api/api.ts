import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import type {
    CoinPayloadType,
    CoinType,
    ExchangePayloadType,
    ExchangeType,
    GlobalStatsPayloadType,
    GlobalStatsType,
} from './api.types'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    endpoints: (builder) => ({
        getExchanges: builder.query<ExchangeType[], void>({
            query: () => {
                return { url: '/exchanges?per_page=50&page=1' }
            },
            transformResponse: (response: ExchangePayloadType[]) => {
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
        getGlobalStats: builder.query<GlobalStatsType, void>({
            query: () => {
                return { url: '/global' }
            },
            transformResponse: (response: GlobalStatsPayloadType) => {
                return {
                    marketCapChange: response.data.market_cap_change_percentage_24h_usd,
                    markets: response.data.markets,
                    totalCurrencies: response.data.active_cryptocurrencies,
                }
            },
        }),
        getList: builder.query<CoinType[], number>({
            query: (count) => {
                return {
                    url: `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1`,
                }
            },
            transformResponse: (response: CoinPayloadType[]) => {
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
    reducerPath: 'api',
})

export const { useGetExchangesQuery, useGetGlobalStatsQuery, useGetListQuery } = api
