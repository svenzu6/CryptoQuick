import { HomeOutlined } from '@ant-design/icons'
import {
    Avatar,
    Menu,
    Typography,
} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar
                    size="large"
                    src={`${process.env.PUBLIC_URL}/images/music.png`}
                />
                <Typography.Title level={2}>
                    <Link to="/">
                        music app
                    </Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item
                    icon={<HomeOutlined />}
                    key="home"
                >
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default Navbar
