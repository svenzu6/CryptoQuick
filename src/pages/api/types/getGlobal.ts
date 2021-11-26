export type GetGlobalType = {
    data: GlobalType
}

export type GlobalType ={
    active_cryptocurrencies: number
    markets: number
    market_cap_change_percentage_24h_usd: number
}

export type GlobalStats = {
    markets: number
    totalCurrencies: number
    marketCapChange: number
}
