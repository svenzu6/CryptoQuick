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

const headers = {
    Accept: 'text/plain',
    'X-CoinAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
}
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rest.coinapi.io/v1' }),
    endpoints: (builder) => ({
        getExchanges: builder.query<ExchangeType[], void>({
            query: () => {
                return {
                    headers: headers,
                    url: '/exchanges',
                }
            },
            transformResponse: (response: ExchangePayloadType[]) => {
                return response.map((exchange) => {
                    return {
                        id: exchange.exchange_id,
                        name: exchange.name,
                        tradeVolume: exchange.volume_1day_usd / 100,
                        url: exchange.website,
                    }
                })
            },
        }),
        getGlobalStats: builder.query<GlobalStatsType, void>({
            query: () => {
                return { url: '/v1/global-metrics/quotes/latest' }
            },
            transformResponse: (response: GlobalStatsPayloadType) => {
                return {
                    marketCapChange: response.data.market_cap_change_percentage_24h_usd,
                    markets: response.data.markets,
                    totalCurrencies: response.data.active_cryptocurrencies,
                }
            },
        }),
        getList: builder.query<CoinType[], void>({
            query: () => {
                return {
                    headers: headers,
                    url: '/assets?filter_asset_id=BTC,ETH,BNB,XRP,ADA,SOL,DOT,DOGE,USDC,TRX',
                }
            },
            transformResponse: (response: CoinPayloadType[]) => {
                return response.map((coin) => {
                    return {
                        currentPrice: coin.price_usd,
                        id: coin.asset_id,
                        marketCap: {
                            dailyChange: coin.volume_1day_usd,
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
