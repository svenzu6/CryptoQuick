import {
    Link,
    Stack,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'

import { HomepageStats } from './HomepageStats'

export const Homepage = () => {
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
        </Box>
    )
}
