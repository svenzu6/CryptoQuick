import {
    Grid,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetCryptosQuery } from '../../pages/api/cryptoApi'

import { HomepageStats } from './HomepageStats'

export const Homepage = () => {
    const response = useGetCryptosQuery(10)

    return (
        <Box>
            <HomepageStats />
            <Stack
                direction="row"
                pl={10}
                pr={15}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h4">
                    Top 10 cryptos
                </Typography>
                <Typography variant="h4">
                    <Link
                        color="secondary"
                        href="/cryptocurrencies"
                        underline="hover"
                        variant="subtitle1"
                    >
                        Show More
                    </Link>
                </Typography>
            </Stack>
            <Grid
                alignItems="center"
                container={true}
                direction="row"
                justifyContent="center"
                p={10}
                rowSpacing={2}
                spacing={5}
            >
                {response.data?.data.map((coin) => {
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
        </Box>
    )
}
