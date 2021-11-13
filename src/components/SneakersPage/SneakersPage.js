import styles from './SneakersPage.module.css'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductCard from '../ProductCard/ProductCard'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import infLoader from '../Loadings/InfiniteScrollLoading'

export default function SneakerPage({ sneakers, title, apiName, filterGroup, filter }) {
    const [items, setItems] = useState(sneakers)
    const [hasMore, setHasMore] = useState(true)
    const lastId = items[items.length - 1]._id

    useEffect(() => {
        setItems(sneakers)
    }, [sneakers])

    const getMoreItems = async () => {
        let response
        if (filterGroup) {
            response = await axios.get(`/api/sneakers/${filterGroup}/${filter}/${lastId}`)
        } else {
            response = await axios.get(`/api/sneakers?&apiName=${apiName}&lastId=${lastId}`)
        }
        const newItems = response.data.data
        setHasMore(response.data.hasMore)
        setItems(prevItems => [...prevItems, ...newItems])
    }

    return (
        <Grid container className='page-container'>
            <Box mb={4} sx={{ width: '100%' }}>
                <Typography variant='h4' component='h1'>
                    {title}
                </Typography>
            </Box>
            <Grid container flexWrap='nowrap'>
                <InfiniteScroll
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
                </InfiniteScroll>
            </Grid>
        </Grid>
    )
}