import {
    Box,
    Grid,
    Paper,
} from '@mui/material'
import React from 'react'

import { HomepageStatsCard } from '../HomepageStatsCard'

export const HomepageStats = () => {
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
                        value="10"
                    />
                    <HomepageStatsCard
                        title="Total Exchanges"
                        value="10"
                    />
                    <HomepageStatsCard
                        title="Total 24h Volume"
                        value="10"
                    />
                    <HomepageStatsCard
                        title="Total Market Cap"
                        value="10"
                    />
                    <HomepageStatsCard
                        title="Total Markets"
                        value="10"
                    />
                </Grid>
            </Paper>
        </Box>
    )
}
