import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Typography,
} from '@mui/material'
import * as React from 'react'

import { useGetCryptoNewsQuery } from '../pages/api/cryptoNewsApi'

export const News = () => {
    const count = 10
    const newsCategory = 'Cryptocurrency'
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ count: count, newsCategory: newsCategory })
    // eslint-disable-next-line no-console
    console.log(cryptoNews)
    if (isFetching) return <CircularProgress />

    return (

        <Grid
            alignItems="center"
            container={true}
            direction="row"
            justifyContent="center"
            p={10}
            rowSpacing={2}
            spacing={5}
        >
            {
                cryptoNews?.data?.value.map((article, index) => (
                    <Grid
                        item={true}
                        key={index}
                    >
                        <CardActionArea
                            component="a"
                            href={article.url}
                        >
                            <Card sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography
                                        component="h2"
                                        variant="h5"
                                    >
                                        {article.name}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        variant="subtitle1"
                                    >
                                        {article.description}
                                    </Typography>
                                    <Typography
                                        paragraph={true}
                                        variant="subtitle1"
                                    />
                                    <Typography
                                        color="primary"
                                        variant="subtitle1"
                                    >
                                        Continue reading...
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    sx={{ display: { sm: 'block', xs: 'none' }, width: 160 }}
                                />
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))
            }
        </Grid>

    )
}
