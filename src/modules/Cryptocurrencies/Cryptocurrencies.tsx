import { Grid } from '@mui/material'

import { CoinCard } from '../../components/CoinCard'
import { useGetCryptosQuery } from '../../pages/api/cryptoApi'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const response = useGetCryptosQuery(100)
    // eslint-disable-next-line no-console
    console.log(response.data?.data)

    if (response.isLoading) {
        return (
            <p>
                Loading
            </p>
        )
    }

    return (
        <Grid
            alignItems="center"
            container={true}
            direction="row"
            justifyContent="center"
            p={10}
            rowSpacing={2}
            spacing={5}
        >
            {response.data?.data.map((coin) => {
                const { id, name, quotes, rank, symbol } = coin

                return (
                    <CoinCard
                        change={quotes.USD.percent_change_24h}
                        key={id}
                        market_cap={quotes.USD.market_cap}
                        name={name}
                        price={quotes.USD.price}
                        rank={rank}
                        symbol={symbol}
                    />
                )
            })}
        </Grid>
    )
}
