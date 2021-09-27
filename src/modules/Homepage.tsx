import {
    Col,
    Row,
    Statistic,
    Typography,
} from 'antd'

import { useGetArtistsQuery } from '../api/musicApi'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetArtistsQuery(1)
    // eslint-disable-next-line no-console
    console.log(data)

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

export default Homepage
