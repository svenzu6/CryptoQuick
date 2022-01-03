import {
    Box,
    Grid,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'

import {
    CoinCard,
    Loading,
} from '../../components'
import type { CoinType } from '../../pages/api'
import { useGetListQuery } from '../../pages/api'

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
        return (
            <Loading />
        )
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
