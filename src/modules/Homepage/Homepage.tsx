import {
    Grid,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import {
    CoinCard,
    Loading,
} from '../../components'
import { useGetListQuery } from '../../pages/api'

import { HomepageStats } from './HomepageStats'

export const Homepage = () => {
    const { data, isLoading } = useGetListQuery(10)

    if (isLoading) {
        return (
            <Loading />
        )
    }

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
                        color="#000000"
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
                    return (
                        <CoinCard
                            coin={coin}
                            key={coin.id}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}
