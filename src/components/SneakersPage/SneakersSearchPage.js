import styles from './SneakersPage.module.css'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductCard from '../ProductCard/ProductCard'
import Box from '@mui/material/Box'
import NoResults from './NoResults/NoResults'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import infLoader from '../Loadings/InfiniteScrollLoading'
import axios from 'axios'

export default function SneakersSearchPage({ sneakers, title, q }) {
    const [items, setItems] = useState(sneakers)
    const [hasMore, setHasMore] = useState(true)
    const lastId = items[0] && items[items.length - 1]._id

    useEffect(() => {
        setItems(sneakers)
    }, [sneakers])

    const getMoreItems = async () => {
        const response = await axios.get(`/api/sneakers/search/${q}/${lastId}`)
        const newItems = response.data.data
        setHasMore(response.data.hasMore)
        setItems(prevItems => [...prevItems, ...newItems])
    }

    return (
        <Grid container className='page-container'>
            <Box mb={4} className='w-100'>
                <Typography variant='h4' component='h1'>
                    {sneakers[0] ? title : `We're sorry. We couldn't find results for "${q}"`}
                </Typography>
            </Box>
            <Grid className='w-100'>
                {items[0] && <InfiniteScroll
                    dataLength={items.length}
                    next={getMoreItems}
                    hasMore={hasMore}
                    loader={infLoader()}
                    style={{ overflow: 'hidden' }}
                >
                    {items.map(sneaker => (
                        <Box key={sneaker._id} mb={4} className={styles.box}>
                            <ProductCard
                                name={sneaker.name}
                                id={sneaker._id}
                                imgUrl={sneaker.imgUrl}
                                price={sneaker.price}
                            />
                        </Box>
                    ))}
                </InfiniteScroll>}
                {!sneakers[0] && <NoResults />}
            </Grid>
        </Grid>
    )
}