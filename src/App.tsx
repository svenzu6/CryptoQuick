import {
    Layout,
    Space,
    Typography,
} from 'antd'
import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import { Homepage } from './modules'

const App = () => {
    const { Content, Footer, Header, Sider } = Layout

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <Navbar />
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{ padding: 0 }}
                />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        className="site-layout-background"
                        style={{ minHeight: 360, padding: 24 }}
                    >
                        <Switch>
                            <Route
                                exact={true}
                                path="/"
                            >
                                <Homepage />
                            </Route>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
