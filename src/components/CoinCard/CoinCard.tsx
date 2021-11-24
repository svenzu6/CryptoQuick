import {
    Avatar,
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
    const { currentPrice, image, marketCap, name } = props.coin

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
                                {marketCap.rank}
                                {'. '}
                                {name}
                            </Typography>
                            <Avatar
                                src={image}
                                sx={{ height: 30, width: 30 }}
                                variant="rounded"
                            />
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
                            {`Market Cap: ${millify(marketCap.value)}$`}
                        </Typography>
                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            {`Daily Change: ${millify(marketCap.dailyChange)}%`}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    )
}