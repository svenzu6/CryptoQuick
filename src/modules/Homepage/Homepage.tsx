import {
    Grid,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetListQuery } from '../../pages/api/geckoApi'

import { HomepageStats } from './HomepageStats'

export const Homepage = () => {
    const { data } = useGetListQuery('10')

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
        </Box>
    )
}
