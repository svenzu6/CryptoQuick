import {
    Box,
    Card,
    CardActionArea,
    Grid,
    Typography,
} from '@mui/material'
import millify from 'millify'
import * as React from 'react'

import type { CoinCardProps } from './CoinCard.types'

export const CoinCard: React.FunctionComponent<CoinCardProps> = (props) => {
    const {
        coin, index,
    } = props

    const { currentPrice,
        marketCap,
        name } = coin

    return (
        <Grid
            item={true}
            xs={3}
        >
            <Card
                sx={{
                    borderRadius: 3,
                    maxWidth: 350,
                }}
                variant="outlined"
            >
                <CardActionArea>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 3,
                            rowGap: 0,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                gutterBottom={true}
                                variant="h5"
                            >
                                {index + 1}
                                {'. '}
                                {name}
                            </Typography>

                        </Box>
                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            {`Price: ${millify(currentPrice)}$`}
                        </Typography>
                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            {`1 day volume: ${millify(marketCap.dailyChange)}`}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    )
}