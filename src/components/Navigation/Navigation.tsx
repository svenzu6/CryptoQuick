import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HomeIcon from '@mui/icons-material/Home'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import {
    Box,
    Link,
    Toolbar,
} from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import * as React from 'react'

import { Breadcrumb } from './Navigation.styles'

// USE THIS FOR LINKS: https://mui.com/components/breadcrumbs/#breadcrumbs-with-icons
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
                    color="secondary"
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
                        icon={<HomeIcon fontSize="small" />}
                        label="Home"
                    />
                    <Breadcrumb
                        component="a"
                        href="/cryptocurrencies"
                        icon={<AttachMoneyIcon fontSize="small" />}
                        label="Cryptocurrencies"
                    />
                    <Breadcrumb
                        component="a"
                        href="/exchange"
                        icon={<SwapHorizIcon fontSize="small" />}
                        label="Exchange"
                    />
                </Breadcrumbs>
            </Toolbar>
        </Box>
    )
}