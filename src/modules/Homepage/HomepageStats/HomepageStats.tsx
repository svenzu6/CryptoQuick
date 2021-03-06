import {
    Box,
    Grid,
    Paper,
} from '@mui/material'
import React from 'react'

import { useGetGlobalStatsQuery } from '../../../pages/api'
import { HomepageStatsCard } from '../HomepageStatsCard'

export const HomepageStats = () => {
    const { data } = useGetGlobalStatsQuery()

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
                        title="Total Currencies"
                        value={data?.totalCurrencies}
                    />
                    <HomepageStatsCard
                        title="Total Markets"
                        value={data?.markets}
                    />
                    <HomepageStatsCard
                        title="Daily Market Cap Change"
                        value={`${data?.marketCapChange.toFixed(2)}%`}
                    />
                </Grid>
            </Paper>
        </Box>
    )
}
