export type getExchanges = {
    data: ExchangesTypes
}

export type ExchangesTypes ={
    id: string
    image: string
    name: string
    trade_volume_24h_btc: number
    url: string
    trust_score_rank: number
}
export type ExchangesStats ={
    id: string
    image: string
    name: string
    tradeVolume: number
    url: string
    rank: number
}