import { Grid } from '@mui/material'
import React from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetCryptosQuery } from '../../pages/api/cryptoApi'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const { data, isLoading } = useGetCryptosQuery(40)

    if (isLoading) {
        return (
            <p>
                Loading
            </p>
        )
    }

    return (
        <Grid
            alignItems="center"
            container={true}
            direction="row"
            justifyContent="center"
            p={10}
            rowSpacing={2}
            spacing={5}
        >
            {data?.data?.map((coin) => {
                const { id, name, quotes, rank, symbol } = coin

                return (
                    <CoinCard
                        change={quotes.USD.percent_change_24h}
                        key={id}
                        market_cap={quotes.USD.market_cap}
                        name={name}
                        price={quotes.USD.price}
                        rank={rank}
                        symbol={symbol}
                    />
                )
            })}
        </Grid>
    )
}
