import {
    Col,
    Row,
    Statistic,
    Typography,
} from 'antd'

import { useGetLatestLikedTrackQuery } from '../api/spotifyApi'

const { Title } = Typography

export const Homepage = () => {
    const { data } = useGetLatestLikedTrackQuery()

    const latest = `${data?.items[0].track.name} by ${data?.items[0].track.artists.map((artist: { name: string }) => {
        const names = artist.name

        return names
    })}`

    return (
        <>
            <Title
                className="heading"
                level={2}
            >
                Homepage
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total Songs Liked "
                        value={data?.total}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Latest liked "
                        value={latest}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Music"
                        value="5"
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Music"
                        value="5"
                    />
                </Col>
            </Row>
        </>
    )
}
function useGetMostListenedArtistQuery(argument0: string): { artist: any } {
    throw new Error('Function not implemented.')
}
