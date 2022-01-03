export type ExchangePayloadType ={
    id: string
    image: string
    name: string
    trade_volume_24h_btc: number
    url: string
    trust_score_rank: number
}

export type ExchangeType ={
    id: string
    image: string
    name: string
    tradeVolume: number
    url: string
    rank: number
}

export type GlobalStatsPayloadType = {
    data: {
        active_cryptocurrencies: number
        markets: number
        market_cap_change_percentage_24h_usd: number
    }
}

export type GlobalStatsType = {
    markets: number
    totalCurrencies: number
    marketCapChange: number
}

export type CoinPayloadType = {
    image: string
    market_cap_change_percentage_24h: number
    market_cap_rank: number
    name: string
    current_price: number
    market_cap: number
    id: string
}

export type CoinType = {
    currentPrice: number
    id: string
    image: string
    marketCap: {
        value: number
        dailyChange: number
        rank: number
    }
    name: string
}
