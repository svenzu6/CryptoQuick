import {
    Layout,
    Space,
    Typography,
} from 'antd'
import React from 'react'
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import {
    Artists,
    Homepage,
    Hot,
    News,
} from './modules'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route
                                exact={true}
                                path="/"
                            >
                                <Homepage />
                            </Route>
                            <Route
                                exact={true}
                                path="/hot"
                            >
                                <Hot />
                            </Route>
                            <Route
                                exact={true}
                                path="/artists"
                            >
                                <Artists />
                            </Route>
                            <Route
                                exact={true}
                                path="/news"
                            >
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title
                        level={5}
                        style={{ color: 'white', textAlign: 'center' }}
                    >
                        Copyright © 2021
                        <Link to="/">
                            Music App
                        </Link>
                        {' '}
                        <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/hot">
                            Hot
                        </Link>
                        <Link to="/news">
                            News
                        </Link>
                    </Space>

                </div>
            </div>

        </div>
    )
}

export default App
