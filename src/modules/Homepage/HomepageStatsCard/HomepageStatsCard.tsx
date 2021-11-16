import {
    Box,
    Grid,
    Typography,
} from '@mui/material'

import type { HomepageStatsCardProps } from './HomepageStatsCard.types'

export const HomepageStatsCard: React.FunctionComponent<HomepageStatsCardProps> = (props) => {
    const { title, value } = props

    return (
        <Grid
            item={true}
            md={4}
        >
            <Box
                sx={{
                    p: { md: 6, xs: 3 },
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2">
                    {title}
                </Typography>
                <Typography variant="h6">
                    {value}
                </Typography>
            </Box>
        </Grid>
    )
}