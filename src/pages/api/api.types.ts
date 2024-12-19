export type ExchangePayloadType ={
    exchange_id: string
    website: string
    name: string
    data_quote_start: string
    data_quote_end: string
    data_orderbook_start: string
    data_orderbook_end: string
    data_trade_start: string
    data_trade_end: string
    data_symbols_count: number
    volume_1hrs_usd: number
    volume_1day_usd: number
    volume_1mth_usd: number
    rank: number
}

export type ExchangeType ={
    id: string
    name: string
    tradeVolume: number
    url: string
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
  asset_id: string
  name: string
  type_is_crypto: number
  data_quote_start: string
  data_quote_end: string
  data_orderbook_start: string
  data_orderbook_end: string
  data_trade_start: string
  data_trade_end: string
  data_symbols_count: number
  volume_1hrs_usd: number
  volume_1day_usd: number
  volume_1mth_usd: number
  price_usd: number
  id_icon: string
  chain_addresses: {
    chain_id: string
    network_id: string
    address: string
  }[]
  data_start: string
  data_end: string
}

export type CoinType = {
    currentPrice: number
    id: string
    marketCap: {
        dailyChange: number
    }
    name: string
}
