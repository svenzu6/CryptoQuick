import { Grid } from '@mui/material'
import * as React from 'react'

export const News = () => {
    const count = 10
    const newsCategory = 'Cryptocurrency'

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

            {/* <Grid
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
            </Grid> */}

        </Grid>

    )
}
