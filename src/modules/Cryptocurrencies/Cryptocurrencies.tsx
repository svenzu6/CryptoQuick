import {
    Box,
    CircularProgress,
    Grid,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetListQuery } from '../../pages/api/geckoApi'
import type { CoinType } from '../../pages/api/types'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const { data, isLoading } = useGetListQuery(100)

    const [cryptos, setCryptos] = useState<CoinType[]>(data ?? [])

    React.useEffect(() => {
        if (data) {
            setCryptos(data)
        }
    }, [data])

    const onSearch = (event: React.ChangeEvent<{ value: string }>) => {
        const filteredData = data?.filter((item) => {
            return item.name.toLowerCase().includes(event.target.value)
        }) ?? []

        setCryptos(filteredData)
    }

    if (isLoading) {
        return (<CircularProgress />)
    }

    return (
        <>
            <Box
                sx={{
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: 5,
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Search Crypto"
                    onChange={onSearch}
                    size="small"
                    variant="outlined"
                />
            </Box>
            <Grid
                alignItems="center"
                container={true}
                direction="row"
                justifyContent="center"
                p={10}
                rowSpacing={2}
            >
                {cryptos?.map((coin) => {
                    return (
                        <CoinCard
                            coin={coin}
                            key={coin.id}
                        />
                    )
                })}
            </Grid>
        </>
    )
}
