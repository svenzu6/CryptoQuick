import {
    Box,
    Grid,
    Paper,
} from '@mui/material'
import { millify } from 'millify'
import React from 'react'

import { useGetGlobalQuery } from '../../../pages/api/geckoApi'
import { HomepageStatsCard } from '../HomepageStatsCard'

export const HomepageStats = () => {
    const { data } = useGetGlobalQuery()

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
                </Grid>
            </Paper>
        </Box>
    )
}
