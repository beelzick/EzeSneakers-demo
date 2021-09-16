import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProductCard from './ProductCard'
import Box from '@material-ui/core/Box'
import styles from './sneakersPage.module.css'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import infLoader from './loadings/InfiniteScrollLoading'

export default function SneakerPage({ sneakers, title, apiName }) {
    const [items, setItems] = useState(sneakers)
    const [hasMore, setHasMore] = useState(true)
    const lastId = items[items.length - 1]._id
    const getMoreItems = async () => {
        const response = await axios.get(`/api/sneakers?&apiName=${apiName}&lastId=${lastId}`)
        const newItems = response.data.data
        setHasMore(response.data.hasMore)
        setItems(prevItems => [...prevItems, ...newItems])
    }

    return (
        <Grid container className='page-container'>
            <Box mb={4}>
                <Typography variant='h4' component='h1'>
                    {title}
                </Typography>
            </Box>
            <Grid>
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