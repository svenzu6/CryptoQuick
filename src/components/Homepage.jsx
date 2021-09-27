import React from 'react';

import { Typography, Row , Col, Statistic } from 'antd';
import { useGetArtistsQuery } from '../services/musicApi';

const {Title} = Typography;

const Homepage = () => {

    const {data, isFetching} = useGetArtistsQuery();
    console.log(data);

    if(isFetching) return "Loading.." ;
    return (
        <>
            <Title level={2} className='heading'>Homepage
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Music" value="5"></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Music" value="5"></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Music" value="5"></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Music" value="5"></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Music" value="5"></Statistic>
                </Col>      
            </Row>
        </>
    )
}

export default Homepage
