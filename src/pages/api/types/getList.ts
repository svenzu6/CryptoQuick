export type GetListType = {
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
