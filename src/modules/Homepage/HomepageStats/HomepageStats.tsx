import {
    Box,
    Grid,
    Paper,
} from '@mui/material'
import React from 'react'

import { useGetGlobalQuery } from '../../../pages/api/geckoApi'
import { HomepageStatsCard } from '../HomepageStatsCard'

export const HomepageStats = () => {
    const { data } = useGetGlobalQuery()
    console.log(data)

    return (
        <Box
            sx={{
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 3,
            }}
        >
            <Paper
                sx={{
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    display: 'flex',
                    maxWidth: 800,
                    padding: 3,
                }}
            >
                <Grid container={true}>
                    <HomepageStatsCard
                        title="Total Coins"
                        value={data?.data?.active_cryptocurrencies}
                    />
                    <HomepageStatsCard
                        title="Total Markets"
                        value={data?.data.markets}
                    />
                    <HomepageStatsCard
                        title="Total Exchanges"
                        value={10}
                    />
                    <HomepageStatsCard
                        title="Total 24h Volume"
                        value={23}
                    />
                    <HomepageStatsCard
                        title="Total Market Cap"
                        value={23}
                    />

                </Grid>
            </Paper>
        </Box>
    )
}
