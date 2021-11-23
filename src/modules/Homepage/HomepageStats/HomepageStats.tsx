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
                    padding: 3,
                    width: 800,
                }}
            >
                <Grid
                    container={true}
                >
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
                </Grid>
            </Paper>
        </Box>
    )
}
