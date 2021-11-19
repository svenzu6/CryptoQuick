import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HomeIcon from '@mui/icons-material/Home'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import {
    Box,
    Toolbar,
    Typography,
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
                <Typography
                    align="center"
                    color="inherit"
                    component="h2"
                    noWrap={true}
                    sx={{ flex: 1 }}
                    variant="h4"
                >
                    CryptoQuick
                </Typography>
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
                        icon={<SwapHorizIcon fontSize="small" />}
                        label="Exchange"
                    />
                    <Breadcrumb
                        icon={<LightbulbIcon fontSize="small" />}
                        label="News"
                    />
                </Breadcrumbs>
            </Toolbar>
        </Box>
    )
}