import { Grid } from '@mui/material'
import React from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetListQuery } from '../../pages/api/geckoApi'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const { data } = useGetListQuery('100')
    console.log(data)

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
            {data?.map((coin) => {
                const { current_price, id, image, market_cap,
                    market_cap_change_percentage_24h, market_cap_rank, name } = coin

                return (
                    <CoinCard
                        change={market_cap_change_percentage_24h}
                        image={image}
                        key={id}
                        market_cap={market_cap}
                        name={name}
                        price={current_price}
                        rank={market_cap_rank}
                    />
                )
            })}
        </Grid>
    )
}
