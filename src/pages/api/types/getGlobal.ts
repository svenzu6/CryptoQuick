export type GetGlobalType = {
    data: GlobalType
}

export type GlobalType ={
    active_cryptocurrencies: number
    markets: number
    total_market_cap: Record<string, number>
    market_cap_change_percentage_24h_usd: number
}