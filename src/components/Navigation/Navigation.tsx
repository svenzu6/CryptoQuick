import {
    AttachMoney,
    Home,
    SwapHoriz,
} from '@mui/icons-material'
import {
    Box,
    Breadcrumbs,
    Link,
    Toolbar,
} from '@mui/material'
import * as React from 'react'

import { Breadcrumb } from './Navigation.styles'

export const Navigation = () => {
    return (
        <Box
            sx={{
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Toolbar
                sx={{
                    alignSelf: 'center',
                    borderBottom: 1,
                    borderColor: 'divider',
                    maxWidth: 800,
                }}
            >
                <Link
                    color="#000000"
                    href="/"
                    underline="none"
                    variant="h4"
                >
                    CryptoQuick
                </Link>
            </Toolbar>
            <Toolbar
                component="nav"
                sx={{
                    justifyContent: 'center',
                    overflowX: 'auto',
                }}
                variant="dense"
            >
                <Breadcrumbs aria-label="breadcrumb">
                    <Breadcrumb
                        component="a"
                        href="/"
                        icon={<Home fontSize="small" />}
                        label="Home"
                    />
                    <Breadcrumb
                        component="a"
                        href="/cryptocurrencies"
                        icon={<AttachMoney fontSize="small" />}
                        label="Cryptocurrencies"
                    />
                    <Breadcrumb
                        component="a"
                        href="/exchanges"
                        icon={<SwapHoriz fontSize="small" />}
                        label="Exchanges"
                    />
                </Breadcrumbs>
            </Toolbar>
        </Box>
    )
}