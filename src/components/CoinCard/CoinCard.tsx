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
    const { change, image, market_cap, name, price, rank } = props

    return (
        <Grid
            item={true}
            xs={3}
        >
            <Card
                sx={{
                    borderRadius: 3,
                    maxWidth: 350,
                    textAlign: 'center',
                }}
                variant="outlined"
            >
                <CardActionArea>
                    <Box
                        sx={{ display: 'flex',
                            flexDirection: 'column',
                            padding: 1,
                            rowGap: 0 }}
                    >
                        <Avatar
                            src={image}
                            sx={{ height: 30, width: 30 }}
                            variant="rounded"
                        />

                        <Typography
                            gutterBottom={true}
                            variant="h5"
                        >
                            {rank}
                            .
                            {name}
                        </Typography>
                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            Price:
                            {millify(price)}
                            $
                        </Typography>
                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            Market Cap:
                            {millify(market_cap)}
                        </Typography>

                        <Typography
                            color="text.primary"
                            variant="body2"
                        >
                            Daily Change:
                            {millify(change)}
                            {' '}
                            %
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    )
}