type QuoteMetadata = {
    price: number
    market_cap: number
    percent_change_24h: number
}

type QuoteType = {
    USD: QuoteMetadata
}

type CoinType = {
    id: number
    name: string
    symbol: string
    quotes: QuoteType
    rank: number
}

export type GetCryptosQueryReponseType = {
    data?: CoinType[]
    isLoading: boolean
}