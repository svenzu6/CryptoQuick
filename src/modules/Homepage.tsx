import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Stack,
    Typography,

} from '@mui/material'
import * as React from 'react'

import { useGetLatestLikedTrackQuery } from '../api/spotifyApi'
import { getAuthorizeHref } from '../redux/oauthConfig'

export const Homepage = () => {
    getAuthorizeHref()
    // eslint-disable-next-line no-console
    console.log(getAuthorizeHref())

    const { data } = useGetLatestLikedTrackQuery()
    console.log(data)

    const latest = `${data?.items[0].track.name} by ${data?.items[0].track.artists.map((artist: { name: string }) => {
        const names = artist.name

        return names
    })}`

    const playTrack = data?.items[0].track.preview_url

    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pb: 6,
                    pt: 8,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        align="center"
                        color="text.primary"
                        component="h1"
                        gutterBottom={true}
                        variant="h2"
                    >
                        Spotify Stats
                    </Typography>
                    <Typography
                        align="center"
                        color="text.secondary"
                        paragraph={true}
                        variant="h5"
                    >
                        Fetching data from spotify where u can see what my latest songs and blablabl
                        blabalalallllllllllllllllllllllllllllllllllllllllllllsda
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={2}
                        sx={{ pt: 4 }}
                    >
                        <Button variant="contained">
                            Main call to action
                        </Button>
                        <Button variant="outlined">
                            Secondary action
                        </Button>

                    </Stack>
                </Container>
            </Box>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ pt: 4 }}
            >
                <Card
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                    <CardContent>
                        <Typography
                            component="div"
                            variant="h5"
                        >
                            {latest}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            Play
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                    <CardContent>
                        <Typography
                            component="div"
                            variant="h5"
                        >
                            {latest}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            Play
                        </Button>
                    </CardActions>
                </Card>
            </Stack>

        </div>
    )
}
