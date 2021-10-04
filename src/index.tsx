import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import 'antd/dist/antd.css'
import App from './App'
import store from './redux/store'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ConfigProvider direction="ltr">
                <App />
            </ConfigProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
)