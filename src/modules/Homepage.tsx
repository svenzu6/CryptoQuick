import {
    Col,
    Row,
    Statistic,
    Typography,
} from 'antd'

const { Title } = Typography

export const Homepage = () => {
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
            </Row>
        </>
    )
}
